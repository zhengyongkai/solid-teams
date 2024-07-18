import { createSignal, Show } from 'solid-js'
import SvgIcon from '../SvgIcon/SvgIcon'

export default function SearchBar() {
  const [search, setSearch] = createSignal('')
  const [showResult, setShowResult] = createSignal(false)

  return (
    <>
      <div
        class="w-120px flex items-center w-468 h-32 bg-white rounded-4 relative"
        onMouseDown={(e) => e.preventDefault()}
      >
        <div class="pl-16 fill-red pr-8">
          <SvgIcon name="search" size={20}></SvgIcon>
        </div>
        <input
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
            <SvgIcon name="searchClose" size={20}></SvgIcon>
          </div>
        </Show>

        <Show when={showResult()}>
          <div
            class="absolute top-34 w-468 bg-white rounded-4"
            style={showResult() ? { height: '200px' } : { height: '0' }}
          >
            dasdasd
          </div>
        </Show>
      </div>
    </>
  )
}
