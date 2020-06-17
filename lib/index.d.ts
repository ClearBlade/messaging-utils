import '@clearblade/promise-polyfill';
export declare function subscriber(topic: string): Promise<unknown>;
export declare function bulkSubscriber(topics: string[]): Promise<unknown>;
