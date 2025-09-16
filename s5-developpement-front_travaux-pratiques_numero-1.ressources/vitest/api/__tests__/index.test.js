import { vi, describe, it, expect } from "vitest";

import { getNationalHolidays } from "../src/index";
import { fetchNationalHolidays } from "../src/api";

vi.mock("../src/api.js");

// Simulate the data expected from backend
const mockedData = {
    "2028-01-01": "1er janvier",
    "2028-04-17": "Lundi de Pâques",
    "2028-05-01": "1er mai",
    "2028-05-08": "8 mai",
    "2028-05-25": "Ascension",
    "2028-06-05": "Lundi de Pentecôte",
    "2028-07-14": "14 juillet",
};

vi.mocked(fetchNationalHolidays).mockResolvedValue(mockedData);

describe("List national holidays metropole", () => {
    it("returns an array", async () => {
        const res = await getNationalHolidays();

        expect(Array.isArray(res)).toBeTruthy();
    });

    it("returns an array of objects", async () => {
        const res = await getNationalHolidays();
        const listKeys = ["name", "date"];

        listKeys.forEach((keyExpected) => {
            expect(res[0]).toHaveProperty(keyExpected);
        });
    });

    it("returns objects with string values", async () => {
        const res = await getNationalHolidays();

        res.forEach((holiday) => {
            expect(typeof holiday.name).toBe("string");
            expect(typeof holiday.date).toBe("string");
        });
    });

    it("calls the mocked fetchNationalHolidays method", async () => {
        await getNationalHolidays();

        expect(fetchNationalHolidays).toHaveBeenCalled();
    });
});
export async function fetchAutoEcoles() {
    const res = await fetch(
      "https://api.gouv.fr/some-endpoint/auto-ecoles" // <-- remplacer par l'URL JSON exacte
    );
  
    if (!res.ok) {
      throw new Error("Erreur lors de la récupération des auto-écoles");
    }
  
    const data = await res.json();
  
    // Transformation : on garde uniquement le nom et la commune
    return data.map((ecole) => ({
      name: ecole.nom,
      city: ecole.commune,
    }));
  }
  

