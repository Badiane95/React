import { test, expect } from "@playwright/test";

test("Soumission du formulaire local", async ({ page }) => {
  
  await page.goto("/");

  
  await page.locator('input[name="username"]').fill("Jean Dupont");
  await page.locator('input[name="email"]').fill("jean.dupont@example.com");
  await page.locator('select[name="role"]').selectOption("admin");


  await page.locator('button[type="submit"]').click();
  
  await expect(page.locator(".success-message")).toHaveText(/Formulaire soumis/);
});


