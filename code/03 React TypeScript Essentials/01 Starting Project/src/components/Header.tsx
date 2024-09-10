import { ReactNode } from "react"

interface HeaderProps {
  image: {
    src: string
    alt: string
  }
  children: ReactNode
}

export default function Header({ image, children }: HeaderProps) {
  return (
    <div>
      <img src={image.src} alt={image.alt} />
      {children}
    </div>
  )
}
