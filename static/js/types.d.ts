// Type declarations for JSX component imports
declare module '*.jsx' {
  import { ComponentType } from 'react'
  const Component: ComponentType<any>
  export default Component
}

declare module './Components/*.jsx' {
  import { ComponentType } from 'react'
  const Component: ComponentType<any>
  export default Component
}

declare module '../Components/*.jsx' {
  import { ComponentType } from 'react'
  const Component: ComponentType<any>
  export default Component
}

declare module './context/*.jsx' {
  import { ComponentType } from 'react'
  const Component: ComponentType<any>
  export default Component
  export const useTheme: () => any
  export const ThemeProvider: ComponentType<any>
}

// Image imports
declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

// CSS imports
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}







