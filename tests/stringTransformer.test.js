import { test , expect } from 'vitest';
import {transformer} from "../src/stringTransformer";

test('Transformer une chaîne vide', () => {
    const chaineVide = '';
    expect(transformer(chaineVide)).toBe(''); // Utilisation de toBe pour vérifier l'égalité stricte
    expect(transformer(chaineVide)).not.toBeNull(); // Utilisation de not.toBeNull pour vérifier que le résultat n'est pas null
    expect(transformer(chaineVide)).not.toBeUndefined(); // Utilisation de not.toBeUndefined pour vérifier que le résultat n'est pas undefined
});

test('Transformer une chaîne en minuscules en majuscules', () => {
    const chaineMinuscules = 'hello world';
    expect(transformer(chaineMinuscules)).toEqual('HELLO WORLD'); // Utilisation de toEqual pour vérifier l'égalité profonde
    expect(transformer(chaineMinuscules)).toMatch(/HELLO/); // Utilisation de toMatch pour vérifier qu'une partie de la chaîne est présente
});


test('Transformer une chaîne avec des caractères spéciaux', () => {
    const chaineSpeciale = 'éà$#@&!';
    expect(transformer(chaineSpeciale)).toBe('ÉÀ$#@&!'); // Utilisation de toBe pour vérifier l'égalité stricte
    expect(transformer(chaineSpeciale)).not.toBe('éà$#@&!'); // Utilisation de not.toBe pour vérifier l'inégalité stricte
});