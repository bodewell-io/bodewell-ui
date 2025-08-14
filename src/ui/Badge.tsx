import React from 'react';

// Define the component's variants and props
const badgeVariants = {
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  danger: 'bg-danger text-danger-foreground',
  success: 'bg-green-500 text-white',
  outline: 'text-foreground border border-border',

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
export const Badge = ({
  children,
  variant = 'primary',
  className = '',
}: BadgeProps) => {
  const baseClasses = 'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold';
  const variantClasses = badgeVariants[variant];

  return <span className={`${baseClasses} ${variantClasses} ${className}`}>{children}</span>;
};