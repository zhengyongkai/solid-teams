import { createContext, createEffect, createSignal, JSX } from 'solid-js'
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
  render?: (dataSource: any) => JSX.Element
  rowRender?: () => JSX.Element
}

export interface tablePropsInf {
  column: tableColumnsInf[]
  dataSource: any[]
  onRowChecked?: (dataSource: Array<any>) => void
}

export interface tableContextInf {
  columns: Array<tableColumnsInf>
  dataSource: Array<any>
  isCheckedAll: boolean
  indeterminate: boolean
  onRowChecked: (_tableSource: any, _checked: boolean) => void
  onRowCheckedAll: (_checked: boolean) => void
}

export const tableContext = createContext({
  onRowChecked: (_tableSource: any, _checked: boolean) => {},
  onRowCheckedAll: (_checked: boolean) => {}
})

export default function Table(props: tablePropsInf) {
  // const;

  createEffect(() => {})

  const [tableStore, setTableStore] = createStore<tableContextInf>({
    columns: props.column,
    dataSource: props.dataSource,
    isCheckedAll: false,
    indeterminate: false,
    onRowChecked: (_tableSource: any, _checked: boolean) => {},
    onRowCheckedAll: (_checked: boolean) => {}
  })

  const onRowChecked = (tableSource: any, checked: boolean) => {
    setTableStore(
      'dataSource',
      (item) => item.id === tableSource.id,
      produce((item: any) => (item._checked = checked))
    )

    let status: boolean | string = false
    let checkedNum = 0
    let total = 0
    const checkedRowKeys: KeyType[] = []
    tableStore.dataSource.forEach((item: any) => {
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
    props.onRowChecked
      ? props.onRowChecked(tableStore.dataSource.filter((item) => item._checked))
      : null
  }

  const onRowCheckedAll = (checked: boolean) => {
    setTableStore('isCheckedAll', checked)
    setTableStore(
      'dataSource',
      (item) => (checked ? !item._disabled && !item._checked : !item._disabled && item._checked),
      produce((item: any) => (item._checked = checked))
    )
    props.onRowChecked
      ? props.onRowChecked(tableStore.dataSource.filter((item) => item._checked))
      : null
  }
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
