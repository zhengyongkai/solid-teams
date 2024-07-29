import { For, useContext } from 'solid-js'
import TableCell from './TableCell'

import Styles from './css/TableCell.module.scss'
import { tableColumnsInf, tableContext, tableContextInf } from '../Table'

function TableRow(props: { columns: tableColumnsInf[]; dataSource: any }) {
  const { onRowChecked } = useContext(tableContext)

  return (
    <>
      <tr
        onClick={() => onRowChecked(props.dataSource, !props.dataSource._checked)}
        class={`text-12 font-400 h-42 text-cttc  border-b-1 border-ctbbc hover:bg-ctbh cursor-pointer ${
          Styles['table-body-columns']
        } ${props.dataSource._checked ? Styles['table-body-columns-checked'] : ''} }`}
      >
        <For each={props.columns}>
          {(data) => {
            return (
              <TableCell
                type="td"
                column={data}
                dataSource={props.dataSource}
                checked={false}
                indeterminate={false}
              ></TableCell>
            )
          }}
        </For>
      </tr>
    </>
  )
}

export default function TableBody(props: { data: tableContextInf }) {
  return (
    <>
      <table class="table-fixed border-collapse w-full">
        <thead>
          <For each={props.data.dataSource}>
            {(col) => {
              return <TableRow columns={props.data.columns} dataSource={col}></TableRow>
            }}
          </For>
        </thead>
      </table>
    </>
  )
}
