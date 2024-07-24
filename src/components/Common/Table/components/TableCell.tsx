import { Match } from 'solid-js'
import { columnPropsInf } from '../Table'

export default function TableCell(props: columnPropsInf) {
  let { type } = props
  return (
    <>
      <Match when={props.type === 'th'}>
        <th></th>
      </Match>
      <Match when={props.type === 'td'}>
        <th></th>
      </Match>
    </>
  )
}
