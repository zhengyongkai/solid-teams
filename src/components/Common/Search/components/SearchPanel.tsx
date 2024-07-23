import Tag from '../../Tag/Tag'
import SearchItem from './SearchItem'
import SearchTitle from './SearchTitle'

export default function SearchPanel() {
  return (
    <div class="absolute top-34 w-468 bg-white rounded-4 shadow-16xl  py-5 z-2 ">
      <div class="px-16 pt-8 pb-12 flex gap-x-8 border-b-1 border-cns3">
        <Tag active={true}>文件</Tag>
        <Tag active={true}>群组聊天</Tag>
        <Tag active={true}>团队和频道</Tag>
      </div>
      <div class="max-h-60rem overflow-y-auto">
        <SearchTitle title="热门点击"></SearchTitle>
        <div>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
        </div>
        <SearchTitle title="群组"></SearchTitle>
        <div>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
        </div>
      </div>
    </div>
  )
}
