import { default as React } from 'react';

export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    position?: 'left' | 'right' | 'top' | 'bottom';
    size?: string;
    title?: string;
    className?: string;
    overlayDismiss?: boolean;
}
/**
 * @wizard
 * @name Drawer
 * @description A sliding panel that typically appears from the edge of the screen, used for additional content or forms.
 * @tags layout, modal, slide-in, ui
 * @props
 * - name: isOpen
 * type: boolean
 * description: Controls the visibility of the drawer.
 * - name: onClose
 * type: () => void
 * description: Callback function triggered when the drawer should close (e.g., on overlay click, escape key, or close button).
 * - name: children
 * type: React.ReactNode
 * description: The content to be displayed inside the drawer.
 * - name: position
 * type: 'left' | 'right' | 'top' | 'bottom'
 * description: The edge of the screen from which the drawer will slide in.
 * default: 'right'
 * - name: size
 * type: string
 * description: The width (for left/right) or height (for top/bottom) of the drawer (e.g., '50%', '400px').
 * default: '320px'
 * - name: title
 * type: string
 * description: An optional title displayed in the drawer's header.
 * - name: className
 * type: string
 * description: Additional CSS classes for custom styling of the drawer's content panel.
 * - name: overlayDismiss
 * type: boolean
 * description: If true, clicking outside the drawer (on the overlay) will close it.
 * default: true
 * @category layout
 */
export declare const Drawer: React.FC<DrawerProps>;
