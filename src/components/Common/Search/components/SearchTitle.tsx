interface SearchTitlePropsInf {
  title: string;
}

export default function SearchTitle(props: SearchTitlePropsInf) {
  const { title } = props;
  return (
    <>
      <div class="font-400 text-12 text-cnf3 pl-16 pt-12 pb-8 ">{title}</div>
    </>
  );
}
