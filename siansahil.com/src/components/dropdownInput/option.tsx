import Typography from "@/components/typography";

export interface DropdownOptionProps {
    name: string
}
const DropdownOption = ({name}:DropdownOptionProps) => {
    return (
        <option value={name}><Typography level={"6"} value={name}></Typography></option>
    )
}

export default DropdownOption