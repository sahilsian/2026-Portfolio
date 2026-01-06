interface InputProps {
    placeholder: string;
    type: string;
    value: string;
    handleChange: () => void;
}

const Input = ({placeholder = "text here", type="text", value, handleChange}:InputProps) => {
    return <input onChange={handleChange} type={type} placeholder={placeholder} value={value} className={'w-full'} />
}

export default Input