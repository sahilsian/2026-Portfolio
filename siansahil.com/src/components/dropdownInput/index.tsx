'use client'
import Input from "@/components/input";
import {useState} from "react";

interface DropdownInputProps {
    value: string
}
const DropdownInput = ({value}:DropdownInputProps) => {
    return (
        <div>
            <Input placeholder={"Select an item..."} type={"button"} value={value}></Input>
        </div>
    )
}

export default DropdownInput