/**
 * @wizard
 * @name ThemeProvider
 * @description Provides the global theme context to the application, enabling dynamic theme switching and persistence.
 * @tags context, theme, provider, global, utility
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The application's UI components that will consume the theme context.
 * @category utility
 */
import React from 'react';
export type ThemeName = 'light' | 'dark' | 'corporate' | 'midnight' | 'blueprint';
export declare const availableThemes: ThemeName[];
interface ThemeContextType {
    theme: ThemeName;
    availableThemes: ThemeName[];
    setTheme: (themeName: ThemeName) => void;
}
export declare const ThemeProvider: React.FC<{
    children: React.ReactNode;
}>;
/**
 * @wizard
 * @name useTheme
 * @description A React hook to access the current theme, available themes, and theme setter from the `ThemeProvider`.
 * @tags hook, theme, context, utility
 * @returns
 * - name: theme
 * type: ThemeName
 * description: The current active theme.
 * - name: availableThemes
 * type: ThemeName[]
 * description: An array of all theme names supported by the application.
 * - name: setTheme
 * type: (themeName: ThemeName) => void
 * description: A function to change the application's theme.
 * @category utility
 */
export declare const useTheme: () => ThemeContextType;
export {};
