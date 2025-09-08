import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconName } from './Icon';

declare const buttonVariants: (props?: ({
    variant?: "link" | "ghost" | "primary" | "danger" | "outline" | "secondary" | "accent" | null | undefined;
    size?: "sm" | "md" | "lg" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
    iconLeft?: IconName;
    iconRight?: IconName;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
