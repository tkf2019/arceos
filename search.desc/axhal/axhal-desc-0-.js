searchState.loadedDescShard("axhal", 0, "ArceOS hardware abstraction layer, provides unified APIs …\nArchitecture-specific types and operations.\nConsole input and output.\nCPU-related operations.\nInterrupt management.\nPhysical memory management.\nMiscellaneous operation, e.g. terminate the system.\nMulti-core operations.\nPage table manipulation.\nInitializes the platform devices for the primary CPU.\nInitializes the platform devices for secondary CPUs.\nTime-related operations.\nThread Local Storage (TLS) support.\nTrap handling.\nExtended state of a task, such as FP/SIMD states.\nA 512-byte memory region for the FXSAVE/FXRSTOR …\nA wrapper of the Global Descriptor Table (GDT) with …\nA wrapper of the Interrupt Descriptor Table (IDT).\nKernel code segment for 32-bit mode.\nKernel code segment for 64-bit mode.\nKernel data segment.\nTSS segment.\nSaved hardware states of a task.\nIn 64-bit mode the TSS holds information that is not …\nSaved registers when a trap (interrupt or exception) …\nUser code segment for 32-bit mode.\nUser code segment for 64-bit mode.\nUser data segment.\nMakes the current CPU to ignore interrupts.\nAllows the current CPU to respond to interrupts.\nExtended states, i.e., FP/SIMD states.\nFlushes the TLB.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThread Local Storage (TLS).\nMemory region for the FXSAVE/FXRSTOR instruction.\nHalt the current CPU.\nInitializes the context for a new task, with the given …\nThe full 64-bit canonical forms of the interrupt stack …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe 16-bit offset to the I/O permission bit map from the …\nReturns whether the current CPU is allowed to respond to …\nWhether the trap is from userspace.\nThe kernel stack top of the task.\nLoads the GDT into the CPU (executes the <code>lgdt</code> …\nLoads the IDT into the CPU (executes the <code>lidt</code> instruction).\nLoads the TSS into the CPU (executes the <code>ltr</code> instruction).\nConstructs a new GDT struct that filled with the default …\nConstructs a new IDT struct that filled with entries from …\nCreates a new default context for a new task.\nCreates a new TSS with zeroed privilege and interrupt …\nReturns the GDT pointer (base and limit) that can be used …\nReturns the IDT pointer (base and limit) that can be used …\nThe full 64-bit canonical forms of the stack pointers …\nReads the register that stores the current page table root.\nReads the thread pointer of the current CPU.\n<code>RSP</code> after all callee-saved registers are pushed.\nSwitches to another task.\nRelaxes the current CPU and waits for interrupts.\nWrites the register to update the current page table root.\nWrites the thread pointer of the current CPU.\nReads a byte from the console, or returns <code>None</code> if no input …\nWrites a byte to the console.\nWrite a slice of bytes to the console.\nGets the pointer to the current task with …\nSets the pointer to the current task with …\nReturns the ID of the current CPU.\nReturns whether the current CPU is the primary CPU (aka …\nThe type if an IRQ handler.\nRegisters an IRQ handler for the given IRQ.\nEnables or disables the given IRQ.\nDevice memory. (e.g., MMIO regions)\nExecutable.\nFree memory for allocation.\nA physical memory region.\nThe flags of a physical memory region.\nReadable.\nReserved memory, do not use for allocation.\nUncachable memory. (e.g., framebuffer)\nWritable.\nGet a flags value with all known bits set.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nWhether all set bits in a source flags value are also set …\nThe intersection of a source flags value with the …\nGet a flags value with all bits unset.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nThe region flags, see <code>MemRegionFlags</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether all known bits in this flags value are set.\nWhether all bits in this flags value are unset.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nReturns an iterator over all physical memory regions.\nThe region name, used for identification.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe start physical address of the region.\nConverts a physical address to a virtual address.\nThe intersection of a source flags value with the …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nThe size in bytes of the region.\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nConverts a virtual address to a physical address.\nShutdown the whole system (in QEMU), including all CPUs.\nStarts the given secondary CPU with its boot stack.\nThe architecture-specific page table.\nImplementation of <code>PagingHandler</code>, to provide physical …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA <code>Duration</code> type to represent a span of time, typically …\nThe maximum duration.\nThe duration of one microsecond.\nNumber of microseconds in a second.\nThe duration of one millisecond.\nNumber of milliseconds in a second.\nThe duration of one nanosecond.\nNumber of nanoseconds in a microsecond.\nNumber of nanoseconds in a millisecond.\nNumber of nanoseconds in a second.\nThe duration of one second.\nThe timer IRQ number.\nA measurement of the system clock.\nA duration of zero time.\nComputes the absolute difference between <code>self</code> and <code>other</code>.\nReturns the total number of whole microseconds contained …\nReturns the total number of whole milliseconds contained …\nReturns the number of milliseconds contained by this …\nReturns the number of milliseconds contained by this …\nReturns the total number of nanoseconds contained by this …\nReturns the number of <em>whole</em> seconds contained by this …\nReturns the number of seconds contained by this <code>Duration</code> …\nReturns the number of seconds contained by this <code>Duration</code> …\nBusy waiting for the given duration.\nBusy waiting until reaching the given deadline.\nChecked <code>Duration</code> addition. Computes <code>self + other</code>, …\nChecked <code>Duration</code> division. Computes <code>self / other</code>, …\nChecked <code>Duration</code> multiplication. Computes <code>self * other</code>, …\nChecked <code>Duration</code> subtraction. Computes <code>self - other</code>, …\nReturns the current clock time in hardware ticks.\nDivide <code>Duration</code> by <code>Duration</code> and return <code>f32</code>.\nDivide <code>Duration</code> by <code>Duration</code> and return <code>f64</code>.\nDivide <code>Duration</code> by <code>f32</code>.\nDivide <code>Duration</code> by <code>f64</code>.\nReturn epoch offset in nanoseconds (wall time offset to …\nReturns the argument unchanged.\nCreates a new <code>Duration</code> from the specified number of days.\nCreates a new <code>Duration</code> from the specified number of hours.\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of whole …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of weeks.\nCalls <code>U::from(self)</code>.\nReturns true if this <code>Duration</code> spans no time.\nReturns the time elapsed since system boot in <code>TimeValue</code>.\nReturns nanoseconds elapsed since system boot.\nMultiplies <code>Duration</code> by <code>f32</code>.\nMultiplies <code>Duration</code> by <code>f64</code>.\nConverts nanoseconds to hardware ticks.\nCreates a new <code>Duration</code> from the specified number of whole …\nSaturating <code>Duration</code> addition. Computes <code>self + other</code>, …\nSaturating <code>Duration</code> multiplication. Computes <code>self * other</code>, …\nSaturating <code>Duration</code> subtraction. Computes <code>self - other</code>, …\nSet a one-shot timer.\nReturns the fractional part of this <code>Duration</code>, in whole …\nReturns the fractional part of this <code>Duration</code>, in whole …\nReturns the fractional part of this <code>Duration</code>, in …\nConverts hardware ticks to nanoseconds.\nThe checked version of <code>from_secs_f32</code>.\nThe checked version of <code>from_secs_f64</code>.\nReturns the time elapsed since epoch (also known as …\nReturns nanoseconds elapsed since epoch (also known as …\nThe memory region for thread-local storage.\nAllocates the memory region for TLS, and initializes it.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the pointer to the TLS static area.\nA slice of IRQ handler functions.\nA slice of page fault handler functions.")