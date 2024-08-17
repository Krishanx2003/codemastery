import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const LandingContainer: React.FC<Props> = ({
  children,
  ...props
}) => {
  return (
    <main {...props} >
    
        {children}
     
    </main>
  )
}
