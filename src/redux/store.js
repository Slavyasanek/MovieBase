import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { filmsReducer } from "./films/filmsSlice"
import { themeReducer } from "./theme/slice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfigTheme = {
    key: 'theme',
    storage,
    whitelist: ['value']
}

const persistConfigLang = {
    key: 'language',
    storage,
    whitelist: ['language']
}

const middleware = {
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
}

const reducers = combineReducers({
    films: persistReducer(persistConfigLang, filmsReducer),
    theme: persistReducer(persistConfigTheme, themeReducer)
})

export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware(middleware),
})

export const persistor = persistStore(store);