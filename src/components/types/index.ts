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
  clickHandler?(): void
};

export type DetailProp = {
  title?: string
  devNameClass?: string
  statusClass?: string
  detailPage?: boolean
  detailStyle?: string
}