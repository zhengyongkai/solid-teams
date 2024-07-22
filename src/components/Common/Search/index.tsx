import { createSignal, Show } from 'solid-js'
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

  return (
    <>
      <div
        class={`w-120px flex items-center w-468 h-32 bg-white rounded-4 relative ${className}`}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div class="pl-16 fill-red pr-8">
          <SvgIcon name="search" size={20}></SvgIcon>
        </div>
        <input
          value={search()}
          onMouseDown={(e) => e.stopPropagation()}
          onFocus={() => {
            setShowResult(true)
          }}
          onBlur={() => {
            setShowResult(false)
          }}
          type="text"
          class="text-14 flex-1 outline-none"
          placeholder="查找人员、消息、文件等"
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
