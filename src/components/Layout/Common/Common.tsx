import LeftBar from '../LeftBar/LeftBar'
import Navbar from '../Navbar/Navbar'

interface CommonProps {
  children: Element
}

export default function Common(props: CommonProps) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div class="flex">
        <div>
          <LeftBar></LeftBar>
        </div>
        <div>{props.children}</div>
      </div>
    </>
  )
}
