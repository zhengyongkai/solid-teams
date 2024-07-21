import Avatar from '@/assets/img/avatar.png';

export default function SearchItem() {
  return (
    <>
      <div role="option" class="px-16 pt-7 pb-5 hover:bg-cnb1">
        <div class="flex items-center ">
          <div>
            <img src={Avatar} alt="" class="w-32 h-32 rounded-full" />
          </div>
          <div class="ml-10 text-cnf2h">
            <div class="text-14 ">Kevin</div>
            <div class="text-12">Kevin.foxconn.com</div>
          </div>
        </div>
      </div>
    </>
  );
}
