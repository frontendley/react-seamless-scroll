import React, { useEffect, useMemo, useRef, useState } from "react"

import { Option } from "../types"
import { addRefInChildren, getElementSize } from "../utils"

const ReactSeamLess: React.FC<Option> = (
  props: Option
) => {
  const {
    children,
    hoverStop = true,
    step = 1,
    ...htmlProps
  } = props
  if (!React.isValidElement(children))
    throw new Error("children must be an valid element")
  // hover stop
  const [isHover, setIsHover] = useState<boolean>(false)
  const onMouseEnter = () => setIsHover(true)
  const onMouseLeave = () => setIsHover(false)

  const targetRef = useRef<HTMLElement>(null)
  const targetNode = addRefInChildren(children, targetRef)
  const copyNode = React.cloneElement(children)

  const [targetNodeSize, setTargetNodeSize] = useState<Record<"width"|"height", number> | null>()
  useEffect(() => {
    setTargetNodeSize(getElementSize(targetRef.current))
  }, [targetRef])
  const [yPos, setYPos] = useState<number>(0)
  const computedMoveDistance = (
    pos: number,
    max: number,
    _step: number
  ) => {
    if (Math.abs(pos) > max) return 0

    return pos + _step
  }
  const move = () => {
    requestAnimationFrame(() => {
      if (
        !targetNodeSize
        || (isHover && hoverStop)
      ){
        return
      }
      // 向上滚动
      const { height } = targetNodeSize
      setYPos(computedMoveDistance(yPos, height, -step))
    })
  }

  const computedContainerStyle: React.CSSProperties = useMemo(() => ({
    transform: `translate(0, ${yPos}px)`,
    transition: "lieaner 1s"
  }), [yPos])

  // restart scroll
  useEffect(() => {
    move()
  }, [targetNodeSize, yPos, isHover])

  return (
    <div
      className="wrap"
      style={{
        width: "300px",
        height: targetNodeSize?.height,
        border: "1px solid #333",
        overflow: "hidden"
      }}
      {...htmlProps}
    >
      <div
        className="container"
        style={computedContainerStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {
          targetNode
        }
        {
          copyNode
        }
      </div>
    </div>
  )
}


export default ReactSeamLess
