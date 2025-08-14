import React from 'react';
import { type ToastType } from './Toast';
interface ToastContextType {
    addToast: (message: string, type?: ToastType, duration?: number) => void;
    dismissToast: (id: string) => void;
}
/**
 * @wizard
 * @name useToast
 * @description A React hook to easily add and dismiss toast notifications anywhere within a `ToastProvider`.
 * @tags hook, feedback, notification
 * @returns
 * - name: addToast
 * type: (message: string, type?: ToastType, duration?: number) => void
 * description: A function to trigger a new toast notification.
 * - name: dismissToast
 * type: (id: string) => void
 * description: A function to programmatically dismiss a toast by its ID.
 * @category feedback
 */
export declare const useToast: () => ToastContextType;
/**
 * @wizard
 * @name ToastProvider
 * @description Provides a context for displaying transient notifications (toasts). Wrap your application with this component.
 * @tags feedback, notification, context, provider
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The React nodes that will have access to the `useToast` hook. Typically wraps the entire application.
 * @category feedback
 */
export declare const ToastProvider: React.FC<{
    children: React.ReactNode;
}>;
export {};
