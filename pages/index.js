import Image from "next/image"
import construction from "../public/img/under-construction.png"
import { FaGithub, FaInstagram, FaMailchimp, FaTwitter } from "react-icons/fa"
import Link from "next/link"
import styles from "../styles/Home.module.css"

function Home() {
  return (
    <>
      <div>
        <h1>Portfolio Website under construction</h1>
        <Image src={construction} width={300} height={300} />
      </div>
      <div>
        <div>Reach me via</div>
        <div className={styles.links}>
          <Link
            href="https://github.com/ernestmalcolm"
            className={styles.icons}
          >
            <FaGithub size={50} />
          </Link>
          <Link
            href="https://github.com/ernestmalcolm"
            className={styles.icons}
          >
            <FaTwitter size={50} />
          </Link>
          <Link
            href="https://www.instagram.com/bolingoliii/"
            className={styles.icons}
          >
            <FaInstagram size={50} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
