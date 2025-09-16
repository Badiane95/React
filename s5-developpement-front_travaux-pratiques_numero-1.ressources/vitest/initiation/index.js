// index.js

// Fonctions déjà présentes
const sum = (val1, val2) => {
    return val1 + val2;
};

const createUsers = (nbUsers) => {
    const minAge = 10;
    const maxAge = 65;
    const result = [];

    for (let index = 0; index < nbUsers; index++) {
        result.push({
            age: Math.floor(Math.random() * (maxAge - minAge + 1) + minAge),
        });
    }

    return result;
};

const reverseString = (str) => {
    return str.split("").reverse().join("");
};

// ✅ Fonction : vérifier si l'âge est adulte
const isAdult = (age) => {
    return age >= 18;
};

// ✅ Fonction : calculer la TVA à 5.5%
const calculateTva = (price) => {
    const tvaRate = 0.055;
    const priceWithTva = price * (1 + tvaRate);
    return Math.ceil(priceWithTva * 100) / 100;
};

// ✅ Fonction : saluer en fonction de la langue (norme ISO 639-1)
const greetUser = (langCode) => {
    const greetings = {
        fr: "Bonjour",
        en: "Hello",
        es: "Hola",
        de: "Hallo",
        it: "Ciao",
        jp: "こんにちは", // Konnichiwa
    };

    return greetings[langCode] || "Hello";
};

// ✅ Fonction : mettre un tableau de chaînes en majuscules
const toUpperCaseArray = (arr) => {
    return arr.map((str) => str.toUpperCase());
};

export {
    sum,
    reverseString,
    createUsers,
    isAdult,
    calculateTva,
    greetUser,
    toUpperCaseArray,
};
