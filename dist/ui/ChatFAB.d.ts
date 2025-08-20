import { default as React } from 'react';

export interface ChatFABProps {
    onClick: () => void;
    className?: string;
    tooltipContent?: string;
}
/**
 * @wizard
 * @name ChatFAB
 * @description A floating action button (FAB) specifically for opening a chat interface, with a tooltip and icon.
 * @tags ui, button, chat, fab, ai
 * @props
 * - name: onClick
 * type: () => void
 * description: Function to call when the button is clicked.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling.
 * - name: tooltipContent
 * type: string
 * description: The text content for the button's tooltip.
 * default: 'Open AI Assistant'
 * @category ui
 */
export declare const ChatFAB: React.FC<ChatFABProps>;
