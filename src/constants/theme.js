const size = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1200px',
}

export const devices = {
    mobile: `min-width: ${size.mobile}`,
    maxTablet: `max-width: ${size.tablet}`,
    tablet: `min-width: ${size.tablet}`,
    maxDesktop: `max-width: ${size.desktop}`,
    desktop: `min-width: ${size.desktop}`
}

export const theme = Object.freeze({
    mainFont: '#000000',
    red: '#890f01',
    darkRed: '#440700',
    decorativeLight: '	#eeeeee',
    beige: '#e7cfcc',
    darkGreen: '#295f48'
})