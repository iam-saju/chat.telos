import { expect, test } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 720 },
];

for (const viewport of viewports) {
  test(`antikythera chat theme · ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/antikythera-chat", { waitUntil: "networkidle" });
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(`antikythera-chat-${viewport.name}.png`, {
      fullPage: true,
    });
  });
}
