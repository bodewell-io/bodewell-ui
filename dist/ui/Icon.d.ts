import React from 'react';
import type { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
interface IconProps extends Omit<LucideProps, 'name'> {
    name: keyof typeof dynamicIconImports;
    className?: string;
}
export declare const Icon: React.NamedExoticComponent<IconProps>;
export {};
