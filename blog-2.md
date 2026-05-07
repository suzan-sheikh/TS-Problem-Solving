# TypeScript Generics: Reusable Components with Strong Type Safety

## How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

### Hi, developer 👋 Welcome to Platoon Commander - World.

Today we will learn about **Generics in TypeScript** and how they help us write reusable and strongly typed code without losing type safety.

---

## 🔍 What are Generics?

### Generics allow you to create `functions, classes, or components` that work with `any type`, while still keeping TypeScript’s type safety.

👉 In simple words:
> “Write once, use with any type, but still stay safe.”

---

## Basic Syntax

Let's start with a simple example:

```ts

function funcName<T>(input: T): T {
    return input;
}

let output1 = funcName<string>("Dynamic Word");
let output2 = funcName(42);

console.log(output1); // "Dynamic Word"
console.log(output2); // 42
```

In this example, we use <T> as a type parameter. When we call the function, we can either explicitly specify the type (as in output1) or let TypeScript infer it based on the argument (as in output2).

# Conclusion

Generics are a fantastic feature of TypeScript that help us write code that is both flexible and type-safe. By leveraging generics, we can build reusable components and functions that work with various types while ensuring type consistency. We hope this guide gives us a solid understanding of how to use generics effectively in our TypeScript projects.