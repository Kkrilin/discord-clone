import { Size } from "../../helper/type"

type Props = {
    statusSize: Size
}
export default function Idle({ statusSize }: Props) {
    console.log('status', statusSize)
    return (
        <div
            style={{
                ...statusSize
            }}
            className="bg-orange-300 w-3 h-3 rounded-full">
            <div
                style={{
                    ...(statusSize.width === '16px' ? { width: "12px", height: "12px" } : { width: "8px", height: "8px" })
                }}
                className="bg-neutral-900 w-2 h-2 relative  rounded-full"></div>
        </div>
    )
}