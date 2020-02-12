# Overview

This repository contains a few messaging utilities for that provide promises around subscribing and bulk subscribing. TODO: add publish utilities.

# Installation

`npm i --save @clearblade/messaging-utils`

# Usage

```
import { subscriber, bulkSubscriber } from '@clearblade/messaging-utils';

subscriber('myTopic').then(() => {
    // subscribed
}).catch((e) => {
    // error while subscribing
})

bulkSubscriber(['one', 'two']).then(() => {
    // subscribed to all topics
}).catch((e) => {
    // error while subscribing
})
```
