import { default as React } from 'react';

export interface ActivityItemData {
    id: string | number;
    author: {
        name: string;
        avatarUrl?: string;
    };
    action: string;
    timestamp: Date;
}
export interface ActivityFeedProps {
    items: ActivityItemData[];
    title?: string;
    changelogUrl?: string;
}
/**
 * @wizard
 * @name ActivityFeed
 * @description Displays a chronological list of recent activities, typically with a timeline indicator.
 * @tags templates, patterns, feed, timeline, data-display
 * @props
 * - name: items
 * type: ActivityItemData[]
 * description: An array of activity items to display in the feed.
 * - name: title
 * type: string
 * description: An optional title for the activity feed card.
 * default: "Activity Feed"
 * - name: changelogUrl
 * type: string
 * description: An optional URL for a "View changelog" link.
 * @category templates-patterns
 */
export declare const ActivityFeed: React.FC<ActivityFeedProps>;
