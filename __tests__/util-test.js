import {generateUniqueId} from '../lib/util';

describe('util', () => {
  describe('generateUniqueId', () => {
    it('must stick to the zipkin trace id contract', () => {
      for (let i = 0; i < 500; i++) {
        const id = generateUniqueId();
        expect(id).toMatch(/^[0-9a-f]{16}$/i);
      }
    });
  });
});
