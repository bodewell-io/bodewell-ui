import { default as React } from 'react';

export interface ComboBoxOption {
    value: string | number;
    label: string;
}
interface ComboBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    options: ComboBoxOption[];
    label?: string;
    value?: string | number | null;
    onOptionSelect?: (selectedValue: string | number | null, selectedLabel: string | null) => void;
    placeholder?: string;
}
/**
 * @wizard
 * @name ComboBox
 * @description A text input with an integrated dropdown list of selectable options, allowing both typing and selection.
 * @tags form, input, select, dropdown, autocomplete, ui
 * @props
 * - name: options
 * type: { value: string | number; label: string; }[]
 * description: An array of objects defining the selectable options, each with a `value` and `label`.
 * - name: label
 * type: string
 * description: An optional label displayed above the ComboBox input field.
 * - name: value
 * type: string | number | null
 * description: The currently selected option's `value`. Can be `null` if no option is selected.
 * - name: onOptionSelect
 * type: (selectedValue: string | number | null, selectedLabel: string | null) => void
 * description: Callback function triggered when an option is selected from the dropdown.
 * - name: placeholder
 * type: string
 * description: The placeholder text displayed when the input is empty.
 * @category form
 */
export declare const ComboBox: React.FC<ComboBoxProps>;
export {};
