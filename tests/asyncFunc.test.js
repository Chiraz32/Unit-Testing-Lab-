import { expect ,describe,it} from 'vitest';
import {fetchRandomUser} from "../src/asyncFunc";

describe('fetchRandomUser()', () => {
    it('should fetch data of a random user', async () => {
        try {
            const user = await fetchRandomUser();
            expect(user).toBeDefined();
            expect(typeof user).toBe('object');
            expect(user).toHaveProperty('gender');
            expect(user).toHaveProperty('name');
            expect(user).toHaveProperty('email');
            expect(user).toHaveProperty('location');
            expect(user).toHaveProperty('login');
        } catch (error) {
            fail('Should not throw any error');
        }
    });
});