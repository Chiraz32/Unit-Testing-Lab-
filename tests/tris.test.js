import { test , expect } from 'vitest';
import {triCroissant} from "../src/tri";

test('Trier un tableau vide', () => {
    const tableauVide = [];
    const resultatObtenu = triCroissant(tableauVide);
    expect(resultatObtenu).toEqual(tableauVide);
    expect(resultatObtenu).toHaveLength(0);
});

test('Trier un tableau déjà trié par ordre croissant', () => {
    const tableauTrie = [1, 2, 3, 4, 5];
    const resultatObtenu = triCroissant(tableauTrie);
    expect(resultatObtenu).toEqual([1, 2, 3, 4, 5]);
    expect(resultatObtenu[0]).toEqual(tableauTrie[0]);
    expect(resultatObtenu).toHaveProperty('length', tableauTrie.length); // Vérifier une propriété spécifique du tableau trié

});

test('Trier un tableau inversé par ordre décroissant', () => {
    const tableauInverse = [ 5, 4, 3, 2, 1];
    const resultatObtenu = triCroissant(tableauInverse);
    expect(resultatObtenu).toEqual([ 1, 2, 3, 4, 5 ]);
    expect(resultatObtenu).not.toBe([ 5, 4, 3, 2, 1]);
    expect(resultatObtenu).toHaveProperty('length', tableauInverse.length); // Vérifier une propriété spécifique du tableau trié
});

test('Trier un tableau avec des nombres négatifs', () => {
    const tableauNegatif = [-3, -7, 5, 0, -2];
    const resultatObtenu = triCroissant(tableauNegatif);
    expect(resultatObtenu).toEqual([-7, -3, -2, 0, 5]); // Vérifier l'égalité profonde
    expect(resultatObtenu).toHaveProperty('length', tableauNegatif.length); // Vérifier une propriété spécifique du tableau trié
});

test('Trier un tableau avec des nombres décimaux', () => {
    const tableauDecimal = [3.14, 1.5, 2.7, 0.8];
    const resultatObtenu = triCroissant(tableauDecimal);
    expect(resultatObtenu).toHaveProperty('length', tableauDecimal.length);
    expect(resultatObtenu).toEqual([0.8, 1.5, 2.7, 3.14]);
});

