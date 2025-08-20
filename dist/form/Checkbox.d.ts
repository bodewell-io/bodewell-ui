import { default as React } from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode;
}
/**
 * @wizard
 * @name Checkbox
 * @description A standard checkbox input for selecting one or more options from a set.
 * @tags form, input, selection, ui
 * @props
 * - name: label
 * type: React.ReactNode
 * description: The visible label associated with the checkbox. Can be text or JSX.
 * - name: id
 * type: string
 * description: A unique HTML `id` for the input element. Automatically generated if not provided.
 * - name: checked
 * type: boolean
 * description: Controls whether the checkbox is currently checked.
 * - name: onChange
 * type: (event: React.ChangeEvent<HTMLInputElement>) => void
 * description: Callback function triggered when the checkbox's checked state changes.
 * - name: disabled
 * type: boolean
 * description: If true, the checkbox is unclickable and styled as disabled.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the input element.
 * @category form
 */
export declare const Checkbox: React.FC<CheckboxProps>;
