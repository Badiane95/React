// @ts-check
import path from "path";
import { test, expect } from "@playwright/test";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test("Should visit one news on university's website", async ({ page }) => {
  await page.goto("https://www.cyu.fr/");

  const firstLink = page.locator(".news-card a").first();

  const firstLinkHref = await firstLink.getAttribute("href");
  
  await firstLink.click();
  await expect(page).toHaveURL(firstLinkHref);
  


test("Recherche sur Wikipédia", async ({ page }) => {

  await page.goto("https://fr.wikipedia.org/wiki/D%C3%A9mographie_de_la_France");

  await page.locator("#searchInput").fill("OpenAI");
 
  await page.locator("#searchButton").click();

  await expect(page).toHaveURL(/OpenAI/);
  await expect(page.locator("#firstHeading")).toHaveText("OpenAI");
});

// https://playwright.dev/docs/api/class-locator#locator-fill

});
