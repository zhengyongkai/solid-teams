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
      <div>{props.children}</div>
    </>
  )
}
