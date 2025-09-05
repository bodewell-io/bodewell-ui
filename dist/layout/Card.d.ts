import { HTMLAttributes, FC } from 'react';

/**
 * @wizard
 * @name Card
 * @description A versatile container that adapts to the current theme. Its background, border, and shape are themeable.
 * @tags layout, ui, container, box
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The content to be displayed inside the card.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling. Use this for adding padding, shadows, etc. (e.g., 'p-4 shadow-lg').
 * @category layout
 */
export declare const Card: FC<HTMLAttributes<HTMLDivElement>>;
