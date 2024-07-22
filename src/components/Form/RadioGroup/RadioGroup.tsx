import { destructure } from '@solid-primitives/destructure'
import { createContext, JSX, useContext } from 'solid-js'

type size = 'large' | 'small' | 'middle'

interface RadioGroupPropsInf {
  defaultValue?: number | string
  className?: string
  children: JSX.Element[]
  name: string
  onChange?: (_e: number | string) => void
  inline?: boolean
  size: size
}

const radioContext = createContext<{
  defaultValue?: number | string
  className?: string
  name: string
  onChange?: (_e: number | string) => void
  inline?: boolean
  size: size
}>({
  defaultValue: undefined,
  className: '',
  name: '',
  inline: true,
  size: 'middle'
})

export default function RadioGroup(props: RadioGroupPropsInf) {
  const { defaultValue, className, name, children } = destructure(props)
  const { onChange, inline = true, size = 'middle' } = props

  return (
    <radioContext.Provider
      value={{
        defaultValue: defaultValue ? defaultValue() : undefined,
        className: className ? className() : undefined,
        name: name(),
        onChange,
        inline,
        size
      }}
    >
      <div style={`display:${inline ? 'flex' : 'block'}`}>{[...children()]}</div>
    </radioContext.Provider>
  )
}

interface RadioPropsInf {
  value: string
  label: string
}

export function Radio(props: RadioPropsInf) {
  const { name, defaultValue, className, onChange, inline } = useContext(radioContext)
  const { value, label } = destructure(props)

  return (
    <div class={`flex ${inline ? 'mr-18' : ''}`}>
      <input
        type="radio"
        name={name}
        class={`${className}  radio mr-6  `}
        checked={defaultValue === value() ? true : false}
        onClick={() => {
          onChange && onChange(value())
        }}
      />
      <label>{label()}</label>
    </div>
  )
}
