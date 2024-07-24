import { createContext, createSignal, JSX } from 'solid-js'
import TableBody from './components/TableBody'
import TableHead from './components/TableHead'

export interface TableHeadPropsInf {}

export interface columnPropsInf {
  type: string
  column: tableType
}

// export interface tableType {
//   type?: string
//   name: string
//   width?: string
//   render?: () => JSX.Element
//   title: string
// }

export interface tableColumnsInf {
  type?: string
  title: string
  name: string
  width?: string
  render?: () => JSX.Element
}

export interface tablePropsInf {
  column: tableColumnsInf[]
  dataSource: any[]
}

export const tableContext = createContext<{
  onRowChecked: Function
}>({
  onRowChecked: (e) => {}
})

export default function Table(props: tablePropsInf) {
  // const;

  const [tableStore, setTableStore] = createSignal({
    columns: props.column,
    dataSource: props.dataSource
  })

  function onRowChecked(row, check) {}

  return (
    <>
      <tableContext.Provider
        value={{
          onRowChecked
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
