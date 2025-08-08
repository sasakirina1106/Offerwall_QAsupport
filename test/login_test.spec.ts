import { test } from '@playwright/test';
test('OW画面のスクショを撮る', async ({ page }) => {
await page.goto('https://ow.stg.skyflag.jp/');
await page.screenshot({path: '/Users/rina.e.sasaki/Desktop/login_firefox.png', fullPage: true
});
});