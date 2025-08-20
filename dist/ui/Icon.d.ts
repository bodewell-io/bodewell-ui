import { default as React } from 'react';
import { LucideProps } from 'lucide-react';
import { default as dynamicIconImports } from 'lucide-react/dynamicIconImports';

interface IconProps extends Omit<LucideProps, 'name'> {
    name: keyof typeof dynamicIconImports;
    className?: string;
}
export declare const Icon: React.NamedExoticComponent<IconProps>;
export {};
