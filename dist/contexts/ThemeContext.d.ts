import { default as React } from 'react';

export type ThemeName = 'light' | 'dark' | 'corporate' | 'midnight' | 'blueprint';
export declare const availableThemes: ThemeName[];
interface ThemeContextType {
    theme: ThemeName;
    availableThemes: ThemeName[];
    setTheme: (themeName: ThemeName) => void;
    borderRadius: string;
    setBorderRadius: (radius: string) => void;
    fontSize: string;
    setFontSize: (size: string) => void;
}
export declare const ThemeProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useTheme: () => ThemeContextType;
export {};
