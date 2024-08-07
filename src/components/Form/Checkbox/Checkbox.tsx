import { destructure } from '@solid-primitives/destructure'
import { createEffect, on, createSignal, createUniqueId } from 'solid-js'

type changeEvent = Event & { currentTarget: HTMLInputElement; target: HTMLInputElement }

interface CheckboxPropsInf {
  checked: boolean
  onchange?: (e: changeEvent) => void
  indeterminate?: boolean
  classList?: string
  disabled?: boolean
}

export default function Checkbox(props: CheckboxPropsInf) {
  const {
    indeterminate = createSignal(false)[0],
    classList = createSignal('')[0],
    checked,
    disabled = createSignal(false)[0]
  } = destructure(props)
  const { onchange } = props
  const id = createUniqueId()
  createEffect(
    on(
      () => indeterminate(),
      (value) => {
        const input: any = document.getElementById(`${id}`)
        if (typeof value === 'boolean') {
          input!.indeterminate = value
        }
      }
    )
  )

  return (
    <div>
      <input
        id={id}
        disabled={disabled()}
        class={`${classList()}`}
        type="checkbox"
        checked={checked()}
        onchange={(e) => {
          onchange ? onchange(e) : null
        }}
      />
      <div></div>
    </div>
  )
}
