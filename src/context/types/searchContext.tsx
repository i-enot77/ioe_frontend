export type SearchContextTypes = {
  filterBy: string
  inputValue: string
  searchValue: string
  isFilterDrop: boolean
  setFilterBy: React.Dispatch<React.SetStateAction<string>>
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  setIsFilterDrop: React.Dispatch<React.SetStateAction<boolean>>
  inputChange(e: React.ChangeEvent<HTMLInputElement>): void
  handleSubmit(e: React.FormEvent): void
  filterChange(e: React.ChangeEvent<HTMLInputElement>): void
}
