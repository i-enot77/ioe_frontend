export type ChildrenProp = {
  children: React.ReactNode;
};


export type DisableButtonProp = {
  children: React.ReactNode
  buttonClass?: string
  clickHandler?(): void
  isDisabled?: boolean
};

export type ButtonProp = {
  children: React.ReactNode
  buttonClass?: string
  clickHandler?: any
}

export type DetailProp = {
  title?: string
  devNameClass?: string
  statusClass?: string 
  detailStyle?: string
  detailPage: boolean
 
}

export type EditInputProp = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>