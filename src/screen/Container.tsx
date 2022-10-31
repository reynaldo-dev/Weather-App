import { ReactNode } from "react"

interface ContainerProps {
    children : ReactNode
}
export const Container = ({children} : ContainerProps) => {
    return (
        <div className=' p-2 mx-40 mt-5 flex flex-col gap-2'>
            {children}
        </div>
    )
}
