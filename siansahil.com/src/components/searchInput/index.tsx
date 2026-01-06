import TextInput from "@/components/textInput";

interface SearchInputProps {
    handleChange: () => void,
    value: string
}
const SearchInput = ({handleChange, value}:SearchInputProps) => {
    return (
        <div>
            <TextInput handleChange={handleChange} value={value}></TextInput>
        </div>
    )
}

export default SearchInput