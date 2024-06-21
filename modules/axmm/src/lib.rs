//! [ArceOS](https://github.com/rcore-os/arceos) memory management module.

#![no_std]

#[macro_use]
extern crate log;
extern crate alloc;

mod aspace;

pub use self::aspace::AddrSpace;

use axerrno::{AxError, AxResult};
use axhal::mem::phys_to_virt;
use axhal::paging::{PageTable, PagingError};
use lazy_init::LazyInit;
use memory_addr::{PhysAddr, VirtAddr};

const USER_ASPACE_BASE: usize = 0;
const USER_ASPACE_SIZE: usize = 0x7fff_ffff_f000;

static KERNEL_ASPACE: LazyInit<AddrSpace> = LazyInit::new();

fn paging_err_to_ax_err(err: PagingError) -> AxError {
    warn!("Paging error: {:?}", err);
    match err {
        PagingError::NoMemory => AxError::NoMemory,
        PagingError::NotAligned => AxError::InvalidInput,
        PagingError::NotMapped => AxError::NotFound,
        PagingError::AlreadyMapped => AxError::AlreadyExists,
        PagingError::MappedToHugePage => AxError::InvalidInput,
    }
}

/// Creates a new address space for kernel itself.
pub fn new_kernel_aspace() -> AxResult<AddrSpace> {
    let mut aspace = AddrSpace::new_empty(
        VirtAddr::from(axconfig::KERNEL_ASPACE_BASE),
        axconfig::KERNEL_ASPACE_SIZE,
    )?;
    for r in axhal::mem::memory_regions() {
        aspace.map_fixed(phys_to_virt(r.paddr), r.paddr, r.size, r.flags.into())?;
    }
    Ok(aspace)
}

/// Creates a new address space for user processes.
pub fn new_user_aspace() -> AxResult<AddrSpace> {
    let mut aspace = AddrSpace::new_empty(VirtAddr::from(USER_ASPACE_BASE), USER_ASPACE_SIZE)?;
    if !cfg!(target_arch = "aarch64") {
        // ARMv8 use a separate page table (TTBR0_EL1) for user space, it
        // doesn't need to copy the kernel portion to the user page table.
        aspace.copy_mappings_from(&KERNEL_ASPACE)?;
    }
    Ok(aspace)
}

/// Returns the globally unique kernel address space.
pub fn kernel_aspace() -> &'static AddrSpace {
    &KERNEL_ASPACE
}

/// Returns the root physical address of the kernel page table.
pub fn kernel_page_table() -> &'static PageTable {
    KERNEL_ASPACE.page_table()
}

/// Returns the root physical address of the kernel page table.
pub fn kernel_page_table_root() -> PhysAddr {
    KERNEL_ASPACE.page_table_root()
}

/// Initializes virtual memory management.
///
/// It mainly sets up the kernel virtual memory address space and recreate a
/// fine-grained kernel page table.
pub fn init_memory_management() {
    info!("Initialize virtual memory management...");

    let kernel_aspace = new_kernel_aspace().expect("failed to initialize kernel address space");
    debug!("kernel address space init OK: {:#x?}", kernel_aspace);
    KERNEL_ASPACE.init_by(kernel_aspace);
    axhal::paging::set_kernel_page_table(kernel_page_table());
}

/// Initializes kernel paging for secondary CPUs.
pub fn init_memory_management_secondary() {
    axhal::paging::set_kernel_page_table(kernel_page_table());
}