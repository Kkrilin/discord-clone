import React from 'react'
import { Size } from '../../helper/type'

type Props = {
    statusComponent: React.ReactNode
    showStatusSize: Size
}

export default function ShowStatus({ statusComponent, showStatusSize }: Props) {
    return (
        <div
            style={{
                ...showStatusSize
            }}
            className=' absolute -right-1 -bottom-1 flex justify-center items-center w-5 h-5 rounded-full bg-neutral-900'>{statusComponent}</div>
    )
}