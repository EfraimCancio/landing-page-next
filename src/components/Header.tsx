import Image from "next/image";
import Arrow from "../assets/";
import Logo from "../assets/logo.svg";


export function Header() {
    return (
        <header className="">
            <div>
                <div>
                   <Image 
                    src={Logo}
                    alt="Logo"
                   />
                   <ul>
                    <li>
                        <button>
                            <span>Para você</span>
                            <Image
                             src={Arrow}
                             alt="icone de seta"
                            />
                        </button>
                    </li>
                    <li>
                        <button>
                            <span></span>
                             <Image
                             src={Arrow}
                             alt="icone de seta"
                            />
                        </button>
                    </li>
                    <li>
                        <button>
                            <span />
                             <Image
                             src={Arrow}
                             alt="icone de seta"
                            />
                        </button>
                    </li>
                    <li>
                        <button>
                            <span />
                             <Image
                             src={Arrow}
                             alt="icone de seta"
                            />
                        </button>
                    </li>
                   </ul>
                </div>
            </div>
        </header>
    )
}