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
 * @description A sliding panel that appears from the edge of the screen, used for additional content or forms.
 * @tags layout, modal, slide-in, ui
 * @category layout
 */
export declare const Drawer: React.FC<DrawerProps>;
