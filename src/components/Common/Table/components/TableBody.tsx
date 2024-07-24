import { For } from 'solid-js'
import TableCell from './TableCell'

function TableRow(props) {
  return (
    <>
      <tr class="text-12 font-400 h-42 text-cttc  border-b-1 border-ctbbc hover:bg-ctbh cursor-pointer">
        <For each={props.columns}>
          {(data) => {
            return <TableCell type="td" column={data} dataSource={props.dataSource}></TableCell>
          }}
        </For>
      </tr>
    </>
  )
}

export default function TableBody(props) {
  return (
    <>
      <table class="table-fixed border-collapse w-full">
        <thead>
          <For each={props.data().dataSource}>
            {(col) => {
              return <TableRow columns={props.data().columns} dataSource={col}></TableRow>
            }}
          </For>
        </thead>
      </table>
    </>
  )
}
