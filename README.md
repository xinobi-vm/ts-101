# 🚀 TypeScript Basics: Day 1

Notes and setup for transitioning from JavaScript to TypeScript.

## 🛠 Setup Essentials

- **Compiler:** `npm install -g typescript`
- **Runner:** `npm install -g ts-node` (runs TS without manual compilation)
- **Initialize:** `tsc --init` (creates `tsconfig.json`)

### Fastest Way to get started

- **Install the Typescript Compiler:** `npm install -g typescript`
  - `tsc -v`
- **Initialize your project:**
  - `mkdir ts-101`
  - `cd ts-101`
  - `tsc --init`
    Once the tsc --init has been run, it creates a config file called .tsconfig
- **The 'Write-Compile-Run' Loop:** TS cannot be directly run. It needs to be compiled first
  - Create your file `touch index.ts`
  - Lets add some code
    `const greeting: string = "Hello, World from Typescript!";`
    `console.log(greeeting);`
  - Let's Compile it, after compilation it creates a index.js file
    `tsc index.ts`
  - Let's Run it
    `node index.js
    - Now everytime the source file changes, TS needs to be recompiled
  - Watch Mode
    `tsc index.ts --watch`
    - This automatically recompiles as soon as .ts files are saved. But you still have to run it standalone
- **Better Tooling:** Install ts-node
  - `sudo npm install -g ts-node`
  - Now compile and run it in a single step without generating the JS files
    `ts-node index.ts`

## 📝 Key Concepts

### 1. Basic Type Annotations

Explicitly define types to prevent "variable shape-shifting."

```typescript
let isDone: boolean = false;
let total: number = 100;
let name: string = "Gemini";
```
