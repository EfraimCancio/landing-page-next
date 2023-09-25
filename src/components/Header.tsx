import Image from "next/image";
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

              </li>
              <li>
               
              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
