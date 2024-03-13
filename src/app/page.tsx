import LeftData from "@/components/LeftData";
import RightData from "@/components/RightData";
import Image from "next/image";


export default function Home() {
  return (
    <main className="h-screen w-screen">
      <div className="grid justify-center h-full w-full content-center">
        <section className="border tarjeta relative overflow-hidden shadow-lg rounded-2xl hover:scale-110 transition ease-in-out cursor-pointer">
          <div className="rainbow absolute w-[1500px] h-3/4 -left-[80%] top-20">
            <Image
              src={"/arcoiris.jpg"}
              fill={true}
              alt="Imagen del arcoiris de fondo para la licencia"
              className="w-[100vw] h-full"
            ></Image>
          </div>
          <section className="left-section w-4/12 h-full absolute flex">
            <LeftData
              photo={'/mclovin.jpg'}
              barCodeImg={"/codigo_de_barras.png"}
              name="McLOVIN"
              direction="892 MOMONA ST"
              state="HONOLULU"
              stateShort="HL"
              CP="96820"
            ></LeftData>
            <RightData
              title="HAWAII"
              description="DRIVER LICENSE"
              number="01-47-87441"
              DOB={new Date(1981, 3, 6)}
              EXP={new Date(2008, 3, 6)}
              HT="5-10"
              WT={150}
              hair="BRO"
              eyes="BRO"
              sex="M"
              city={0}
              issueDate={new Date(1998, 6, 18)}
              class_number={3}
            ></RightData>
          </section>
        </section>
      </div>
    </main>
  );
}
