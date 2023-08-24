interface ButtonType {
  children: React.ReactNode,
  className: string,
  onClick?: () => void
}

export const Button = ({ children, className, onClick }: ButtonType) => {
  return (
    <div> <button className={className} onClick={onClick}>{children}</button></div>
  )
}
