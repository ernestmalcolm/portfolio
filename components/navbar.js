import Image from "next/image";
import Logo from "../public/images/EM_.png"

export default function NavBar() {
    return(
        <nav className="w-full flex flex-row justify-between px-40 py-8 bg-lgray">
            <div>
                <Image src={Logo} height={100} width={100} />
            </div>
            <div>
                <ul className="no-underline list-none flex flex-row justify-between float-right text-2xl">
                    <li className="p-6 text-blue">Home</li>
                    <li className="p-6 text-blue">About</li>
                    <li className="p-6 text-blue">Portfolio</li>
                    <li className="p-6 text-blue">Contacts</li>
                </ul>
            </div>
        </nav>
    )
}