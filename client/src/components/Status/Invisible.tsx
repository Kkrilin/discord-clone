import { Size } from "../../helper/type"

type Props = {
    statusSize: Size
}

export default function Invisible({ statusSize }: Props) {

    return (
        <div
            style={{
                ...statusSize,
                ...(statusSize.width === '8px' ? { borderWidth: '2px' } : {})
            }}
            className="border-3 border-neutral-500 w-3 h-3 rounded-full"></div>
    )
}