import { createMemo, Match } from 'solid-js'
import { columnPropsInf } from '../Table'

export default function TableCell(props: columnPropsInf) {
  let { type, column, dataSource } = props

  const components = createMemo(() => {
    if (type === 'th') {
      if (column.type === 'checkbox') {
        return <input type="checkbox" class="flex items-center m-auto" />
      } else if (column.rowRender) {
        return column.rowRender
      }
      return <th>{props.column.title}</th>
    } else {
      let data = dataSource[props.column.name]
      if (column.type === 'checkbox') {
        return <input type="checkbox" class=" flex items-center m-auto" />
      } else if (column.render) {
        return column.render(data)
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
