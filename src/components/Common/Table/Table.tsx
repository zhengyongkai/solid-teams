export default function Table() {
  const columns = [
    { name: 'name', title: '名称', width: '150px' },
    { name: 'x', title: 'X', width: '300px' },
    { name: 'y', title: 'Y', width: '1200px' },
    { name: 'date', title: '日期', width: '100px' },
  ];

  const dataList = [
    {
      name: '1',
      x: '郑永楷',
      y: 1,
      date: 1,
    },
    {
      name: '1',
      x: '郑永楷',
      y: 1,
      date: 1,
    },
    {
      name: '1',
      x: '郑永楷',
      y: 1,
      date: 1,
    },
    {
      name: '1',
      x: '郑永楷',
      y: 1,
      date: 1,
    },
  ];
  // const;

  return (
    <div class="overflow-x-auto">
      <table class="table table-fixed w-full">
        <tbody>
          <tr class="text-12 font-400 h-40 text-cttc">
            <th class="w-20 flex items-center h-40">
              <input type="checkbox" />
            </th>
            {columns.map((item) => {
              return (
                <th style={{ width: item.width }} class="h-40">
                  {item.title}
                </th>
              );
            })}
          </tr>
        </tbody>
      </table>
      <table>
        {dataList.map((item) => {
          return (
            <tr>
              <td class="w-20 flex items-center h-40">
                <input type="checkbox" />
              </td>
              {columns.map((key) => {
                return (
                  <td style={{ width: key.width }}>
                    <div class="w-full">{item[key.name]}</div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
