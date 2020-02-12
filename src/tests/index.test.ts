import { subscriber, bulkSubscriber } from '..';

const subscribeMock = jest.fn();

describe('messaging-utils', () => {
    beforeAll(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        global.ClearBlade.Messaging = () => ({
            subscribe: subscribeMock,
        });
    });
    beforeEach(() => {
        subscribeMock.mockReset();
    });
    it('subscriber', () => {
        subscriber('myTopic');
        expect(subscribeMock).toHaveBeenCalledTimes(1);
        expect(subscribeMock).toHaveBeenCalledWith('myTopic', expect.any(Function));
    });

    it('bulkSubscriber', () => {
        bulkSubscriber(['one', 'two', 'three']);
        expect(subscribeMock).toHaveBeenCalledTimes(3);
        expect(subscribeMock).toHaveBeenNthCalledWith(1, 'one', expect.any(Function));
        expect(subscribeMock).toHaveBeenNthCalledWith(2, 'two', expect.any(Function));
        expect(subscribeMock).toHaveBeenNthCalledWith(3, 'three', expect.any(Function));
    });
});
