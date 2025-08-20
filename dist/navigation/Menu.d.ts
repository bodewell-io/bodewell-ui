import { default as React } from 'react';

/**
 * @wizard
 * @name MenuDivider
 * @description A visual separator for grouping MenuItems within a Menu.
 * @tags menu, navigation, ui
 * @category navigation
 */
declare const MenuDivider: React.FC;
/**
 * @wizard
 * @name MenuItem
 * @description An individual selectable item within a Menu component.
 * @tags menu, navigation, ui
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The content of the menu item (e.g., text label).
 * - name: onClick
 * type: () => void
 * description: Function to call when the menu item is clicked.
 * - name: disabled
 * type: boolean
 * description: If true, the menu item will be unclickable and styled as disabled.
 * - name: icon
 * type: React.ReactNode
 * description: An optional icon to display next to the menu item text.
 * @category navigation
 */
interface MenuItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
}
declare const MenuItem: React.FC<MenuItemProps>;
interface MenuProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}
/**
 * @wizard
 * @name Menu
 * @description A dropdown menu component, useful for navigation or contextual actions.
 * @tags navigation, dropdown, context, ui
 * @props
 * - name: trigger
 * type: React.ReactNode
 * description: The element that, when clicked or hovered, opens the menu (e.g., a Button).
 * - name: children
 * type: React.ReactNode
 * description: The content of the menu, typically MenuItem components.
 * - name: position
 * type: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
 * description: The position of the dropdown menu relative to the trigger.
 * default: 'bottom-right'
 * @category navigation
 */
declare const Menu: React.FC<MenuProps>;
export { Menu, MenuItem, MenuDivider };
