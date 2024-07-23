import { createMemo } from 'solid-js'

type SvgIconProps = {
  prefix?: string
  name: string
  color?: string
  size?: number | string
  onClick?: (e: MouseEvent) => void
  className?: string
  isButton?: boolean
}

const SvgIcon = (props: SvgIconProps) => {
  const { prefix = 'icon', name, color, size = 16, onClick, className, isButton = false } = props
  const symbolId = createMemo(() => `#${prefix}-${name}`)
  return (
    <svg
      class={className + ` ${isButton ? ' cursor-pointer' : ''}`}
      aria-hidden="true"
      width={size}
      height={size}
      fill={color}
      onClick={(e) => onClick?.(e)}
    >
      <use href={symbolId()} fill={color} />
    </svg>
  )
}
export default SvgIcon
