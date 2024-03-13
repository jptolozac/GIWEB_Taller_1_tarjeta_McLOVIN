import { IRightData } from "@/types/IRightData";

export default function({ title, description, number, DOB, EXP, HT, WT, hair, eyes, sex, city, issueDate, class_number, restr, endorse } : IRightData) {
    let fechaDOB = `${DOB.getDay() < 10 ? "0" + DOB.getDate() : DOB.getDate()}/${DOB.getMonth() < 10 ? "0" + DOB.getMonth() : DOB.getMonth()}/${DOB.getFullYear()}`
    let fechaExp = `${EXP.getDay() < 10 ? "0" + EXP.getDate() : EXP.getDate()}/${EXP.getMonth() < 10 ? "0" + EXP.getMonth() : EXP.getMonth()}/${EXP.getFullYear()}`
    let fechaIssue = `${issueDate.getDate() < 10 ? "0" + issueDate.getDate() : issueDate.getDate()}/${issueDate.getMonth() < 10 ? "0" + issueDate.getMonth() : issueDate.getMonth()}/${issueDate.getFullYear()}`
    return (
        <div className="block font-bold">
            <div className="licence-main-data">
                <span className="inline-flex text-blue-customized">
                    <p className="title text-7xl ml-2 mt-2 font-extrabold text-shadow">{title}</p>
                    <p className="w-20 grid place-items-end text-centers-end leading-7 pb-1 text-2xl ml-1 font-semibold">{description}</p>
                </span>
                <span className="inline-flex ml-4">
                    <p className="text-xl font-semibold">NUMBER</p>
                    <p className="ml-4 text-2xl font-bold text-tall">{number}</p>
                </span>
            </div>
            <div className="licence-data mt-3">
                <div className="date-data">
                    <span className="flex">
                        <p className="flex ml-4">
                            <span>DOB</span>
                            <span className="ml-1 text-2xl font-bold text-tall">{fechaDOB}</span>
                        </p>
                        <p className="flex ml-3">
                            <span>EXP</span>
                            <span className="ml-1 text-2xl font-bold text-tall">{fechaExp}</span>
                        </p>
                    </span>
                </div>
                <div className="subject-data ml-2 mt-1 text-sm">
                    <span className="grid grid-cols-6 mr-2">
                        <div className="item text-center">
                            <p>HT</p>
                            <p>{HT}</p>
                        </div>
                        <div className="item text-center">
                            <p>WT</p>
                            <p>{WT}</p>
                        </div>
                        <div className="item text-center">
                            <p>HAIR</p>
                            <p>{hair}</p>
                        </div>
                        <div className="item text-center">
                            <p>EYES</p>
                            <p>{eyes}</p>
                        </div>
                        <div className="item text-center">
                            <p>SEX</p>
                            <p>{sex}</p>
                        </div>
                        <div className="item text-center">
                            <p>CTY</p>
                            <p>{city}</p>
                        </div>
                    </span>
                </div>
                <div className="fauls">
                    <span className="grid grid-flow-col text-center ml-5 mr-5 mt-1">
                        <div>
                            <p className="text-start">ISSUE DATE</p>
                            <p className="text-sm text-start">{fechaIssue}</p>
                        </div>
                        <div>
                            <p>CLASS</p>
                            <p>{class_number}</p>
                        </div>
                        <div>
                            <p>RESTR</p>
                            <p>{restr}</p>
                        </div>
                        <div>
                            <p>ENDORSE</p>
                            <p>{endorse}</p>
                        </div>
                    </span>
                </div>
                <div className="firma w-fit ml-10">
                    <img src="/firma_mclovin.png" alt="Firma de mclovin"/>
                </div>
            </div>
        </div>
    )
}