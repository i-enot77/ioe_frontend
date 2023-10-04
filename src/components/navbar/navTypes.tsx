import React from "react"

export interface dropProps {
  drop: boolean
  dropClassName?: string
  handleClick?(e: React.ChangeEvent<HTMLInputElement>): void
}

export interface navProps {
  listData: {
    src: string
    content: string
  }
}
