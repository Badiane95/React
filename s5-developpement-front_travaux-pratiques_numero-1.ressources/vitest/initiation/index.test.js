import { describe, it, expect } from "vitest";
import {
    isAdult,
    calculateTva,
    greetUser,
    toUpperCaseArray,
} from "./index.js";

// 🔹 Tests pour isAdult
describe("isAdult", () => {
    it("should return true for ages 18 and over", () => {
        expect(isAdult(18)).toBe(true);
        expect(isAdult(30)).toBe(true);
    });

    it("should return false for ages under 18", () => {
        expect(isAdult(17)).toBe(false);
        expect(isAdult(5)).toBe(false);
    });
});

// 🔹 Tests pour calculateTva
describe("calculateTva", () => {
    it("should calculate 5.5% VAT and round up to 2 decimals", () => {
        expect(calculateTva(65)).toBe(68.58);
        expect(calculateTva(100)).toBe(105.5);
        expect(calculateTva(1)).toBe(1.06); // 1.055
    });
});

// 🔹 Tests pour greetUser
describe("greetUser", () => {
    it("should return correct greeting based on ISO 639-1 code", () => {
        expect(greetUser("fr")).toBe("Bonjour");
        expect(greetUser("en")).toBe("Hello");
        expect(greetUser("es")).toBe("Hola");
        expect(greetUser("de")).toBe("Hallo");
        expect(greetUser("it")).toBe("Ciao");
        expect(greetUser("jp")).toBe("こんにちは");
    });

    it("should default to Hello if language is not supported", () => {
        expect(greetUser("xx")).toBe("Hello");
    });
});

// 🔹 Tests pour toUpperCaseArray
describe("toUpperCaseArray", () => {
    it("should convert all strings in array to uppercase", () => {
        const input = ["bonjour", "hello", "hola"];
        const expected = ["BONJOUR", "HELLO", "HOLA"];
        expect(toUpperCaseArray(input)).toEqual(expected);
    });

    it("should handle empty array", () => {
        expect(toUpperCaseArray([])).toEqual([]);
    });
});
