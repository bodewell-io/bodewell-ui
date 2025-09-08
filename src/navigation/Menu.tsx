// src/navigation/Menu.tsx

'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

/**
 * @wizard
 * @name MenuDivider
 * @description A visual separator for grouping MenuItems within a Menu.
 * @tags menu, navigation, ui
 * @category navigation
 */
const MenuDivider: React.FC = () => (
  <div className="my-1 h-px bg-border" role="separator" />
);

interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

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
const MenuItem: React.FC<MenuItemProps> = ({ children, onClick, disabled, icon }) => {
  // FIX: Refined padding and added rounded corners for a better hover effect.
  const baseStyles = 'flex items-center w-full text-left px-3 py-1.5 text-sm cursor-pointer transition-colors duration-150 ease-in-out whitespace-nowrap rounded-md';
  // FIX: Enhanced hover state with both background and text color changes.
  const themeStyles = 'hover:bg-accent hover:text-accent-foreground text-text';
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${themeStyles} ${disabled ? disabledStyles : ''}`}
      role="menuitem"
    >
      {/* FIX: Reduced icon size and margin for tighter alignment. */}
      {icon && <span className="mr-2 h-3.5 w-3.5 text-muted-foreground">{icon}</span>}
      {children}
    </button>
  );
};

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
const Menu: React.FC<MenuProps> = ({ trigger, children, position = 'bottom-right' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = window.setTimeout(() => setIsOpen(false), 150);
  };

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left': return 'top-full left-0 mt-1';
      case 'bottom-right': return 'top-full right-0 mt-1';
      case 'top-left': return 'bottom-full left-0 mb-1';
      case 'top-right': return 'bottom-full right-0 mb-1';
      default: return 'top-full right-0 mt-2';
    }
  };

  return (
    <div
      className="relative inline-block text-left"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div onClick={toggleMenu} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          className={`origin-top-right absolute z-50 rounded-md shadow-lg bg-card border border-border ring-1 ring-black ring-opacity-5 focus:outline-none min-w-[12rem] w-max ${getPositionClasses()}`}
          role="menu"
          aria-orientation="vertical"
        >
          {/* FIX: Reduced vertical padding from py-4 to py-2 for a tighter look. */}
          <div className="p-2" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export { Menu, MenuItem, MenuDivider };