import {createTheme} from '@mui/material/styles'
import Colours from '../styles/colours'

const Theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: Colours.white,
            light: '#bee9fa',
        },
        secondary: {
            main: '#f50057',
        },
        text: {
            primary: '#212121',
            secondary: '#424242',
            disabled: '#757575',
        },
        typography: {
            fontFamily: ['Montserrat'].join(','),
            button: {
                fontFamily: 'Montserrat',
            },
        },
    },
    overrides: {
        MuiSwitch: {
            root: {
                width: 42,
                height: 26,
                padding: 0,
                margin: 8,
            },
            switchBase: {
                padding: 1,
                '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + $track': {
                        opacity: 1,
                        border: 'none',
                    },
                },
            },
            colorSecondary: {
                "&$checked": {
                    // Controls checked color for the thumb
                    color: Colours.blue
                }
            },
            thumb: {
                width: 24,
                height: 24,
            },
            track: {
                borderRadius: 13,
                border: '1px solid #bdbdbd',
                backgroundColor: '#fafafa',
                opacity: 1,
                transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            },
        },
    },
})
export default Theme
