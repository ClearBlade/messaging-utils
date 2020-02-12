"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./static/promise-polyfill/index.js");
function subscriber(topic) {
    var messaging = ClearBlade.Messaging();
    var promise = new Promise(function (resolve, reject) {
        messaging.subscribe(topic, function (err, data) {
            if (err) {
                reject(new Error('Error with subscribing: ' + JSON.stringify(data)));
            }
            else {
                resolve(data);
            }
        });
    });
    return promise;
}
exports.subscriber = subscriber;
function bulkSubscriber(topics) {
    return new Promise(function (resolve, reject) {
        Promise.all(topics.map(function (topic) {
            subscriber(topic);
        }))
            .then(function () {
            resolve();
        })
            .catch(function (e) {
            log("Subscription error: " + e.message);
            reject(new Error(e));
        });
        Promise.runQueue();
    });
}
exports.bulkSubscriber = bulkSubscriber;
