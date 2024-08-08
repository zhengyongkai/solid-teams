import { createMemo, JSX, Match, useContext } from 'solid-js'
import { columnPropsInf, tableColumnsInf, tableContext } from '../Table'
import { destructure } from '@solid-primitives/destructure'
import Checkbox from '@/components/Form/Checkbox/Checkbox'

export default function TableCell(props: {
  type: string
  column: tableColumnsInf
  dataSource?: any
  checked: boolean
  indeterminate: boolean
}) {
  let { type, column, dataSource } = props
  let { checked, indeterminate } = destructure(props)

  const components = createMemo<any>(() => {
    const { onRowChecked, onRowCheckedAll } = useContext(tableContext)

    if (type === 'th') {
      if (column.type === 'checkbox') {
        return (
          <div class={`items-center m-auto flex justify-center`}>
            <Checkbox
              checked={checked()}
              indeterminate={indeterminate()}
              onchange={(e) => {
                onRowCheckedAll(e)
              }}
            ></Checkbox>
          </div>
        )
      } else if (column.rowRender) {
        return column.rowRender
      }
      return <th>{props.column.title}</th>
    } else {
      let data = dataSource[props.column.name]

      if (column.type === 'checkbox') {
        return (
          <div
            class={`items-center m-auto flex justify-center`}
            onclick={(e) => {
              e.stopPropagation()
            }}
          >
            <Checkbox
              classList={`items-center m-auto hidden `}
              checked={dataSource['_checked']}
              disabled={dataSource['_disabled']}
              onchange={(e) => {
                onRowChecked(dataSource, e)
              }}
            ></Checkbox>
          </div>
        )
      } else if (column.render) {
        return column.render(data, dataSource)
      }
      return <td>{dataSource[props.column.name]}</td>
    }
  })

  return (
    <>
      <td style={{ width: props.column.width }}>{components()}</td>
    </>
  )
}
