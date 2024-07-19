import { createSignal, Show } from 'solid-js'
import SvgIcon from '../SvgIcon/SvgIcon'
import Tag from '../Tag/Tag'

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
          <div class="absolute top-34 w-468 bg-white rounded-4 shadow-16xl h-200 py-5">
            <div class="px-16 pt-8 pb-12 flex gap-x-8">
              <Tag active={true}>文件</Tag>
              <Tag active={true}>群组聊天</Tag>
              <Tag active={true}>团队和频道</Tag>
            </div>
            <div></div>
          </div>
        </Show>
      </div>
    </>
  )
}
