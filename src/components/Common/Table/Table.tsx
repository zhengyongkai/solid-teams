import { createEffect, createMemo, createSignal, createUniqueId, Show } from 'solid-js'

import { createSolidTable, flexRender, getCoreRowModel } from '@tanstack/solid-table'
import Checkbox from '@/components/Form/Checkbox/Checkbox'
import TableHead from './components/TableHead'
import TableBody from './components/TableBody'
import { createStore, produce } from 'solid-js/store'

export interface TablePropsInf {
  columns: Array<any>
  dataSource: Array<any>
}

export default function Table(props: TablePropsInf) {
  const { dataSource, columns, setRowSelection = createSignal([]), rowKey = undefined } = props

  const [checkOptions, setCheckOptions] = createStore({
    checkedAll: false,
    data: dataSource,
    indeterminate: false
  })

  createEffect(() => {
    setCheckOptions('data', initData(dataSource, rowKey))
  })

  const initData = (dataSource, rowKey) => {
    dataSource.map((item) => {
      item['_id'] = rowKey ? item[rowKey] : createUniqueId()
      item['_checked'] = false
    })

    return dataSource
  }

  function onRowCheck(row: any, checked: boolean) {
    setCheckOptions(
      'data',
      (item) => item._id === row._id,
      produce((item: any) => (item._checked = checked))
    )
    let status: boolean | string = false
    let checkedNum = 0
    let total = 0
    const checkedRowKeys: KeyType[] = []
    checkOptions.data.forEach((item: any) => {
      if (!item._disabled) {
        total++
      }
      if (item._checked) {
        checkedRowKeys.push(item.id)
        checkedNum++
      }
    })
    setCheckOptions('indeterminate', checkedNum !== 0)
    if (checkedNum >= total) {
      status = true
      setCheckOptions('indeterminate', false)
    }
    setCheckOptions('checkedAll', status)
  }

  const onHeadChecked = (checked: boolean) => {
    setCheckOptions('checkedAll', checked)
    setCheckOptions(
      'data',
      (item) => (checked ? !item._disabled && !item._checked : !item._disabled && item._checked),
      produce((item: any) => (item._checked = checked))
    )
  }

  const columnsOptions = createMemo(() => {
    let result = [
      {
        id: 'select',
        size: 40,
        header: ({ table }) => (
          <div class="text-center">
            <Checkbox
              checked={checkOptions.checkedAll}
              ineterminate={checkOptions.indeterminate}
              onchange={(e) => onHeadChecked(e.target.checked)}
            />
          </div>
        ),
        cell: ({ row }) => {
          return (
            <div class="text-center">
              <Checkbox
                classList="checkbox"
                checked={row.original._checked}
                onchange={(e) => {
                  row.original._checked = e.target.checked
                  onRowCheck(row, e.target.checked)
                }}
              />
            </div>
          )
        }
      }
    ]
    columns.map((item) => {
      result.push({
        header: item.title,
        accessorKey: item.name,
        size: item.width,
        cell: ({ cell, row }) => {
          return <td>{item.render ? item.render(row) : cell.getValue()}</td>
        }
      })
    })
    return result
  })

  const table = createSolidTable({
    data: dataSource,
    enableRowSelection: true, //enable row selection for all rows
    columns: columnsOptions(),
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <>
      <div class="overflow-y-auto">
        <table class="table-fixed w-full">
          <TableHead table={table}></TableHead>
          <TableBody table={table}></TableBody>
        </table>
      </div>
    </>
  )
}
