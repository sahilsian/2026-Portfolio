import {FormProps, useFormControl} from "@/hooks/useFormControl.ts";
import FieldRenderer from "@/components/renderers/fieldRenderer";
interface FieldsProps {
    formSchema: FormProps
}

export const FormFields = ({formSchema}:FieldsProps) => {
    const formController = useFormControl({formSchema})
    return (
        <div className={'w-full flex-2'}>
            <FieldRenderer formController={formController}>
            </FieldRenderer>
        </div>

    )
}