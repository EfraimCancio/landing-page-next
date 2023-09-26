import Image from 'next/image';

import IconUser from '../assets/icon-user.svg';
import Logo from '../assets/logo.svg';
import { ItemMenu } from './ItemMenu';
import { Search } from './Search';

export function Header() {
  return (
    <header className="relative w-full h-20 bg-primary-orange flex items-center">
      <div className='absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0'></div>
      <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
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
        <button className='flex items-center gap-4 bg-primary-blue h-20 pl-10 z-10'>
          <Image src={IconUser} alt="Icone Usuário" />
          <span className='text-white font-semibold'>Acessar conta</span>
        </button>
      </div>
    </header>
  );
}
