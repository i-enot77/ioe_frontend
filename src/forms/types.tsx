import React from "react"

export interface InputProp {
  labelName?: string
  label?: string
  type?: string
  id?: string
  inputName?: string
  placeholder?: string
  inputValue?: string | number
  onChangeInputHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputClassName?: string
  labelClassName?: string
  isCheck?: boolean
}

export interface SearchInputProp {
  inputClass: string
  type: string
  inputName: string
  inputValue?: string
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void
  placeholder: string
}

export interface TextareaProp {
  textareaName?: string
  label?: string
  id?: string
  placeholderItem?: string
  itemValue?: string
  onChangeHandler?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  textareaClassName?: string
  labelClassName?: string
  maxlength?: number
}

export interface FormProp {
  action?: string
  submit?(e: React.FormEvent): void
  formClass?: string
  children: React.ReactNode
}

export interface SelectProps {
  labelText: string
  selectName: string
  id: string
  option: string
}
