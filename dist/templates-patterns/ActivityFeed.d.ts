import React from 'react';
interface ActivityItemData {
    id: number;
    author: string;
    action: string;
    timestamp: Date;
}
interface ActivityFeedProps {
    items: ActivityItemData[];
    title: string;
}
/**
 * @wizard
 * @name ActivityFeed
 * @description Displays a chronological list of recent activities or changes, typically with a timeline indicator.
 * @tags templates, patterns, feed, timeline, data-display
 * @category templates-patterns
 */
export declare const ActivityFeed: React.FC<ActivityFeedProps>;
export {};
