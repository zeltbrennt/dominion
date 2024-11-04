
import { extendTheme } from '@mui/joy/styles';


declare module '@mui/joy/styles' {
    // No custom tokens found, you can skip the theme augmentation.
}


export const theme = extendTheme({
    "colorSchemes": {
        "light": {
            "palette": {
                "primary": {
                    "50": "#eff6ff",
                    "100": "#dbeafe",
                    "200": "#bfdbfe",
                    "300": "#93c5fd",
                    "400": "#60a5fa",
                    "500": "#3b82f6",
                    "600": "#2563eb",
                    "700": "#1d4ed8",
                    "800": "#1e40af",
                    "900": "#1e3a8a"
                },
                "danger": {
                    "50": "#faf5ff",
                    "100": "#f3e8ff",
                    "200": "#e9d5ff",
                    "300": "#d8b4fe",
                    "400": "#c084fc",
                    "500": "#a855f7",
                    "600": "#9333ea",
                    "700": "#7e22ce",
                    "800": "#6b21a8",
                    "900": "#581c87"
                },
                "warning": {
                    "50": "#fefce8",
                    "100": "#fef9c3",
                    "200": "#fef08a",
                    "300": "#fde047",
                    "400": "#facc15",
                    "500": "#eab308",
                    "600": "#ca8a04",
                    "700": "#a16207",
                    "800": "#854d0e",
                    "900": "#713f12"
                },
                "neutral": {
                    "50": "#eceff1",
                    "100": "#cfd8dc",
                    "200": "#b0bec5",
                    "300": "#90a4ae",
                    "400": "#78909c",
                    "500": "#607d8b",
                    "600": "#546e7a",
                    "700": "#455a64",
                    "800": "#37474f",
                    "900": "#263238"
                }
            }
        },
        "dark": {
            "palette": {
                "primary": {
                    "50": "#eff6ff",
                    "100": "#dbeafe",
                    "200": "#bfdbfe",
                    "300": "#93c5fd",
                    "400": "#60a5fa",
                    "500": "#3b82f6",
                    "600": "#2563eb",
                    "700": "#1d4ed8",
                    "800": "#1e40af",
                    "900": "#1e3a8a"
                },
                "danger": {
                    "50": "#faf5ff",
                    "100": "#f3e8ff",
                    "200": "#e9d5ff",
                    "300": "#d8b4fe",
                    "400": "#c084fc",
                    "500": "#a855f7",
                    "600": "#9333ea",
                    "700": "#7e22ce",
                    "800": "#6b21a8",
                    "900": "#581c87"
                },
                "warning": {
                    "50": "#fefce8",
                    "100": "#fef9c3",
                    "200": "#fef08a",
                    "300": "#fde047",
                    "400": "#facc15",
                    "500": "#eab308",
                    "600": "#ca8a04",
                    "700": "#a16207",
                    "800": "#854d0e",
                    "900": "#713f12"
                },
                "neutral": {
                    "50": "#eceff1",
                    "100": "#cfd8dc",
                    "200": "#b0bec5",
                    "300": "#90a4ae",
                    "400": "#78909c",
                    "500": "#607d8b",
                    "600": "#546e7a",
                    "700": "#455a64",
                    "800": "#37474f",
                    "900": "#263238"
                }
            }
        }
    }
})

export default theme;