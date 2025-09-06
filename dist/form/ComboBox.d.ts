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
    containerClassName?: string;
}
/**
 * @wizard
 * @name ComboBox
 * @description A text input with an integrated dropdown list of selectable options, allowing both typing and selection.
 * @tags form, input, select, dropdown, autocomplete, ui
 * @category form
 */
export declare const ComboBox: React.FC<ComboBoxProps>;
export {};
