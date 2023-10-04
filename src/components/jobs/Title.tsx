export type TitleProp = {
  children: string
  titleStyle?: string
  handleClick?(): void
}

function Title({ children, titleStyle, handleClick }: TitleProp) {
  const style = {
    title: `font-bold text-lg mb-3 sticky top-0 bg-white pt-5 pb-3`,
  }
  return (
    <p onClick={handleClick} className={`${style.title} ${titleStyle}`}>
      {children}
    </p>
  )
}

export default Title
