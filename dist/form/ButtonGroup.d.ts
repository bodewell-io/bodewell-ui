import { default as React } from 'react';

/**
 * Props for the ButtonGroup component.
 */
export interface ButtonGroupProps {
    /**
     * The Button components to be grouped together.
     */
    children: React.ReactNode;
    /**
     * Optional additional CSS classes to apply to the container.
     */
    className?: string;
    /**
     * The value of the currently selected button. Providing this will
     * turn the group into a radio-style segmented control.
     */
    value?: string | number;
    /**
     * Callback function that is called when the selected value changes.
     */
    onValueChange?: (value: string | number) => void;
}
/**
 * A component that visually groups multiple buttons together.
 * It can function as a simple visual container or as a stateful
 * segmented control (radio group) when `value` and `onValueChange` props are provided.
 */
/**
 * @wizard
 * @name ButtonGroup
 * @description Groups multiple Button components visually and can function as a segmented control (radio group).
 * @tags ui, form, action, group
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The `Button` components to be grouped together.
 * - name: className
 * type: string
 * description: Optional additional CSS classes to apply to the container.
 * - name: value
 * type: string | number
 * description: For segmented controls, the value of the currently selected button.
 * - name: onValueChange
 * type: (value: string | number) => void
 * description: Callback function for segmented controls, called when the selected value changes.
 * @category form
 */
export declare const ButtonGroup: React.FC<ButtonGroupProps>;
