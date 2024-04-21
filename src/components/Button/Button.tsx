import React from "react"
import './Button.css'


interface IButtonProps{
  onClick: () => void;  
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ onClick, children}) =>{
  return (
    <button onClick={onClick} className="button">
    {children}
    </button>
  )
}

