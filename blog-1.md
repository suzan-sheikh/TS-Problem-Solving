## Why is any labeled a "type safety" and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

### Hi, developer Welcome to Platoon Commander - World. Today i will share with you some topic in Typescript. first of all, why `any` unsafe and `unknown` is better and `safer`. Then i will discus how can i `Type Narrowing` in Typescript.

## 1. Why `any`

The `any` type in TypeScript is considered a **"type safety"** because it acts as an escape hatch that completely turns off the type checker for a given variable.

It essentially tells the compiler to trust the developer. This allows any operation—such as accessing non-existent methods or treating a number like a function—without errors during development, which can lead to runtime crashes.

---

> Disabled Type Checking

When a variable is typed as `any`, TypeScript stops providing:

- Autocompletion
- Type checking
- Refactoring support

---

> Contagious Nature

`any` spreads through your codebase.

If one variable is `any`, everything derived from it also becomes `any`, removing safety across the system.

---

> Run time Errors `any` allows invalid operations that only fail at runtime:

```ts
// I declared this variable with type `any`
let myVar: any = 100;

// This will compile without error, but it will fail at runtime
myVar.toUpperCase(); // Runtime error

// We are using a string method on a number type value,
// which is unsafe because it causes a runtime crash.
```

---

## 2. Why `unknown` is better than `any`

```ts
// `unknown` does NOT allow direct usage.
// You must check the type first before using it.

let data: unknown = "hello";

data.toUpperCase(); // Error

if (typeof data === "string") {
  data.toUpperCase(); // Safe and better
}
```

---

## 3. Type Narrowing

> Type narrowing is converting a big type into a specific type conditions.

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // string narrowed
  } else {
    console.log(value.toFixed(2)); // number narrowed
  }
}
```

> ## Actual type return in my function for type narrowing like string and number


### ** Best Regard,  Platoon Commander - Md Suzan Sheikh


