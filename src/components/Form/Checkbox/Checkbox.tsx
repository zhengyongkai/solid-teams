import { destructure } from '@solid-primitives/destructure'
import { createEffect, on, createSignal, createUniqueId } from 'solid-js'

type changeEvent = Event & { currentTarget: HTMLInputElement; target: HTMLInputElement }

interface CheckboxPropsInf {
  checked: boolean
  onchange?: (e: changeEvent) => void
  ineterminate?: boolean
  classList?: string
}

export default function Checkbox(props: CheckboxPropsInf) {
  const { ineterminate = createSignal(false)[0], checked, classList } = destructure(props)
  const { onchange } = props
  const id = createUniqueId()
  createEffect(
    on(
      () => ineterminate(),
      (value) => {
        const input: any = document.getElementById(`${id}`)
        if (typeof value === 'boolean') {
          input!.indeterminate = value
        }
      }
    )
  )
  return (
    <input
      id={id}
      class={`${classList} checkbox  checkbox-primary`}
      type="checkbox"
      checked={checked()}
      onchange={(e) => {
        onchange ? onchange(e) : null
      }}
    />
  )
}
