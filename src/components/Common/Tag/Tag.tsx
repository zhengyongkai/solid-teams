import { JSX } from 'solid-js';

interface TagPropsInf {
  active: boolean;
  children: JSX.Element;
}

export default function Tag(props: TagPropsInf) {
  return (
    <>
      <span class="py-4 px-12 rounded-32 bg-cbb2 text-12 cursor-pointer">
        {props.children}
      </span>
    </>
  );
}
