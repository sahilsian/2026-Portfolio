import TextInput from "@/components/textInput";
import ControlButton from "@/components/controlButton";
import Typography from "@/components/typography";
import {KeyboardEventHandler} from "react";

interface SearchInputProps {
    handleChange: (e:any) => void,
    value: string,
    onSearch: () => void,
    onClear: () => void,
    showClear: boolean
    onEnter: KeyboardEventHandler<HTMLInputElement>
    disabled: boolean
}
const SearchInput = ({disabled, showClear, onEnter, onSearch, onClear, handleChange, value}:SearchInputProps) => {

    return (
        <div className={'flex items-center gap-3'}>
            <TextInput disabled={disabled} onEnter={onEnter} placeholder={"Search..."} handleChange={handleChange} value={value}></TextInput>
            <ControlButton onClick={onSearch}>
                <Typography value={'Search'} level={'button'}>
                </Typography>
            </ControlButton>

            {showClear && <ControlButton secondary onClick={onClear}>
                <Typography value={'Reset'} level={'button'}>
                </Typography>
            </ControlButton> }
        </div>
    )
}

export default SearchInput