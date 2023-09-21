import Image from "next/image";
import Arrow from "../assets/arrow-down.svg";
import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="w-full h-20 bg-primary-orange flex items-center">
      <div className="w-full max-w-[1246px] px-[15px] mx-auto">
        <div>
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="Logo" />
            <ul>
              <li>
                <button className="flex items-center gap-3">
                  <span className="text-white font-bold ">Para você</span>
                  <Image src={Arrow} alt="icone de seta" />
                </button>
              </li>
              <li>
                <button>
                  <span></span>
                  <Image src={Arrow} alt="icone de seta" />
                </button>
              </li>
              <li>
                <button>
                  <span />
                  <Image src={Arrow} alt="icone de seta" />
                </button>
              </li>
              <li>
                <button>
                  <span />
                  <Image src={Arrow} alt="icone de seta" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
