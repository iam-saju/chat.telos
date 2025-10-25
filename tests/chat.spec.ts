import { expect, test } from '@playwright/test';

test.describe('Chat experience', () => {
  test('renders layout landmarks and initial messages', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('complementary', { name: /conversations/i })).toBeVisible();
    await expect(page.getByRole('navigation', { name: /breadcrumb/i })).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();

    await expect(page.getByRole('main')).toContainText('Sharing the first pass at the hero narrative.');
    await expect(page.getByRole('link', { name: /narrative draft/i })).toHaveAttribute(
      'href',
      'https://example.com/narrative-v1',
    );
  });

  test('supports selecting conversations and sending messages', async ({ page }) => {
    await page.goto('/');

    const approvalsButton = page.getByRole('button', { name: /stakeholder approvals/i });
    await approvalsButton.click();

    await expect(page.getByRole('main')).toContainText('Reviewing the approvals deck now.');

    const textbox = page.getByRole('textbox', { name: /type your message/i });
    await textbox.fill('Looking great! Adding final notes.');
    await page.keyboard.press('Enter');

    await expect(page.getByRole('main')).toContainText('Looking great! Adding final notes.');
  });
});
