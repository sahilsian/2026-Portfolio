import FormLayout from "@/layouts/form";
import {FormProps} from "@/hooks/useFormControl.ts";

interface FormRendererProps {
    type: string
    form: FormProps
}

const FormRenderer = ({type, form}:FormRendererProps) => {
    return <FormLayout image={form.image} type={type} form={form} formTitle={form.title} formDescription={form.description}/>
}

export default FormRenderer