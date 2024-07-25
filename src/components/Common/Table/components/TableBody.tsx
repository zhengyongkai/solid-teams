import { For } from 'solid-js'
import TableCell from './TableCell'
import { flexRender } from '@tanstack/solid-table'

export default function TableBody(props) {
  let { table } = props
  return (
    <>
      <tbody>
        <For each={table.getRowModel().rows}>
          {(row) => {
            return (
              <tr>
                <For each={row.getVisibleCells()}>
                  {(cell) => <td>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>}
                </For>
              </tr>
            )
          }}
        </For>
      </tbody>
    </>
  )
}
