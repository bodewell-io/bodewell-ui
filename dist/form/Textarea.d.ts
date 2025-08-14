import React from 'react';
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    containerClassName?: string;
}
/**
 * @wizard
 * @name Textarea
 * @description A theme-aware textarea component for multi-line text input.
 * @tags form, input, ui
 * @props
 * - name: label
 * type: string
 * description: An optional label to display above the textarea.
 * - name: containerClassName
 * type: string
 * description: Optional additional CSS classes for the container div.
 * @category form
 */
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export {};
