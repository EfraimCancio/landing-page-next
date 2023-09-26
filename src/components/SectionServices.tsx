import CardIcon from "@/assets/icon-card.svg";
import OptionsIcon from "@/assets/icon-options.svg";
import PhoneIcon from "@/assets/icon-phone.svg";
import SolutionsIcon from "@/assets/icon-solutions.svg";
import ImagePhone from "@/assets/phone.png";
import Image from "next/image";
import { Container } from "./Container";

export function SectionServices () {
    return (
        <section className="relative w-full h-[965px] pt-32">
          <Container>
            <div className="flex-1 max-w-[594px]">
                <span className="block text-primary-orange text-sm font-bold uppercase mb-9">Serviços exclusivos</span>
                <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>
                <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e melhor, no conforto da sua casa.</p>
                <ul className="flex
                 flex-col items-start gap-9">
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex items-center justify-center">
                             <Image src={PhoneIcon} alt="Icone telefone" />
                        </div>
                        <p className="flex-1 text-txt-gray pr-2">Acompamhar sua conta, fazer tranferências e pagamentos de onde estiver</p>
                    </li>
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex items-center justify-center">
                             <Image src={SolutionsIcon} alt="Icone telefone" />
                        </div>
                        <p className="flex-1 text-txt-gray pr-2">Acompamhar sua conta, fazer tranferências e pagamentos de onde estiver</p>
                    </li>
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex items-center justify-center">
                             <Image src={OptionsIcon} alt="Icone telefone" />
                        </div>
                        <p className="flex-1 text-txt-gray pr-2">Acompamhar sua conta, fazer tranferências e pagamentos de onde estiver</p>
                    </li>
                    <li className="flex items-center gap-9 ">
                        <div className="w-7 h-7 flex items-center justify-center">
                             <Image src={CardIcon} alt="Icone telefone" />
                        </div>
                        <p className="flex-1 text-txt-gray pr-2">Acompamhar sua conta, fazer tranferências e pagamentos de onde estiver</p>
                    </li>
                </ul>
            </div>
          </Container>
          <div className="absolute top-0 right-0 flex items-center w-[32%] h-full bg-gray-phone">
            <Image src={ImagePhone} alt="Imagem celular" className="translate-x-[-40%]"/>
          </div>
        </section>
    )
}