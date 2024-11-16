import { FC } from "react"

interface IporpsPrimerComponente {
    text:string;
    color: string;
    fontSize: number;
}

export const PrimerComponente: FC<IporpsPrimerComponente> = ({
    text, 
    color,
    fontSize,
}) => {
  return (
    <div style={{ color , fontSize: `${fontSize}rem`}}>
        <p></p>
        {text}
    </div>
  )
}

 