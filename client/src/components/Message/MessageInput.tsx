import { useState } from 'react'


export default function MessageInput() {
    const [messageText, setMessageText] = useState('')
    return (
        <div>
            <input
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                style={{
                    backgroundColor: "#121214",
                    borderRadius: "10px",
                    width: "100%",
                    border: "1px solid red"
                }}
                placeholder='Search' type="input" name="" id="" />
        </div>
    )
}