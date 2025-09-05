import { default as React } from 'react';
import { IconName } from '../ui/Icon';

export interface StatCardProps {
    title: string;
    value: string;
    icon: IconName;
    changeText?: string;
    changeDirection?: 'positive' | 'negative';
    footerText?: string;
    className?: string;
}
/**
 * @wizard
 * @name StatCard
 * @description A specialized card for prominently displaying a key statistic, including an icon and optional trend indicator.
 * @tags templates, data-display, metrics, dashboard, ui
 * @props
 * - name: title
 * type: string
 * description: The label for the displayed metric.
 * - name: value
 * type: string
 * description: The main value of the statistic.
 * - name: icon
 * type: IconName
 * description: The name of a Lucide icon to represent the metric.
 * - name: changeText
 * type: string
 * description: Text describing the change in the metric (e.g., '10% since last month').
 * - name: changeDirection
 * type: "'positive' | 'negative'"
 * description: The direction of change, which determines the color of the badge.
 * - name: footerText
 * type: string
 * description: Optional text displayed at the bottom of the card for context.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling.
 * @category templates-patterns
 */
export declare const StatCard: React.FC<StatCardProps>;
