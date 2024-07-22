import SvgIcon from '@/components/Common/SvgIcon/SvgIcon';
import AvatarImg from '@/assets/img/avatar.png';
import Avatar from '@/components/Common/Avatar/Avatar';
import TabMenu, { TabMenuItem } from '@/components/TabMenu/TabMenu';
import { createSignal } from 'solid-js';
import {
  DragDropProvider,
  DragDropSensors,
  DragEventHandler,
  SortableProvider,
} from '@thisbeyond/solid-dnd';

export default function ChatPanel() {
  const [tab, setTab] = createSignal(1);
  const [tabList, setTabList] = createSignal([
    {
      key: 1,
      title: '聊天',
    },
    {
      key: 2,
      title: '文件',
    },
    {
      key: 3,
      title: 'Tasks Memo',
      isMenu: true,
    },
  ]);

  function onDragEnd(target: any) {
    let { draggable, droppable } = target;
    if (draggable && droppable) {
      const fromIndex = tabList().findIndex((item) => {
        return item.key === target.draggable.id;
      });
      const toIndex = tabList().findIndex((item) => {
        return item.key === target.droppable.id;
      });
      if (fromIndex !== toIndex) {
        const updatedItems = tabList().slice();
        updatedItems.splice(toIndex, 0, ...updatedItems.splice(fromIndex, 1));
        setTabList(updatedItems);
      }
    }
  }
  return (
    <div class="flex flex-col h-full ">
      <div class="h-61 flex items-center px-16 border-b-1 border-cnss">
        <div class="font-700 text-18 flex-1 flex items-center  h-61 ">
          <Avatar src={AvatarImg} className="mr-10"></Avatar>
          郑永楷
          <div class="h-full ml-12">
            <DragDropProvider onDragEnd={onDragEnd}>
              <SortableProvider ids={Object.keys(tabList())}>
                <TabMenu
                  active={tab}
                  onChange={(e) => {
                    console.log(e);
                    setTab(e as number);
                  }}
                >
                  {tabList().map((item) => {
                    return (
                      <TabMenuItem
                        key={item.key}
                        title={item.title}
                        isMenu={item.isMenu}
                      ></TabMenuItem>
                    );
                  })}
                </TabMenu>
              </SortableProvider>

              <DragDropSensors />
            </DragDropProvider>
          </div>
        </div>
        <div>
          <div class="mr-8">
            <SvgIcon name="setting" size={20} />
          </div>
        </div>
      </div>
      <div class="flex-1"></div>
      <div class="w-[90%] mb-14 mx-auto h-43 rounded-4 px-10 py-8  border-1 border-cns2">
        <input
          type="text"
          class="h-full w-full outline-none rounded-4"
          placeholder="请输入内容"
        />
      </div>
    </div>
  );
}
