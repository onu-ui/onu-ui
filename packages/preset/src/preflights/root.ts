import { getColors } from 'theme-colors'

export default `
:root {
  --color-primary-50: 250 245 255;
  --color-primary-100: 243 232 255;
  --color-primary-200: 233 213 255;
  --color-primary-300: 216 180 254;
  --color-primary-400: 192 132 252;
  --color-primary-500: 168 85 247;
  --color-primary-600: 147 51 234;
  --color-primary-700: 126 34 206;
  --color-primary-800: 107 33 168;
  --color-primary-900: 88 28 135;
  --color-primary-950: 59 7 100;
  --color-primary-DEFAULT: var(--color-primary-500);
  
}
`.trim()

const gray = `
--color-gray-50: 248 250 252;
--color-gray-100: 241 245 249;
--color-gray-200: 226 232 240;
--color-gray-300: 203 213 225;
--color-gray-400: 148 163 184;
--color-gray-500: 100 116 139;
--color-gray-600: 71 85 105;
--color-gray-700: 51 65 85;
--color-gray-800: 30 41 59;
--color-gray-900: 15 23 42;
--color-gray-950: 2 6 23;
`.trim()

export function generateThemeCSS(color: string) {
  const theme = getColors(color)
  return theme
}
