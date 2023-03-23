import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/EM_.png"

export default function NavBar() {
    return(
        <nav className="w-full flex flex-row justify-between px-20 py-2 bg-lgray">
            <div>
                <Image src={Logo} height={100} width={100} className="" />
            </div>
            <div>
                <ul className="no-underline list-none flex flex-row justify-between float-right text-2xl">
                    <li className="p-6 text-blue hover:text-red"><Link href="#">Home</Link></li>
                    <li className="p-6 text-blue hover:text-red"><Link href="#">About</Link></li>
                    <li className="p-6 text-blue hover:text-red"><Link href="#">Portfolio</Link></li>
                    <li className="p-6 text-blue hover:text-red"><Link href="#">Contacts</Link></li>
                </ul>
            </div>
        </nav>
    )
}