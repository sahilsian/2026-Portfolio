import TextField from "@/components/formFields/text";
import {
    ComponentFormDropdownField,
    ComponentFormEmailField,
    ComponentFormTextareaField,
    ComponentFormTextField,
    FormControlInterface
} from "@/hooks/useFormControl.ts";
import {ChangeEvent} from "react";
import EmailField from "@/components/formFields/email";
import TextareaField from "@/components/formFields/textarea";
import SubmitField from "@/components/formFields/submit";
import Typography from "@/components/typography";
import Spacer from "@/components/spacer";

interface FieldRendererProps {
    formController: FormControlInterface
}
const FieldRenderer = ({formController}: FieldRendererProps) => {
    const handleTextFieldChange = (id:string, e:ChangeEvent<HTMLInputElement>) => {
        formController.writeField(id, e.target.value)
    }

    const handleTextareaFieldChange = (id:string, e:ChangeEvent<HTMLTextAreaElement>) => {
        formController.writeField(id, e.target.value)
    }

    const handleSubmission = () => {
        formController.submitForm();
    }

    return (
        <div>
            {Array.from(formController.state.runtimeFields.values()).map((state) => {
                const fieldType = state.config.metadata.fieldType;
                switch (fieldType) {
                    case "text": {
                        const field = state.config as ComponentFormTextField
                        return <div className={'mb-4'}>
                            <TextField
                            key={field.id}
                            label={field.name}
                            disabled={formController.isProcessing || formController.state.mode == 'success'}
                            value={state.value}
                            placeholder={field.placeholder}
                            error={!!(state.error && state.touched)}
                            isRequired={field.required}
                            handleChange={(e:ChangeEvent<HTMLInputElement>) => handleTextFieldChange(field.id, e)}
                        />
                            {(state.error && state.touched) && (
                                <p className="text-red-500 text-sm mb-5">{state.error}</p>
                            )}
                        </div>
                    }

                    case "textarea": {
                        const field = state.config as ComponentFormTextareaField
                        return <div className={'mb-4'}> <TextareaField
                            key={field.id}
                            label={field.name}
                            disabled={formController.isProcessing || formController.state.mode == 'success'}
                            value={state.value}
                            placeholder={field.placeholder}
                            isRequired={field.required}
                            error={!!(state.error && state.touched)}
                            handleChange={(e:ChangeEvent<HTMLTextAreaElement>) => handleTextareaFieldChange(field.id, e)}
                        />
                            {(state.error && state.touched) && (
                                <p className="text-red-500 text-sm mb-5">{state.error}</p>
                            )}
                        </div>
                    }
                    case "dropdown":{
                        const field = state.config as ComponentFormDropdownField
                        return <div key={field.id}>dropdown</div>
                    }
                    case "email": {
                        const field = state.config as ComponentFormEmailField
                        return <div className={'mb-4'}> <EmailField
                            key={field.id}
                            disabled={formController.isProcessing || formController.state.mode == 'success'}
                            value={state.value}
                            placeholder={field.placeholder}
                            isRequired={field.required}
                            error={!!(state.error && state.touched)}
                            handleChange={(e:ChangeEvent<HTMLInputElement>) => handleTextFieldChange(field.id, e)}
                        />
                            {(state.error && state.touched) && (
                                <p className="text-red-500 text-sm mb-5">{state.error}</p>
                            )}
                        </div>
                    }
                    case "submit": {
                        const field = state.config as ComponentFormEmailField
                        return <SubmitField
                            onClick={handleSubmission}
                            name={field.name}
                            disabled={formController.isProcessing || formController.state.mode == 'success'}
                        />
                    }

                    default:
                        return <div>Field not supported.</div>
                }
            })}
            <Spacer height={'10px'}></Spacer>
            {formController.state.mode == 'success' && <Typography level={'4'} value={"Form Successfully Submitted."}/> }
            {formController.state.mode == 'error' && <Typography level={'4'} value={"Error submitting form."}/> }
        </div>
    )
}
export default FieldRenderer