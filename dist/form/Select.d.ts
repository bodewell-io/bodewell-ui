import React from 'react';
export interface SelectOption {
    value: string | number;
    label: string;
}
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOption[];
    label?: string;
}
/**
 * @wizard
 * @name Select
 * @description A standard HTML select dropdown component for choosing a single option from a list.
 * @tags form, input, dropdown, ui
 * @props
 * - name: options
 * type: { value: string | number; label: string; }[]
 * description: An array of objects defining the selectable options, each with a `value` and `label`.
 * - name: label
 * type: string
 * description: An optional label displayed above the select dropdown.
 * - name: id
 * type: string
 * description: A unique HTML `id` for the select element. Automatically generated if not provided.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the select element.
 * - name: value
 * type: string | number | readonly string[]
 * description: The currently selected option's value.
 * - name: onChange
 * type: (event: React.ChangeEvent<HTMLSelectElement>) => void
 * description: Callback function triggered when the selected value changes.
 * - name: disabled
 * type: boolean
 * description: If true, the select dropdown will be unclickable.
 * @category form
 */
export declare const Select: React.FC<SelectProps>;
