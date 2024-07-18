import Navbar from '../Navbar/Navbar'
import { JSX } from 'solid-js'
// import { KeepAlive } from 'solid-keep-alive'
// import userStore from '@/store/modules/user'

// type ComponentMapInf = { [key: string]: JSX.Element }

interface CommonLayoutInf {
  children: JSX.Element
}

export default function Common(props: CommonLayoutInf) {
  return (
    <div class="h-screen">
      <div>
        <Navbar />
      </div>
      <div class="flex">{props.children}</div>
    </div>
  )
}
