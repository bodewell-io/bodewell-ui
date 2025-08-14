import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
export interface DatePickerProps {
    label?: string;
    onChange: (date: Date | null) => void;
    selected: Date | null;
    className?: string;
    placeholderText?: string;
    dateFormat?: string;
    isClearable?: boolean;
    minDate?: Date;
    maxDate?: Date;
    showTimeSelect?: boolean;
}
/**
 * @wizard
 * @name DatePicker
 * @description A calendar-based input component for selecting single dates, with theme integration.
 * @tags form, input, date, calendar, ui
 * @props
 * - name: label
 * type: string
 * description: An optional label displayed above the date picker input field.
 * - name: selected
 * type: Date | null
 * description: The currently selected date object, or `null` if no date is selected.
 * - name: onChange
 * type: (date: Date | null) => void
 * description: Callback function triggered when a new date is selected.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the date picker's wrapper container.
 * - name: dateFormat
 * type: string
 * description: The format string for displaying the date (e.g., 'MM/dd/yyyy', 'yyyy-MM-dd').
 * - name: showTimeSelect
 * type: boolean
 * description: If true, also allows time selection in addition to date selection.
 * - name: isClearable
 * type: boolean
 * description: If true, displays a clear button to deselect the date.
 * - name: placeholderText
 * type: string
 * description: Text displayed when no date is selected.
 * - name: minDate
 * type: Date
 * description: The earliest selectable date.
 * - name: maxDate
 * type: Date
 * description: The latest selectable date.
 * @category form
 */
export declare const DatePicker: React.FC<DatePickerProps>;
