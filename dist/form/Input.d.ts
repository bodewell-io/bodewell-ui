import { default as React } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** An optional label to display above the input field. */
    label?: string;
    /** A string that provides a hint or an error message below the input. */
    helperText?: string;
    /** If true, the input will be styled to indicate an error. */
    error?: boolean;
    /** If true, a required indicator (*) will be displayed next to the label. */
    required?: boolean;
    /** If true, an "(optional)" indicator will be displayed next to the label. */
    showOptionalLabel?: boolean;
    /** Optional additional CSS classes for the container. */
    containerClassName?: string;
}
/**
 * @wizard
 * @name Input
 * @description A theme-aware text input component with support for labels, helper text, and validation states.
 * @tags form, input, ui, text
 * @props
 * - name: label
 * type: string
 * description: An optional label to display above the input field.
 * - name: helperText
 * type: string
 * description: A string that provides a hint or an error message below the input.
 * - name: error
 * type: boolean
 * description: If true, the input will be styled to indicate an error.
 * default: false
 * - name: required
 * type: boolean
 * description: If true, a required indicator (*) will be displayed next to the label.
 * default: false
 * - name: showOptionalLabel
 * type: boolean
 * description: If true, an "(optional)" indicator will be displayed next to the label.
 * default: false
 * - name: containerClassName
 * type: string
 * description: Optional additional CSS classes for the container.
 * @category form
 */
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export {};
