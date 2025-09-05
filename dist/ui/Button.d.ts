import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconName } from './Icon';

declare const buttonVariants: (props?: ({
    variant?: "link" | "outline" | "ghost" | "primary" | "danger" | "secondary" | null | undefined;
    size?: "icon" | "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
    iconLeft?: IconName;
    iconRight?: IconName;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
