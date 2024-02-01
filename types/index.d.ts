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

// eslint-disable-next-line init-declarations
declare const SeamLess: React.FC<Option>

export default SeamLess
