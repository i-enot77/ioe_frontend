export type HeaderProps = {
  title: string
}

export default function DeviceHeader({ title }: HeaderProps) {
  return <div className="modal_title">{title}</div>
}
