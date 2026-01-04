import Input from "@/components/input";
import {useState} from "react";

const TextInput = () => {
    const [value, setValue] = useState<string>("")
    return (
        <div className={'px-2 py-2 border-1 border-[#000000]'}>
            <Input placeholder={"Text input..."} type={"text"} value={value}></Input>
        </div>
    )
}

export default TextInput