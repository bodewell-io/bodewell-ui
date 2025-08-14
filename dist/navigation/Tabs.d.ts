import React from 'react';
export interface TabPanelProps {
    id: string;
    label: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}
/**
 * @wizard
 * @name TabPanel
 * @description Represents a single tab and its associated content panel within a `Tabs` component.
 * @tags navigation, ui, content
 * @props
 * - name: id
 * type: string
 * description: A unique identifier for this tab panel, used to link it to its header.
 * - name: label
 * type: string
 * description: The text label displayed on the tab header.
 * - name: children
 * type: React.ReactNode
 * description: The content to be displayed when this tab is active.
 * - name: icon
 * type: React.ReactNode
 * description: An optional icon to display next to the tab label in the header.
 * @category navigation
 */
export declare const TabPanel: React.FC<TabPanelProps>;
export interface TabsProps {
    children: React.ReactElement<TabPanelProps>[];
    defaultActiveTab?: string;
    className?: string;
}
/**
 * @wizard
 * @name Tabs
 * @description A navigation component that allows users to switch between different content panels within the same area.
 * @tags navigation, ui, content-switcher
 * @props
 * - name: children
 * type: React.ReactElement<TabPanelProps>[]
 * description: A collection of `TabPanel` components that define the tabs and their content.
 * - name: defaultActiveTab
 * type: string
 * description: The `id` of the tab that should be active by default when the component mounts.
 * - name: className
 * type: string
 * description: Additional CSS classes for custom styling of the tabs container.
 * @category navigation
 */
export declare const Tabs: React.FC<TabsProps>;
