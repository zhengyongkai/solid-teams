import { For } from 'solid-js'
import TableCell from './TableCell'

interface TableHeadPropsInf {
  data: any
}

export default function TableHead(props: TableHeadPropsInf) {
  return (
    <>
      <table class="table-fixed border-collapse w-full">
        <thead>
          <tr class="text-12 font-400 h-40 text-cttc border-b-1 border-ctbbc">
            <For each={props.data().columns}>
              {(col) => {
                return <TableCell type="th" column={col}></TableCell>
              }}
            </For>
          </tr>
        </thead>
      </table>
    </>
  )
}
