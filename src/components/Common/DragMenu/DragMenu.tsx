import { destructure } from '@solid-primitives/destructure';
import {
  createSortable,
  DragDropProvider,
  DragDropSensors,
  SortableProvider,
} from '@thisbeyond/solid-dnd';
import {
  Accessor,
  createContext,
  createMemo,
  createSignal,
  Show,
  useContext,
} from 'solid-js';
import SvgIcon from '../SvgIcon/SvgIcon';
import Styles from './css/DragMenu.module.scss';

type target = string | number;
type changeInf = (_e: target) => void;

interface tabListInf {
  key: target;
  title: string;
  isMenu?: boolean;
}

interface DragMenuPropsInf {
  tabList: tabListInf[];
  active: Accessor<string | number>;
  onChange?: changeInf;
  onDrag?: (_tabs: tabListInf[]) => void;
}

interface TabMenuContextInf {
  active: Accessor<string | number>;
  onChange?: changeInf;
}

interface TabMenuItemInf {
  key: target;
  title: string;
  isMenu?: boolean;
}

const TabMenuContext = createContext<TabMenuContextInf>({
  active: createSignal<target>('')[0],
  onChange: (_e: target) => {},
});

/**
 * @description:  可拖拽菜单
 * @param {DragMenuPropsInf} props
 * @return {*}
 */
export default function DragMenu(props: DragMenuPropsInf) {
  const { tabList } = destructure(props);
  const [tabs, setTabList] = createSignal(tabList());
  const { onChange, active, onDrag } = props;

  function onDragEnd(target: any) {
    let { draggable, droppable } = target;
    if (draggable && droppable) {
      const fromIndex = tabs().findIndex((item) => {
        return item.key === target.draggable.id;
      });
      const toIndex = tabs().findIndex((item) => {
        return item.key === target.droppable.id;
      });
      if (fromIndex !== toIndex) {
        const updatedItems = tabs().slice();
        updatedItems.splice(toIndex, 0, ...updatedItems.splice(fromIndex, 1));
        setTabList(updatedItems);
      }
      if (onDrag) {
        onDrag(tabs());
      }
    }
  }

  return (
    <DragDropProvider onDragEnd={onDragEnd}>
      <SortableProvider ids={Object.keys(tabList())}>
        <TabMenuContext.Provider
          value={{
            active: active,
            onChange: onChange ?? onChange,
          }}
        >
          <div class="text-0 h-full">
            {tabs().map((item) => {
              return (
                <TabMenuItem
                  key={item.key}
                  title={item.title}
                  isMenu={item.isMenu}
                ></TabMenuItem>
              );
            })}
          </div>
        </TabMenuContext.Provider>
      </SortableProvider>
      <DragDropSensors />
    </DragDropProvider>
  );
}

export function TabMenuItem(props: TabMenuItemInf) {
  const { key, title, isMenu } = props;
  const sortable = createSortable(props.key);
  const { active, onChange } = useContext(TabMenuContext);
  const activeClass = createMemo(() => {
    return active && active() === key
      ? `text-cnf1 active font-700 ${Styles['active']} `
      : 'text-cnf2 font-400 ';
  });
  return (
    <>
      <div
        class="px-6 inline-block h-full relative"
        use:sortable
        onclick={() => {
          onChange ? onChange(key) : null;
        }}
      >
        <div
          class={` relative h-full cursor-pointer flex flex-row items-center border-white  text-14   ${activeClass()} ${
            Styles['tab-menu-item']
          } `}
        >
          {title}

          <Show when={isMenu && active() === key}>
            <SvgIcon name="tabMenu" className="ml-4"></SvgIcon>
          </Show>
        </div>
      </div>
    </>
  );
}
