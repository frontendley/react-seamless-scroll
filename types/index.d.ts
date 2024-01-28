import { ReactElement } from "react"

interface ReactSeamLessProps
    extends React.HTMLProps<HTMLDivElement>
{
    children: ReactElement
}

type Option = {
    hoverStop?: boolean
    step?: number
  } & ReactSeamLessProps
