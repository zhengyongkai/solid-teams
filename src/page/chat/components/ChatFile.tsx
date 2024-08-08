import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import Table from '@/components/Common/Table/Table'
import { createSignal, Show } from 'solid-js'

interface FileTableInf {
  icon: string
  id: number
  name: string
  date: string
  person: string
}

export default function ChatFile() {
  const [getS, setS] = createSignal<number[]>([1])

  const columns = [
    { type: 'checkbox', width: '40px', name: 'checkbox' },
    {
      name: 'icon',
      title: '图标',
      render: (_text: string, _dataSource: any) => {
        return (
          <SvgIcon
            name={_text === 'excel' ? 'excel' : 'folder'}
            onClick={() => {
              console.log(_text, _dataSource)
            }}
          ></SvgIcon>
        )
      },
      rowRender: () => {
        return <SvgIcon name="file"></SvgIcon>
      },
      width: '40px'
    },
    { name: 'name', title: '名称', sorter: () => {} },
    { name: 'date', title: '共享日期' },
    { name: 'person', title: '发件人' }
  ]

  const dataList = [
    {
      icon: 'excel',
      id: 1,
      name: 'Excel第一个',
      date: '13:50',
      person: '郑永楷'
    },
    {
      icon: 'excel',
      id: 2,
      name: 'Excel第一个',
      date: '13:50',
      person: '郑永楷'
    },
    {
      icon: 'folder',
      id: 3,
      name: 'Excel第一个',
      date: '13:50',
      person: '郑永楷',
      _disabled: true
    }
  ]
  return (
    <div class="overflow-hidden h-full">
      <div class="pl-40 pr-10 h-46 font-700 text-14 flex items-center text-cnf3 cursor-pointer top-0">
        <div class="flex items-center mr-32">
          <SvgIcon name="upload" className="mr-6"></SvgIcon>
          <span>上传</span>
        </div>
        <Show when={getS().length === 1}>
          <div class="flex items-center">
            <SvgIcon name="copylink" className="mr-12"></SvgIcon>
            <span>复制链接</span>
          </div>
        </Show>
        <Show when={getS().length}>
          <div class="ml-auto flex items-center" onClick={() => setS([])}>
            <SvgIcon name="delChoose" className="mr-6"></SvgIcon>
            <span>已选择 {getS().length}</span>
          </div>
        </Show>
      </div>
      <div class="overflow-y-auto h-full ">
        <Table<FileTableInf>
          dataSource={dataList}
          column={columns}
          rowKey={'id'}
          rowSelectKey={[getS, setS]}
          onRowChecked={(_data) => {
            // console.log(data.filter(item))
          }}
        ></Table>
      </div>
    </div>
  )
}
