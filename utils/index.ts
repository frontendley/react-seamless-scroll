import React, { ReactElement } from "react"

export const addRefInChildren = (
  data: ReactElement ,
  ref: React.RefObject<HTMLElement>
) => React.cloneElement(data, { ref })

export const getElementSize = (
  ele: HTMLElement | null
) => ({
  width: ele?.offsetWidth || 0,
  height: ele?.offsetHeight || 0
})
