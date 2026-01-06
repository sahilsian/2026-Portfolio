import Input from "@/components/input";

interface TextInputProps {
    handleChange: () => void,
    value: string
}

const TextInput = ({handleChange, value}:TextInputProps) => {

    return (
        <div className={'px-2 py-2 border-1 border-[#000000]'}>
            <Input handleChange={handleChange} value={value} placeholder={"Text input..."} type={"text"}></Input>
        </div>
    )
}

export default TextInput