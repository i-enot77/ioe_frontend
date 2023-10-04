import { FormProp } from "./types"

export default function Form({
  action,
  submit,
  formClass,
  children,
}: FormProp) {
  return (
    <form action={action} onSubmit={submit} className={formClass}>
      {children}
    </form>
  )
}
