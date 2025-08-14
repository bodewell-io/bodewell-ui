import React from 'react';
interface BreadcrumbItemProps {
    label: React.ReactNode;
    to?: string;
    isCurrent?: boolean;
    className?: string;
    icon?: React.ReactNode;
}
/**
 * @wizard
 * @name BreadcrumbItem
 * @description Represents a single step or link within a `Breadcrumbs` navigation path.
 * @tags navigation, ui, link
 * @props
 * - name: label
 * type: React.ReactNode
 * description: The text or content displayed for this breadcrumb item.
 * - name: to
 * type: string
 * description: The URL path for this item to navigate to. If not provided, it's just text.
 * - name: isCurrent
 * type: boolean
 * description: If true, indicates this is the current page and will not be a clickable link.
 * - name: icon
 * type: React.ReactNode
 * description: An optional icon to display next to the breadcrumb label.
 * - name: className
 * type: string
 * description: Additional CSS classes for custom styling of the individual item.
 * @category navigation
 */
declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;
interface BreadcrumbsProps {
    children: React.ReactElement<BreadcrumbItemProps>[];
    className?: string;
}
/**
 * @wizard
 * @name Breadcrumbs
 * @description A navigation component that shows the user's current location within a hierarchy of pages.
 * @tags navigation, ui, path
 * @props
 * - name: children
 * type: React.ReactElement<BreadcrumbItemProps>[]
 * description: A collection of `BreadcrumbItem` components representing the path.
 * - name: className
 * type: string
 * description: Additional CSS classes for custom styling of the breadcrumbs container.
 * @category navigation
 */
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export { Breadcrumbs, BreadcrumbItem };
