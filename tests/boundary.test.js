import { test , expect } from 'vitest';
import {isPriceInRange} from "../src/boundary";

test('Prix égal à la limite inférieure de la plage', () => {
    const price = 100;
    const min = 100;
    const max = 200;
    expect(isPriceInRange(price, min, max)).toBeTruthy(); // Utilisation de toBeTruthy pour vérifier si le résultat est vrai
});

test('Prix égal à la limite supérieure de la plage', () => {
    const price = 200;
    const min = 100;
    const max = 200;
    expect(isPriceInRange(price, min, max)).toBeTruthy(); // Utilisation de toBeTruthy pour vérifier si le résultat est vrai
});

test('Prix dans la plage', () => {
    const price = 150;
    const min = 100;
    const max = 200;
    expect(isPriceInRange(price, min, max)).toBeTruthy(); // Utilisation de toBeTruthy pour vérifier si le résultat est vrai
});

test('Prix inférieur à la limite inférieure de la plage', () => {
    const price = 50;
    const min = 100;
    const max = 200;
    expect(isPriceInRange(price, min, max)).toBeFalsy(); // Utilisation de toBeFalsy pour vérifier si le résultat est faux
});

test('Prix supérieur à la limite supérieure de la plage', () => {
    const price = 250;
    const min = 100;
    const max = 200;
    expect(isPriceInRange(price, min, max)).toBeFalsy(); // Utilisation de toBeFalsy pour vérifier si le résultat est faux
});

test('Prix égal à NaN', () => {
    const price = NaN;
    const min = 100;
    const max = 200;
    expect(isPriceInRange(price, min, max)).toBeFalsy(); // Utilisation de toBeFalsy pour vérifier si le résultat est faux
});

test('Prix null ou undefined', () => {
    const min = 100;
    const max = 200;
    expect(isPriceInRange(null, min, max)).toBeFalsy(); // Utilisation de toBeFalsy pour vérifier si le résultat est faux
    expect(isPriceInRange(undefined, min, max)).toBeFalsy(); // Utilisation de toBeFalsy pour vérifier si le résultat est faux
});
