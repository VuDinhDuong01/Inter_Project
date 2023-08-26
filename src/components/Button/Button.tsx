
import { ComponentProps } from "react";
type ButtonProps = ComponentProps<"button">;

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <div> <button className={className} onClick={onClick}>{children}</button></div>
  )
}
