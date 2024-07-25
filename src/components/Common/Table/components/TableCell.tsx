import { createMemo, Match, useContext } from 'solid-js'
import { columnPropsInf, tableContext } from '../Table'

export default function TableCell(props: columnPropsInf) {
  let { type, column, dataSource } = props

  const components = createMemo(() => {
    const { onRowChecked } = useContext(tableContext)

    if (type === 'th') {
      if (column.type === 'checkbox') {
        return <input type="checkbox" class="flex items-center m-auto" />
      } else if (column.rowRender) {
        return column.rowRender
      }
      return <th>{props.column.title}</th>
    } else {
      let data = dataSource[props.column.name]

      console.log(dataSource['_checked'])

      if (column.type === 'checkbox') {
        return (
          <input
            type="checkbox"
            class=" flex items-center m-auto"
            checked={dataSource['_checked']}
            onChange={(e) => onRowChecked(dataSource, e.target.checked)}
          />
        )
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
