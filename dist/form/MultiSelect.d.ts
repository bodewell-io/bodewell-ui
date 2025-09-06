import { default as React } from 'react';

export interface MultiSelectOption {
    value: string;
    label: string;
}
export interface MultiSelectProps {
    options: MultiSelectOption[];
    value: MultiSelectOption[] | null;
    onChange: (selected: MultiSelectOption[] | null) => void;
    label?: string;
    placeholder?: string;
    isClearable?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    isSearchable?: boolean;
}
/**
 * @wizard
 * @name MultiSelect
 * @description An enhanced dropdown that allows users to select multiple options from a searchable list.
 * @tags form, input, select, dropdown
 * @category form
 */
export declare const MultiSelect: React.FC<MultiSelectProps>;
