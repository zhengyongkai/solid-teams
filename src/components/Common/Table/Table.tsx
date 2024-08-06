import {
  Accessor,
  createContext,
  createEffect,
  createSignal,
  JSX,
  on,
  Setter,
  Signal
} from 'solid-js'
import TableBody from './components/TableBody'
import TableHead from './components/TableHead'
import { createStore, produce } from 'solid-js/store'

export interface TableHeadPropsInf {}

export interface columnPropsInf {
  type: string
  column: tableType
}

export interface tableType {
  type?: string
  name: string
  width?: string
  render?: () => JSX.Element
  title: string
}

export interface tableColumnsInf {
  type?: string
  title?: string
  name: string
  width?: string
  render?: (_text: string, dataSource: any) => JSX.Element
  rowRender?: () => JSX.Element
  sorter?: (_a: any, b: any) => void
  _sorter?: string
}

export interface tablePropsInf<T> {
  column: tableColumnsInf[]
  dataSource: any[]
  onRowChecked?: (dataSource: Array<T>) => void
  selectedRowKeys?: Array<number | string>
  rowKey?: string
  rowSelectKey?: [Accessor<any[]>, Setter<any[]>]
}

export interface tableContextInf {
  columns: Array<tableColumnsInf>
  dataSource: Array<any>
  isCheckedAll: boolean
  indeterminate: boolean
  onRowChecked: (_tableSource: any, _checked: boolean) => void
  onRowCheckedAll: (_checked: boolean) => void
  isCheckTable: undefined | any
  rowKey: string
}

interface extendInf {
  id: string | number
  _checked?: boolean
  _disabled?: boolean
}

export const tableContext = createContext({
  onRowChecked: (_tableSource: any, _checked: boolean) => {},
  onRowCheckedAll: (_checked: boolean) => {}
})

export default function Table<T extends extendInf>(props: tablePropsInf<T>) {
  // const;

  let { rowKey = 'id', rowSelectKey: [_rows, setRows] = createSignal<any[]>([]) } = props

  const [tableStore, setTableStore] = createStore<tableContextInf>({
    columns: props.column,
    dataSource: props.dataSource,
    isCheckedAll: false,
    indeterminate: false,
    onRowChecked: (_tableSource: T, _checked: boolean) => {},
    onRowCheckedAll: (_checked: boolean) => {},
    isCheckTable: props.column.filter((item) => item.type === 'checkbox')[0],
    rowKey: rowKey ? rowKey : 'id'
  })

  const onRowChecked = (tableSource: T, checked: boolean) => {
    if (!tableStore.isCheckTable) {
      return
    }
    setTableStore(
      'dataSource',
      (item) => item[rowKey] === tableSource[rowKey] && !item._disabled,
      produce((item: any) => (item._checked = checked))
    )

    checkHead()
    triggerCheck()
  }

  const onRowCheckedAll = (checked: boolean) => {
    setTableStore('isCheckedAll', checked)
    setTableStore(
      'dataSource',
      (item) => (checked ? !item._disabled && !item._checked : !item._disabled && item._checked),
      produce((item: T) => (item._checked = checked))
    )
    triggerCheck()
  }

  const triggerCheck = () => {
    props.onRowChecked
      ? props.onRowChecked(tableStore.dataSource.filter((item) => item._checked))
      : null

    // 设置值
    setRows(tableStore.dataSource.filter((item) => item._checked).map((item) => item[rowKey]))
  }

  const checkHead = () => {
    let status: boolean | string = false
    let checkedNum = 0
    let total = 0
    const checkedRowKeys = []
    tableStore.dataSource.forEach((item: T) => {
      if (!item._disabled) {
        total++
      }
      if (item._checked) {
        checkedRowKeys.push(item.id)
        checkedNum++
        status = false
        setTableStore('indeterminate', true)
      }
    })
    if (checkedNum >= total) {
      status = true
      setTableStore('indeterminate', false)
    }

    if (checkedNum === 0) {
      setTableStore('indeterminate', false)
    }

    setTableStore('isCheckedAll', status)
  }

  const resetTable = () => {
    setTableStore(
      'dataSource',
      (item) => item,
      produce((item: any) => (item._checked = false))
    )
  }

  createEffect(
    on(_rows, function (val) {
      resetTable()
      setTableStore(
        'dataSource',
        (item) => val.includes(item[rowKey]) && !item._disabled,
        produce((item: any) => (item._checked = true))
      )
      checkHead()
    })
  )

  return (
    <>
      <tableContext.Provider
        value={{
          ...tableStore,
          onRowChecked,
          onRowCheckedAll
        }}
      >
        <div class="w-full overflow-auto">
          <TableHead data={tableStore}></TableHead>
          <TableBody data={tableStore}></TableBody>
        </div>
      </tableContext.Provider>
    </>
  )
}
