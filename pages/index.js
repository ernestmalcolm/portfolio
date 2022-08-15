import Image from "next/image"
import construction from "../public/img/under-construction.png"

function Home() {
  return (
    <>
      <div>
        <h2>Portfolio Website under construction</h2>
        <Image src={construction} width={300} height={300} />
      </div>
      <div>
        
      </div>
    </>
  )
}

export default Home
