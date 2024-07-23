import SvgIcon from '@/components/Common/SvgIcon/SvgIcon';
import AvatarImg from '@/assets/img/avatar.png';
import Avatar from '@/components/Common/Avatar/Avatar';
import { createSignal, JSX } from 'solid-js';
import DragMenu from '@/components/Common/DragMenu/DragMenu';
import ChatBody from './ChatBody';
import ChatFile from './ChatFile';

export default function ChatPanel() {
  const [tab, setTab] = createSignal<string | number>(2);
  const [componentsKey, setComponentsKey] = createSignal(2);
  const componentsMap: { [key in number]: JSX.Element } = {
    1: <ChatBody />,
    2: <ChatFile />,
  };
  const [tabList] = createSignal([
    {
      key: 1,
      title: '聊天',
      isDrag: false,
    },
    {
      key: 2,
      title: '文件',
    },
    {
      key: 3,
      title: 'Tasks Memo',
      subMenu: [
        {
          key: 123,
          title: '展开选项卡',
          icon: 'launch',
        },
        {
          key: 312331,
          title: '展开选项卡',
          icon: 'launch',
        },
      ],
    },
  ]);

  return (
    <div class="flex flex-col h-full ">
      <div class="h-61 flex items-center px-16 border-b-1 border-cnss">
        <div class="font-700 text-18 flex-1 flex items-center  h-61 ">
          <Avatar src={AvatarImg} className="mr-10"></Avatar>
          郑永楷
          <div class="h-full ml-12">
            <DragMenu
              tabList={tabList()}
              active={tab}
              onChange={(e) => {
                setTab(e);
                setComponentsKey(e as number);
              }}
              onSubChange={(e) => {
                // alert(e)
              }}
              onDrag={(e) => {
                // console.log(e)
              }}
            ></DragMenu>
          </div>
        </div>
        <div>
          <div class="mr-8">
            <SvgIcon name="setting" size={20} />
          </div>
        </div>
      </div>
      <div class="flex-1 overflow-hidden">{componentsMap[componentsKey()]}</div>
    </div>
  );
}
