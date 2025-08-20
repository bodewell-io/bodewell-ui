import { default as React } from 'react';

export interface ActionBarProps {
    /** The content of the action bar, typically buttons. */
    children: React.ReactNode;
    /** Optional additional CSS classes. */
    className?: string;
}
/**
 * @wizard
 * @name ActionBar
 * @description A persistent bar, typically at the bottom of a form or page, used to group primary actions like 'Save' and 'Cancel'.
 * @tags layout, form, actions, buttons, ui, pattern
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The content of the action bar, typically `Button` components.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling of the action bar container.
 * @category layout
 */
export declare const ActionBar: React.FC<ActionBarProps>;
