import React, { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react';
declare const buttonVariants: {
    primary: string;
    secondary: string;
    danger: string;
    outline: string;
    accent: string;
    ghost: string;
    link: string;
};
declare const buttonSizes: {
    sm: string;
    md: string;
    lg: string;
};
export type CommonProps = {
    children?: ReactNode;
    variant?: keyof typeof buttonVariants;
    size?: keyof typeof buttonSizes;
    iconBefore?: ReactNode;
    iconAfter?: ReactNode;
    loading?: boolean;
    fullWidth?: boolean;
    isIconOnly?: boolean;
};
export type ButtonAsButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonAsAnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;
/**
 * @wizard
 * @name Button
 * @description A versatile component for user interactions, supporting various styles, sizes, and states. It renders as a button or an anchor tag if an href is provided.
 * @tags ui, action, form, clickable
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The content displayed inside the button (e.g., text, icon).
 * - name: variant
 * type: "'primary' | 'secondary' | 'danger' | 'outline' | 'accent' | 'ghost' | 'link'"
 * description: Defines the visual style and importance of the button.
 * default: "'primary'"
 * - name: size
 * type: "'sm' | 'md' | 'lg'"
 * description: Controls the padding and font size of the button.
 * default: "'md'"
 * - name: iconBefore
 * type: React.ReactNode
 * description: An optional icon to display before the button's text content.
 * - name: iconAfter
 * type: React.ReactNode
 * description: An optional icon to display after the button's text content.
 * - name: loading
 * type: boolean
 * description: If true, displays a loading spinner and disables the button.
 * default: false
 * - name: fullWidth
 * type: boolean
 * description: If true, the button will take up the full width of its parent container.
 * default: false
 * - name: href
 * type: string
 * description: If provided, the component renders as an anchor `<a>` tag.
 * @category ui
 */
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export {};
