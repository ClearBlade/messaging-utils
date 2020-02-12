import './static/promise-polyfill/index.js';

export function subscriber(topic: string): Promise<unknown> {
    const messaging = ClearBlade.Messaging();
    const promise = new Promise(function(resolve, reject) {
        messaging.subscribe(topic, function(err, data) {
            if (err) {
                reject(new Error('Error with subscribing: ' + JSON.stringify(data)));
            } else {
                resolve(data);
            }
        });
    });
    return promise;
}

export function bulkSubscriber(topics: string[]): Promise<unknown> {
    return new Promise(function(resolve, reject) {
        Promise.all(
            topics.map(topic => {
                subscriber(topic);
            }),
        )
            .then(() => {
                resolve();
            })
            .catch(e => {
                log(`Subscription error: ${e.message}`);
                reject(new Error(e));
            });
        Promise.runQueue();
    });
}
