import { useState } from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DateOfBirth } from "../../pages/RegisterPage";

interface CustomDropDownProps {
    dropDowns: (string | number)[],
    text: string,
    value: string | number,
    setDateOfBirth: React.Dispatch<React.SetStateAction<DateOfBirth>>
    setError: React.Dispatch<React.SetStateAction<string>>
}

export default function CustomDropDown({ dropDowns, text, value, setDateOfBirth, setError }: CustomDropDownProps) {
    const [showDropDoun, setShowDropDown] = useState(false)
    const handleDropDownClick = (dropDownValue: string | number) => {
        setError('')
        setDateOfBirth(prv => {
            return {
                ...prv,
                [text]: dropDownValue
            }
        })
    }
    return (
        <div style={{
            backgroundColor: "#28292E",
            width: "150px",
        }}
            className=' text-gray-400 relative flex justify-between items-center px-2 rounded-md h-10' onClick={() => setShowDropDown(prv => !prv)}>
            {showDropDoun &&
                <ul
                    style={{
                        backgroundColor: "#323339",
                        height: "250px",
                        overflowY: "auto",
                        width: "100%",
                        left: "0",
                        top: "-250px",
                        border: "1px solid black",
                        borderRadius: " 6px 6px 0 0 "
                    }}
                    className='absolute custom-scroll '>
                    {dropDowns.map(dd => <li key={dd} onClick={() => handleDropDownClick(dd)} className=' text-white px-2 py-2 hover:bg-gray-600'>{dd}</li>)}
                </ul>}
            {value || text}
            <KeyboardArrowDownIcon />
        </div>
    )
}