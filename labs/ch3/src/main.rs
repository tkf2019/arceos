#![no_std]
#![no_main]

#[macro_use]
extern crate axstd as std;

#[no_mangle]
fn main() {
    println!("Hello, main task!");
}
