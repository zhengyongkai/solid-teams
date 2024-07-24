import { createContext, JSX } from 'solid-js'
import TableBody from './components/TableBody'
import TableHead from './components/TableHead'

export interface TableHeadPropsInf {}

export interface columnPropsInf {
  type: string
  column: tableType
}

export interface tableType {
  type: string
  name: string
  width: string
  render?: () => JSX.Element
}

export interface tableColumnsInf {
  type: string
  title: string
  width: string
}

export interface tablePropsInf {
  column: tableColumnsInf[]
  dataSource: tableType[]
}

export const tableContext = createContext()

export default function Table(props: tablePropsInf) {
  // const;

  return (
    <>
      <tableContext.Provider
        value={{
          ...props
        }}
      >
        <TableHead></TableHead>
        <TableBody></TableBody>
      </tableContext.Provider>
    </>
  )
}
