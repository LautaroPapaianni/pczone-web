import Image from "next/image";
import Link from "next/link";
import logo from "@/imagenes/logo-pcZone.png";

export default function Header() {
  return (
    <header className="bg-[#0E1C2F] text-white px-6 py-2">
      <div className="flex items-center justify-between w-full">
        
        {/* IZQUIERDA: logo + links */}
        <div className="flex items-center gap-10 flex-1">
          <Link href="#">
            <Image src={logo} alt="PCZone Logo" width={70} height={40} className="object-contain rounded-2xl" />
          </Link>
          <nav className="flex gap-10 font-medium">
            <Link href="#">INICIO</Link>
            <Link href="#">PRODUCTOS</Link>
            <Link href="#">ARMA TU PC</Link>
            <Link href="#">COMPRA EN TU ZONA</Link>
          </nav>
        </div>

        {/* CENTRO: buscador */}
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1">
          <input
            type="text"
            placeholder="Value"
            className="rounded-full px-4 py-1 text-black text-sm focus:outline-none w-32 md:w-48"
          />
          <button className="bg-white rounded-full p-1">
            🔍
          </button>
        </div>

        {/* DERECHA: enlaces extra */}
        <div className="flex items-center gap-10 font-medium flex-1 justify-center">
          <Link href="#">GUIAS</Link>
          <Link href="#">🛒CARRITO</Link>
          <Link href="#">FAQ</Link> 
        </div>
        <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
              👤
            <Link href="#" className="flex justify-start"> 
          </Link>
        </div>
      </div>
    </header>
  );
}
