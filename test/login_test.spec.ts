import { test } from '@playwright/test';
test('OWを検索してスクショを撮る', async ({ page }) => {
await page.goto('https://ow.stg.skyflag.jp/');
await page.screenshot({path: '/Users/rina.e.sasaki/Desktop/login_firefox.png', fullPage: true
});
});