import Image from "next/image";
import Logo from "../assets/logo.svg";
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";

export function Header() {
  return (
    <header className="w-full h-20 bg-primary-orange flex items-center">
      <div className="w-full max-w-[1246px] px-[15px] mx-auto">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="Logo" />
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name="Menu 01"/>
              </li>
              <li>
                <ItemMenu name="Menu 02"/>
                
              </li>
              <li>
                <ItemMenu name="Menu 03"/>

              </li>
              <li>
                <ItemMenu name="Menu 04"/>

              </li>
            </ul>
          </div>
          <div className="">
            <Search />
          </div>
          
        </div>
      </div>
    </header>
  );
}
