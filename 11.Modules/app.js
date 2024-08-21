// JavaScript, like most programming languages, was initially used for small tasks. But as its popularity grew, so did the amount of code that needed to be written.

// Having a large amount of code in a single file can be problematic, so it's helpful to split the code into multiple parts.

// The Solution to this is Called Modules

// WHAT IS A MODULE
// JavaScript modules are a way to organize and structure code.They allow developers to break their code into smaller, reusable pieces.You can think about them as smaller pieces of code that you can import and export between different parts of an application.

// Benefits of Using Modules

// - More Organized Code
// You probably wouldn't be excited to find a variable called "username" on line 431 or to need to start renaming a variable

// - Code Reusability
// By breaking down your code into smaller, modular components, you can easily reuse those components in other parts of your application or in entirely new applications.

// - No Naming Conflicts
// Using JavaScript modules helps you avoid naming conflicts. When working on a large project, it's common for developers to write multiple functions and variables with the same name. This can lead to naming conflicts where two or more pieces of code have the same name, causing unexpected behavior and errors.

// How to Use Modules in Javscript
// - create three javascript files

// Note
// Modules only work with the HTTP(s) protocol.
// A web-page opened via the file:// protocol cannot use import / export.

// function that adds two nunbers

export function add(num1, num2) {
  console.log(num1 + num2);
}
