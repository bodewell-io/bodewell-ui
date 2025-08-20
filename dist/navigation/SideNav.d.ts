import { default as React } from 'react';

export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}
interface SideNavProps {
    navItems: NavItem[];
    sectionIds: string[];
    className?: string;
}
/**
 * @wizard
 * @name SideNav
 * @description A sticky side navigation component, ideal for documentation sites or complex applications, with support for nested links and scroll-spy.
 * @tags navigation, layout, ui, menu
 * @props
 * - name: navItems
 * type: NavItem[]
 * description: An array of navigation item objects, defining the structure of the side navigation menu.
 * - name: sectionIds
 * type: string[]
 * description: An array of HTML element IDs that the scroll-spy should observe to highlight active navigation items.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling of the side navigation container.
 * @category navigation
 */
export declare const SideNav: React.FC<SideNavProps>;
export {};
