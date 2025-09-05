import { default as React } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';
export interface ToastProps {
    id: string;
    message: string;
    title?: string;
    type?: ToastType;
    duration?: number;
    onDismiss: (id: string) => void;
}
/**
 * @wizard
 * @name Toast
 * @description A single, transient notification message that appears briefly to provide feedback.
 * @tags feedback, notification, message, ui
 * @props
 * - name: id
 * type: string
 * description: A unique identifier for this specific toast instance.
 * - name: title
 * type: string
 * description: An optional title for the toast notification.
 * - name: message
 * type: string
 * description: The main text content of the toast notification.
 * - name: type
 * type: "'success' | 'error' | 'info' | 'warning'"
 * description: Defines the visual style and semantic meaning of the toast.
 * default: 'info'
 * - name: duration
 * type: number
 * description: How long the toast should remain visible in milliseconds. Set to `0` for a sticky toast.
 * default: 5000
 * - name: onDismiss
 * type: (id: string) => void
 * description: Callback function triggered when the toast is dismissed.
 * @category feedback
 */
export declare const Toast: React.FC<ToastProps>;
