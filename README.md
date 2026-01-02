# 🚀 TypeScript Basics: Day 1

Notes and setup for transitioning from JavaScript to TypeScript.

## 🛠 Setup Essentials

- **Compiler:** `npm install -g typescript`
- **Runner:** `npm install -g ts-node` (runs TS without manual compilation)
- **Initialize:** `tsc --init` (creates `tsconfig.json`)

## 📝 Key Concepts

### 1. Basic Type Annotations

Explicitly define types to prevent "variable shape-shifting."

```typescript
let isDone: boolean = false;
let total: number = 100;
let name: string = "Gemini";
```
