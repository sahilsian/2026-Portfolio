interface InputProps {
    placeholder: string;
    type: string;
    value: string;
}

const Input = ({placeholder = "text here", type="text", value}:InputProps) => {
    return <input type={type} placeholder={placeholder} value={value} className={'w-full'} />
}

export default Input