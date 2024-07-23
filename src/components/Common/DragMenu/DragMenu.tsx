import { destructure } from '@solid-primitives/destructure'
import {
  createSortable,
  DragDropProvider,
  DragDropSensors,
  DragOverlay,
  SortableProvider
} from '@thisbeyond/solid-dnd'
import {
  Accessor,
  createContext,
  createEffect,
  createMemo,
  onCleanup,
  createSignal,
  onMount,
  Show,
  useContext
} from 'solid-js'
import SvgIcon from '../SvgIcon/SvgIcon'
import Styles from './css/DragMenu.module.scss'
import { Portal } from 'solid-js/web'

type target = string | number
type changeInf = (_e: target) => void

interface tabListInf {
  key: target
  title: string
  isMenu?: boolean
  icon?: string
  isDrag?: boolean
  subMenu?: tabListInf[]
}

interface DragMenuPropsInf {
  tabList: tabListInf[]
  active: Accessor<string | number>
  onChange?: changeInf
  onSubChange?: changeInf
  onDrag?: (_tabs: tabListInf[]) => void
}

interface TabMenuContextInf {
  active: Accessor<string | number>
  onChange?: changeInf
  onSubChange?: changeInf
}

interface TabMenuItemInf {
  key: target
  title: string
  subMenu?: tabListInf[]
  isDrag?: boolean
}

const TabMenuContext = createContext<TabMenuContextInf>({
  active: createSignal<target>('')[0],
  onChange: (_e: target) => {},
  onSubChange: (_e: target) => {}
})

/**
 * @description:  可拖拽菜单
 * @param {DragMenuPropsInf} props
 * @return {*}
 */
export default function DragMenu(props: DragMenuPropsInf) {
  const { tabList } = destructure(props)
  const [tabs, setTabList] = createSignal(tabList())
  const { onChange, active, onDrag, onSubChange } = props

  const dragKeys = tabList().map((item) => {
    return item.key
  })

  function onDragEnd(target: any) {
    let { draggable, droppable } = target
    if (draggable && droppable) {
      const fromIndex = tabs().findIndex((item) => {
        return item.key === target.draggable.id
      })
      const toIndex = tabs().findIndex((item) => {
        return item.key === target.droppable.id
      })
      if (fromIndex !== toIndex) {
        const updatedItems = tabs().slice()
        updatedItems.splice(toIndex, 0, ...updatedItems.splice(fromIndex, 1))
        setTabList(updatedItems)
      }
      if (onDrag) {
        onDrag(tabs())
      }
    }
  }

  return (
    <DragDropProvider onDragEnd={onDragEnd}>
      <SortableProvider ids={dragKeys}>
        <TabMenuContext.Provider
          value={{
            active: active,
            onChange: onChange ?? onChange,
            onSubChange: onSubChange ?? onSubChange
          }}
        >
          <div class="text-0 h-full">
            {tabs().map((item) => {
              return (
                <TabMenuItem
                  key={item.key}
                  title={item.title}
                  subMenu={item.subMenu}
                  isDrag={item.isDrag}
                ></TabMenuItem>
              )
            })}
          </div>
        </TabMenuContext.Provider>
      </SortableProvider>

      <DragDropSensors />
    </DragDropProvider>
  )
}

export function TabMenuItem(props: TabMenuItemInf) {
  const { key, title, subMenu, isDrag = true } = props
  const sortable = createSortable(isDrag ? props.key : '')
  const { active, onChange, onSubChange } = useContext(TabMenuContext)
  const [open, setOpenMenu] = createSignal(false)

  let myElement: HTMLElement

  const activeClass = createMemo(() => {
    return active && active() === key
      ? `text-cnf1 active font-700 ${Styles['active']} `
      : 'text-cnf2 font-400 '
  })

  const [postition, setPosition] = createSignal({
    top: 0,
    left: 0
  })

  onMount(() => {
    caculatePosition()
    window.addEventListener('resize', caculatePosition)
  })
  onCleanup(() => {
    window.removeEventListener('resize', caculatePosition)
  })

  function caculatePosition() {
    setPosition({
      top: myElement.offsetTop,
      left: myElement.offsetLeft
    })
  }

  return (
    <>
      <div
        class="px-6 inline-block h-full relative"
        classList={{ 'opacity-50': sortable.isActiveDraggable }}
        ref={(el) => {
          myElement = el // el is created but not yet added to the DOM
        }}
        use:sortable
        onclick={() => {
          if (active() === key) {
            setOpenMenu(!open())
          } else {
            onChange ? onChange(key) : null
          }
        }}
      >
        <div
          class={` relative h-full cursor-pointer flex flex-row items-center border-white  text-14   ${activeClass()} ${
            Styles['tab-menu-item']
          } `}
        >
          {title}
          <Show when={subMenu && active() === key}>
            <SvgIcon name="tabMenu" className="ml-4"></SvgIcon>
          </Show>
        </div>
        <Show when={subMenu && active() === key && open()}>
          <Portal>
            <div
              class="absolute  left-0 rounded-4  shadow-16xl p-4  max-h-200  scrollBar z-2"
              style={{
                left: postition().left + 'px',
                top: postition().top + 60 + 'px'
              }}
            >
              {subMenu &&
                subMenu.map((item) => {
                  return (
                    <DragMenuItem key={item.key} title={item.title} icon={item.icon}></DragMenuItem>
                  )
                })}
            </div>
          </Portal>
        </Show>
      </div>
    </>
  )
}

interface DragMenuItemPropsInf {
  key: target
  title: string
  icon?: string
}

export function DragMenuItem(props: DragMenuItemPropsInf) {
  const { onSubChange } = useContext(TabMenuContext)

  let { key, title, icon } = props
  return (
    <div
      class="flex items-center text-14 p-6 cursor-pointer hover:bg-cnb1p hover:text-cnf2bs pr-16"
      onclick={() => {
        onSubChange ? onSubChange(key) : undefined
      }}
    >
      <div class="mr-8">{icon && <SvgIcon name={icon} size={16}></SvgIcon>}</div>
      <div class="px-2">{title}</div>
    </div>
  )
}
