import { destructure } from '@solid-primitives/destructure'
import { createEffect, on, createSignal, createUniqueId } from 'solid-js'

import Style from './css/Checkbox.module.scss'

interface CheckboxPropsInf {
  checked: boolean
  onchange?: (e: boolean) => void
  indeterminate?: boolean
  disabled?: boolean
  classList?: string
}

export default function Checkbox(props: CheckboxPropsInf) {
  const {
    indeterminate = createSignal(false)[0],
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

  const classList = () => ({
    [Style['checkbox-checked']]: checked(),
    [Style['checkbox-indeterminate']]: indeterminate(),
    [Style['checkbox-disabled']]: props.disabled
  })

  return (
    <div
      class={`cursor-pointer inline-flex items-center text-14 ${props.classList}`}
      onclick={() => {
        if (!disabled()) {
          onchange?.(!checked())
        }
      }}
    >
      <input id={id} disabled={disabled()} class={` hidden`} type="checkbox" checked={checked()} />
      <span class={`${Style['checkbox-outter']} `} classList={classList()}>
        <span class={Style['checkbox-inner']}></span>
      </span>
    </div>
  )
}
