import Image from "next/image";
import type { ILeftData } from "@/types/ILeftData";

export default function LeftData({ photo, barCodeImg, name, direction, state, stateShort, CP } : ILeftData){
    const barCode = {
        transform: "scale(1.07, .8)"
    }

    return(
        <>
            <div className="container bg-white mt-2">
                <div className="mclovin-image">
                    <Image
                        src={photo}
                        width={200}
                        height={112.5}
                        alt="Imagen de mclovin"
                    ></Image>
                </div>
                <div className="bar-code ml-3 -mr-3 -mb-1">
                    <Image
                        src={barCodeImg}
                        width={190}
                        height={50}
                        alt="Imagen de un código de barras"
                        style={barCode}
                    >
                    </Image>
                </div>
                <div className="home-data ml-6 items-start font-medium -mt-2">
                    <p className="-mb-1">{name}</p>
                    <p className="-mb-1">{direction}</p>
                    <p className="-mb-1 w-96">{state}, {stateShort} {CP}</p>
                </div>
            </div>
        </>
    );
}