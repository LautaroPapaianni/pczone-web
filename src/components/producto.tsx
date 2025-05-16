import Image from "next/image";
import carritoIcon from "@/imagenes/Icons/carritoIcon.svg";

export default function Producto() {
    return (
        <div className={"bg-white text-black rounded-lg p-5 m-5 max-w-[250px] h-[300px]"}>
            <Image src={""} alt="" width={200} height={150} />
            <p className="text-[16px]">Fuente ADATA XPG 1300W 80 Plus Platinum Full Modular</p>
            <div className="flex align-end justify-between">
                <p className="text-[16px] text-black font-bold">$ 800</p>
                <button className="bg-[#4A89DC] rounded-lg mx-2 p-2 hover:bg-[#102647] focus:outline-2 focus:outline-offset-2 focus:outline-[#4A89DC] active:bg-[#102647]"><Image src={carritoIcon} alt="Carrito de compras" width={25} height={25} className="invert"/></button>
            </div>
        </div>
    )
}