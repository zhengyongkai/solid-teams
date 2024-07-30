import { createSignal, onMount, Show, onCleanup, createEffect, on } from 'solid-js'
import SvgIcon from '../SvgIcon/SvgIcon'
import Tag from '../Tag/Tag'
import SearchTitle from './components/SearchTitle'
import SearchPanel from './components/SearchPanel'

interface SearchBarPropsInf {
  className: string
}

export default function SearchBar(props: SearchBarPropsInf) {
  const { className = '' } = props
  const [search, setSearch] = createSignal('')
  const [showResult, setShowResult] = createSignal(false)
  const [placeholder, setPlaceHolder] = createSignal('搜索(Ctrl+Alt+E)')

  let inputRef: HTMLInputElement

  function searchFn(e: KeyboardEvent) {
    console.log(e.code)
    if (e.altKey && e.code === 'KeyE' && e.ctrlKey) {
      // console.log('Ctrl+c')
      inputRef.focus()
    }
  }

  createEffect(
    on(showResult, (val) => {
      if (val) {
        setPlaceHolder('查找人员、信息、文件等')
      } else {
        setPlaceHolder('搜索(Ctrl+Alt+E)')
      }
    })
  )

  onMount(() => {
    document.addEventListener('keydown', searchFn)
  })

  onCleanup(() => {
    document.removeEventListener('keydown', searchFn)
  })

  return (
    <>
      <div
        class={`w-120px flex items-center w-468 h-32 bg-white rounded-4 relative ${className}`}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div class="pl-16  pr-8">
          <SvgIcon name="search" size={20}></SvgIcon>
        </div>
        <input
          value={search()}
          ref={inputRef!}
          onMouseDown={(e) => e.stopPropagation()}
          onFocus={() => {
            setShowResult(true)
          }}
          onBlur={() => {
            setShowResult(false)
          }}
          type="text"
          class="text-14 flex-1 outline-none"
          placeholder={placeholder()}
          oninput={(e) => {
            setSearch(e.target.value)
          }}
        />
        <Show when={search()}>
          <div class="pl-16 fill-red pr-8">
            <SvgIcon name="searchClose" size={20} onClick={() => setSearch('')}></SvgIcon>
          </div>
        </Show>

        <Show when={showResult()}>
          <SearchPanel></SearchPanel>
        </Show>
      </div>
    </>
  )
}
