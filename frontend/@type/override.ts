import 'react'

declare module 'react' {
  interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
    width?: string, 
    height?: string
  }
}