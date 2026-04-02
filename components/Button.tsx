import { FC, MouseEventHandler, ReactNode } from "react"

type ButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>
    children: ReactNode;
}


export const Button: FC<ButtonProps> = ({ onClick, children }) => (
    <div className=" flex gap-3 flex-wrap">
        <button 
            className="bg-blue-200 border-2 border-blue-50 px-2 py-1 shadow-2xl rounded cursor-pointer hover:bg-blue-400 text-black" 
            onClick={onClick}
        >    
            {children}
        </button>
    </div>
)
