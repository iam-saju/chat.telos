import { expect, test } from "@playwright/test";

test("chat skeleton renders", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /conversational intelligence/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /send message/i })).toBeVisible();
  await expect(page.getByText(/telos is ready for your next prompt/i)).toBeVisible();
});
