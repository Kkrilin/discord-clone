import { Size } from "../../helper/type"



type Props = {
    statusSize: Size
}
export default function DoNotDisturb({ statusSize }: Props) {
    return (
        <div
            style={{
                ...statusSize
            }}
            className="bg-red-800 w-3 h-3 rounded-full flex justify-center items-center">
            <div style={{backgroundColor:"black"}} className="border border-black w-2 rounded-2xl bg-black"></div>
        </div>
    )
}