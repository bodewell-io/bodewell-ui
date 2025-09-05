import { default as React } from 'react';
import { LucideProps } from 'lucide-react';
import { default as dynamicIconImports } from 'lucide-react/dynamicIconImports';

export type IconName = keyof typeof dynamicIconImports;
interface IconProps extends Omit<LucideProps, 'name'> {
    name: IconName;
    className?: string;
}
export declare const Icon: React.NamedExoticComponent<IconProps>;
export {};
