const { createSlice } = require("@reduxjs/toolkit");

export const THEME = {
    LIGHT: 'light',
    DARK: 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: THEME.LIGHT,
    reducers: {
        setTheme(state, action) {
            return state = action.payload;
        }
    }
})

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;