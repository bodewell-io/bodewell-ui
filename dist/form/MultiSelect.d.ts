import { default as React } from 'react';

export interface MultiSelectOption {
    value: string;
    label: string;
}
export interface MultiSelectProps {
    options: MultiSelectOption[];
    value: MultiSelectOption[] | null;
    onChange: (selected: MultiSelectOption[] | null) => void;
    placeholder?: string;
    isClearable?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    isSearchable?: boolean;
    label?: string;
}
/**
 * @wizard
 * @name MultiSelect
 * @description An enhanced dropdown component that allows users to select multiple options from a searchable list.
 * @tags form, input, select, dropdown, ui, multi-selection
 * @props
 * - name: options
 * type: { value: string; label: string; }[]
 * description: An array of objects defining the selectable options, each with a `value` and `label`.
 * - name: value
 * type: { value: string; label: string; }[] | null
 * description: The currently selected options as an array of objects, or `null` if nothing is selected.
 * - name: onChange
 * type: (selected: MultiSelectOption[] | null) => void
 * description: Callback function triggered when the selection changes.
 * - name: placeholder
 * type: string
 * description: The placeholder text displayed when no options are selected.
 * default: 'Select...'
 * - name: isClearable
 * type: boolean
 * description: If true, allows the user to clear all selected options with a single click.
 * default: true
 * - name: isDisabled
 * type: boolean
 * description: If true, the multi-select component will be unclickable and styled as disabled.
 * default: false
 * - name: isLoading
 * type: boolean
 * description: If true, displays a loading indicator within the component.
 * default: false
 * - name: isSearchable
 * type: boolean
 * description: If true, allows users to type into the input field to filter options.
 * default: true
 * - name: label
 * type: string
 * description: An optional label displayed above the MultiSelect component.
 * @category form
 */
export declare const MultiSelect: React.FC<MultiSelectProps>;
