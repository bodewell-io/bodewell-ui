import { default as React } from 'react';

export interface ToggleSwitchProps {
    /** Whether the toggle is checked or not. */
    checked: boolean;
    /** Callback function that is called when the toggle state changes. */
    onChange: (checked: boolean) => void;
    /** An accessible label for the toggle switch. */
    label: string;
    /** Optional additional CSS classes for the container. */
    className?: string;
    /** If true, the toggle will be disabled. */
    disabled?: boolean;
}
/**
 * @wizard
 * @name ToggleSwitch
 * @description A theme-aware toggle switch component, offering a boolean input alternative to a checkbox.
 * @tags form, ui, toggle, switch, input
 * @props
 * - name: checked
 * type: boolean
 * description: Controls whether the toggle is in the 'on' (checked) or 'off' (unchecked) state.
 * - name: onChange
 * type: (checked: boolean) => void
 * description: Callback function triggered when the toggle state changes.
 * - name: label
 * type: string
 * description: An accessible text label displayed next to the toggle switch.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the toggle switch container.
 * - name: disabled
 * type: boolean
 * description: If true, the toggle will be unclickable and styled as disabled.
 * default: false
 * @category form
 */
export declare const ToggleSwitch: React.FC<ToggleSwitchProps>;
