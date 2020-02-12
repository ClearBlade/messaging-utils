import './static/promise-polyfill/index.js';
export declare function subscriber(topic: string): Promise<unknown>;
export declare function bulkSubscriber(topics: string[]): Promise<unknown>;
