import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const badgeVariants: (props?: ({
    variant?: "outline" | "primary" | "danger" | "secondary" | "success" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
/**
 * @wizard
 * @name Badge
 * @description A small component to display a status, count, or label.
 * @tags ui, label, indicator
 * @props
 * - name: variant
 * type: "'primary' | 'secondary' | 'danger' | 'success' | 'outline'"
 * description: The visual style of the badge.
 * - name: children
 * type: React.ReactNode
 * description: The content to display inside the badge.
 * @category ui
 */
declare function Badge({ className, variant, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
