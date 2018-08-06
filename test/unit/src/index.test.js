import { expect } from 'chai';

import createReadOnlyPlugin from '../../../src/index';

const plugin = createReadOnlyPlugin();
const hooks = plugin.hooks;
const hookFor = (eventName) => (hook) => hook.event === eventName;
const assertHandlerThrows = (handler) => expect(handler.bind(null)).to.throw('Only reading is allowed.');

describe('Read-only plugin', () => {
    context('for setItem, before adapter sets the item', () => {
        it('should throw', () => {
            const preSetItemHandler = hooks.find(hookFor('preSetItem')).handler;

            assertHandlerThrows(preSetItemHandler);
        });
    });

    context('for addExtra, before adapter adds anything to extra', () => {
        it('should throw', () => {
            const preAddExtraHandler = hooks.find(hookFor('preAddExtra')).handler;

            assertHandlerThrows(preAddExtraHandler);
        });
    });

    context('for setExtra, before adapter sets anything in extra', () => {
        it('should throw', () => {
            const preSetExtraHandler = hooks.find(hookFor('preSetExtra')).handler;

            assertHandlerThrows(preSetExtraHandler);
        });
    });

    context('for removeItem, before adapter removes the item', () => {
        it('should throw', () => {
            const preRemoveItemHandler = hooks.find(hookFor('preRemoveItem')).handler;

            assertHandlerThrows(preRemoveItemHandler);
        });
    });
});
