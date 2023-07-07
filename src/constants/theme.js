const size = {
    mobile: '320px',
    maxTablet: '767px',
    tablet: '768px',
    maxDesktop: '1199px',
    desktop: '1200px',
}

export const devices = {
    mobile: `min-width: ${size.mobile}`,
    maxTablet: `max-width: ${size.tablet}`,
    tablet: `min-width: ${size.maxTablet}`,
    maxDesktop: `max-width: ${size.maxDesktop}`,
    desktop: `min-width: ${size.desktop}`
}

export const lightTheme = Object.freeze({
    mainFont: '#000000',
    red: '#890f01',
    darkRed: '#440700',
    decorativeLight: '#eeeeee',
    beige: '#e7cfcc',
    greyRed: '	#ae3333',
    greyPink: '	#e1aaaa'
})

export const darkTheme = Object.freeze({
    mainFont: '#DDE6ED',
    red: '#393053',
    darkRed: '#443C68',
    decorativeLight: '#18122B',
    beige: '#DDE6ED',
    greyRed: '	#635985',
    greyPink: '	#E5383B'
})
