import { HTMLAttributes, FC } from 'react';

/**
 * Props for the Card component.
 * Allows for customization of background, border, padding, and shadow.
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Custom Tailwind CSS class for the background.
     * @default 'bg-card'
     */
    background?: string;
    /**
     * Custom Tailwind CSS class for the border.
     * @default 'border border-border'
     */
    border?: string;
    /**
     * Custom Tailwind CSS class for padding.
     * @default undefined (no padding is applied by default)
     * @example 'p-4', 'p-6'
     */
    padding?: string;
    /**
     * Custom Tailwind CSS class for the box-shadow.
     * @default undefined (no shadow is applied by default)
     * @example 'shadow-md', 'shadow-lg'
     */
    shadow?: string;
}
/**
 * A flexible card component with customizable styles.
 * It serves as a container for content, adapting to the current theme
 * while allowing for style overrides via props.
 */
/**
 * @wizard
 * @name Card
 * @description A versatile container component with customizable background, border, padding, and shadow, adapting to the current theme.
 * @tags layout, ui, container, box
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The content to be displayed inside the card.
 * - name: background
 * type: string
 * description: Custom Tailwind CSS class for the card's background (e.g., 'bg-blue-100'). Overrides default.
 * default: 'bg-card'
 * - name: border
 * type: string
 * description: Custom Tailwind CSS class for the card's border (e.g., 'border-2 border-red-500'). Overrides default.
 * default: 'border border-border'
 * - name: padding
 * type: string
 * description: Custom Tailwind CSS class for the card's padding (e.g., 'p-4', 'px-6 py-4').
 * - name: shadow
 * type: string
 * description: Custom Tailwind CSS class for the card's box-shadow (e.g., 'shadow-md', 'shadow-lg').
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling of the card container.
 * @category layout
 */
export declare const Card: FC<CardProps>;
