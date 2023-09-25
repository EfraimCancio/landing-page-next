import Image from "next/image";

import Arrow from "../assets/arrow-down.svg";

type Props = {
    name: string;
}

export function ItemMenu () {
    return (
        <button>
            <span></span>
            <Image src={Arrow} alt="icone de seta" />
        </button>
    )
}