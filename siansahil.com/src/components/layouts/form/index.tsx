import {Content} from "@/components/layouts/form/content.tsx";
import {Background} from "@/components/layouts/form/background.tsx";
import {FormFields} from "@/components/layouts/form/formFields.tsx";
import {FormImage} from "@/components/layouts/form/formImage.tsx";
import {FormProps} from "@/hooks/useFormControl.ts";
import {StrapiImage} from "@/components/image";

interface FormLayoutProps {
    type: string;
    formTitle: string;
    formDescription: string;
    form: FormProps;
    image: StrapiImage
}


const FormLayout = ({type, formTitle, formDescription, form, image}:FormLayoutProps) => {
    return (
        <div className={`Form ${type} lg:px-22 px-6 bg-[#EDEDED] relative`}>
            <Background></Background>
            <Content title={formTitle} description={formDescription}></Content>
            <div className={'flex z-[30] gap-10 relative w-full'}>
                <FormFields formSchema={form}></FormFields>
                <FormImage image={image}></FormImage>
            </div>
        </div>
    )
}

export default FormLayout