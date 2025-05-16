import Link from "next/link";
import Image from "next/image";
import logo_movile from "@/imagenes/logo-pcZone.png";

export default function Footer() {
    return (
        <footer className="bg-[#0E1C2F] text-white px-6 py-2">
            {/* FOOTER: logo */}
            <div className="flex justify-start my-4">
                <Link href="#">
                    <Image src={logo_movile} alt="logo PCZone footer" width={100} height={100} />
                </Link>
            </div>
            {/* FOOTER: Botones centrales */}
            <div className="flex flex-row gap-10 justify-center my-4">
                <Link href={"#"} className="font-bold">
                    Boton Sorpresa
                </Link>
                <Link href={"#"} className="font-bold">
                    Preguntas Frecuentes
                </Link>
            </div>
            {/* FOOTER: Redes sociales */}
            <div className="grid grid-cols-2 gap-4">
                <Link href={"#"}>
                    <Image src={logo_movile} alt="Instagram" width={30} height={30} />
                </Link>
                <Link href={"#"}>
                    <Image src={logo_movile} alt="X, Twitter" width={30} height={30} />
                </Link>
                <Link href={"#"}>
                    <Image src={logo_movile} alt="Whatsapp" width={30} height={30} />
                </Link>
                <Link href={"#"}>
                    <Image src={logo_movile} alt="Linkedin" width={30} height={30} />
                </Link>
            </div>
        </footer>
    );
}