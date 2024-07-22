import { destructure } from '@solid-primitives/destructure'

import {
  Accessor,
  createContext,
  createEffect,
  createMemo,
  createSignal,
  JSX,
  Show,
  useContext
} from 'solid-js'

import Style from './css/TabMenu.module.scss'
import SvgIcon from '../Common/SvgIcon/SvgIcon'

type target = string | number
type changeInf = (_e: target) => void

interface TabMenuPropsInf {
  children: JSX.Element[] | JSX.Element
  active: Accessor<string | number>
  onChange?: changeInf
}

interface TabMenuContextInf {
  active: Accessor<string | number>
  onChange?: changeInf
}

const TabMenuContext = createContext<TabMenuContextInf>({
  active: createSignal<target>('')[0],
  onChange: (_e: target) => {}
})

export default function TabMenu(props: TabMenuPropsInf) {
  const { onChange, active } = props
  const { children } = destructure(props)
  return (
    <TabMenuContext.Provider
      value={{
        active: active,
        onChange: onChange ?? onChange
      }}
    >
      <div class="text-0 h-full">{children()}</div>
    </TabMenuContext.Provider>
  )
}

interface TabMenuItemInf {
  key: target
  title: string
  isMenu?: boolean
}

export function TabMenuItem(props: TabMenuItemInf) {
  const { key, title, isMenu } = props

  const { active, onChange } = useContext(TabMenuContext)
  const activeClass = createMemo(() => {
    return active && active() === key
      ? `text-cnf1 active font-700 ${Style['active']}`
      : 'text-cnf2 font-400 '
  })

  return (
    <>
      <div
        class="px-6 inline-block h-full relative"
        onclick={() => {
          onChange ? onChange(key) : null
        }}
      >
        <div
          class={` relative h-full cursor-pointer flex flex-row items-center border-white  text-14   ${activeClass()} ${
            Style['tab-menu-item']
          }`}
        >
          {title}

          <Show when={isMenu && active() === key}>
            <SvgIcon name="tabMenu" className="ml-4"></SvgIcon>
          </Show>
          <div class="absolute bottom-0 w-full bg-red h-100">
            <div>fasd</div>
          </div>
        </div>
      </div>
    </>
  )
}
