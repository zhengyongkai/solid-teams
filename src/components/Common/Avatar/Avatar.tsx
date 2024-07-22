import { createMemo } from 'solid-js'

interface AvatarPropsInf {
  size?: string
  online?: boolean
  className?: string
  src: string | undefined
}

export default function Avatar(props: AvatarPropsInf) {
  const { size = '32', online = false, className, src } = props

  const widHei = createMemo(() => {
    return `w-${size} h-${size}`
  })

  const onlineClass = createMemo(() => {
    return online ? 'online' : 'offline'
  })

  return (
    <>
      <div class={`avatar ${widHei()}  ${onlineClass()} ${className}`}>
        <img class={`  rounded-full ${widHei()} ${className}`} src={src} alt="" />
      </div>
    </>
  )
}
