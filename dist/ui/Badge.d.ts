import { default as React } from 'react';

declare const badgeVariants: {
    primary: string;
    secondary: string;
    danger: string;
    success: string;
    outline: string;
};
export interface BadgeProps {
    /** The content to display inside the badge. */
    children: React.ReactNode;
    /** The color scheme of the badge. */
    variant?: keyof typeof badgeVariants;
    /** Optional additional CSS classes. */
    className?: string;
}
/**
 * @wizard
 * @name Badge
 * @description A small component used for status indicators, labels, or counts.
 * @tags ui, status, label, indicator
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The content to display inside the badge (e.g., text, number).
 * - name: variant
 * type: "'primary' | 'secondary' | 'danger' | 'outline'"
 * description: Defines the color scheme of the badge.
 * default: 'primary'
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling.
 * @category ui
 */
export declare const Badge: ({ children, variant, className, }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
