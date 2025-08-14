import React from 'react';
interface FormFieldBase {
    name: string;
    label: string;
    className?: string;
    disabled?: boolean;
}
interface FormInput extends FormFieldBase {
    type: 'text' | 'email' | 'password' | 'number';
    placeholder?: string;
    value?: string | number;
}
interface SelectOption {
    value: string | number;
    label: string;
}
interface FormSelect extends FormFieldBase {
    type: 'select';
    options: SelectOption[];
    value?: string | number;
}
interface FormCheckbox extends FormFieldBase {
    type: 'checkbox';
    checked?: boolean;
}
interface FormRadio extends FormFieldBase {
    type: 'radio';
    value: string | number;
    checked?: boolean;
    radioGroup: string;
}
export type FormField = FormInput | FormSelect | FormCheckbox | FormRadio;
export interface FormTemplateProps {
    title: string;
    fields: FormField[];
    onSubmit: (formData: Record<string, any>) => void;
    onCancel?: () => void;
    submitButtonText?: string;
    cancelButtonText?: string;
    className?: string;
}
/**
 * @wizard
 * @name FormTemplate
 * @description A flexible component for rapidly building forms based on a declarative array of field configurations.
 * @tags templates, form, structure, pattern
 * @props
 * - name: title
 * type: string
 * description: The main title displayed at the top of the form.
 * - name: fields
 * type: FormField[]
 * description: An array of objects, where each object defines a form input, select, checkbox, or radio field.
 * - name: onSubmit
 * type: (formData: Record<string, any>) => void
 * description: Callback function triggered when the form is submitted, providing the current form data.
 * - name: onCancel
 * type: () => void
 * description: Optional callback function triggered when the 'Cancel' button is clicked.
 * - name: submitButtonText
 * type: string
 * description: The text displayed on the primary submit button.
 * default: 'Submit'
 * - name: cancelButtonText
 * type: string
 * description: The text displayed on the cancel button.
 * default: 'Cancel'
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the outer form container.
 * @category templates-patterns
 */
export declare const FormTemplate: React.FC<FormTemplateProps>;
export {};
