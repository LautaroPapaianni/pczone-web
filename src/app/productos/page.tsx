import Image from "next/image";

export default function Productos() {
    return (
        <main className="flex items-start justify-start px-10 pt-24 mx-40">
            <div className="grid grid-cols-5 grid-rows-5 gap-4">
                <div className="col-span-3 col-start-2 row-start-2">
                    <Image src={""} alt="imagen de producto" width={200} height={200} />
                </div>
            </div>
            <div>
                <h2>Conoce nuestros productos </h2>
            </div>
            <div>
                <h2>Explora Nuestros <strong>Componentes</strong></h2>
                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                    <div className="col-span-2 row-span-2 row-start-2">1</div>
                    <div className="col-start-3 row-start-2">5</div>
                    <div className="col-start-3 row-start-3">6</div>
                    <div className="col-start-4 row-start-2">7</div>
                    <div className="col-start-4 row-start-3">8</div>
                    <div className="row-span-2 col-start-5 row-start-2">9</div>
                </div>
            </div>
        </main>
    )
}