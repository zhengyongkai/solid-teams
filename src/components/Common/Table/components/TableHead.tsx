import { For, Show } from 'solid-js'
import TableCell from './TableCell'
import { flexRender } from '@tanstack/solid-table'

interface TableHeadPropsInf {
  table: any
}

export default function TableHead(props: TableHeadPropsInf) {
  let { table } = props
  return (
    <>
      <thead>
        <For each={table.getHeaderGroups()}>
          {(headerGroup) => (
            <tr>
              <For each={headerGroup.headers}>
                {(header) => {
                  return (
                    <th
                      colSpan={header.colSpan}
                      class="text-left text-12 font-400 h-40 text-cttc"
                      style={{ width: header.column.columnDef.size + 'px' }}
                    >
                      <Show when={!header.isPlaceholder}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </Show>
                    </th>
                  )
                }}
              </For>
            </tr>
          )}
        </For>
      </thead>
    </>
  )
}
