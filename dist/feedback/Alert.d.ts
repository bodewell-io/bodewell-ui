import { default as React } from 'react';

export interface AlertProps {
    title: string;
    children?: React.ReactNode;
    variant?: 'info' | 'success' | 'warning' | 'danger';
    className?: string;
}
/**
 * @wizard
 * @name Alert
 * @description Displays static, in-page messages to convey important information like success, warnings, or errors.
 * @tags feedback, message, notification, ui
 * @props
 * - name: title
 * type: string
 * description: The main heading or concise summary of the alert message.
 * - name: children
 * type: React.ReactNode
 * description: Optional additional content or a longer description for the alert.
 * - name: variant
 * type: 'info' | 'success' | 'warning' | 'danger'
 * description: Defines the color scheme, icon, and semantic meaning of the alert.
 * default: 'info'
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling of the alert container.
 * @category feedback
 */
export declare const Alert: React.FC<AlertProps>;
