import DropdownOption, {DropdownOptionProps} from "@/components/dropdownInput/option.tsx";
import {ChangeEvent} from "react";

interface DropdownInputProps {
    value: string
    handleChange: (e:ChangeEvent<HTMLSelectElement>) => void,
    disabled: boolean
    options?: DropdownOptionProps[]
}
const DropdownInput = ({value, handleChange, disabled, options}:DropdownInputProps) => {
    return (
        <div>
            <div >
                <select value={value} onChange={handleChange} disabled={disabled}>
                    {options && options.map((option) => {
                        return <DropdownOption name={option.name}></DropdownOption>
                    })}
                </select>
            </div>
        </div>
    )
}

export default DropdownInput