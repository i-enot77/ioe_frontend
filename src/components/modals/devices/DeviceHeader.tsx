export type HeaderProps = {
  headerClassName: string
  title: string
}

export default function DeviceHeader({ headerClassName, title }: HeaderProps) {
  return <span className={`${headerClassName} modal_title`}>{title}</span>
}
