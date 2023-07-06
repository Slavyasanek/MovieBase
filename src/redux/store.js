import { configureStore } from "@reduxjs/toolkit"
import { filmsReducer } from "./films/filmsSlice"
import { themeReducer } from "./theme/slice"

export const store = configureStore({
    reducer: {
        films: filmsReducer,
        theme: themeReducer
    }
})