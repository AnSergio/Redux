# Projeto Vite + React + Redux + TypeScript

Este projeto foi criado com **Vite**, utilizando **React**, **Redux Toolkit** e **TypeScript**.  
Serve como base para aplicações modernas com gerenciamento de estado global.

---

## Tecnologias utilizadas

- [Vite](https://vitejs.dev/) – Bundler e dev server rápido
- [React](https://react.dev/) – Biblioteca para interfaces
- [Redux Toolkit](https://redux-toolkit.js.org/) – Gerenciamento de estado
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática

---

## Estrutura do projeto

A pasta `src/store` contém toda a configuração do Redux.

### `src/store/index.ts`

```ts
// Tipos globais para usar no projeto
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### `src/store/counterSlice.ts`

```ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    zera: (state) => {
      state.value = 0;
    },
  },
});

export const { zera, increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```
