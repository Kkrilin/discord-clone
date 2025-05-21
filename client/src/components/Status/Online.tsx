import { Size } from "../../helper/type"

type Props = {
    statusSize: Size
}

export default function Online({ statusSize }: Props) {

    return (
        <div
            style={{
                ...statusSize
            }}
            className="bg-green-500 w-3 h-3 rounded-full"></div>
    )
}