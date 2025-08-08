import { test　} from '@playwright/test';

test('リンクをクリックして遷移先のスクショを撮る', async ({ page }) => {
  // ① トップページにアクセス
  await page.goto('https://books.rakuten.co.jp/');

  // ② ログインボタンをクリック
   await page.click('li.header-nav__memberShip__list__button a');

  // ③ ログイン
   await page.fill('input[name="username"]', 'rinasasaki110612@gmail.com');

  // ② スクリーンショットを撮影
  await page.screenshot({ path: '/Users/rina.e.sasaki/Desktop/point1_firefox.png', fullPage: true });

  // ③ My Rakuten
  await page.goto('https://my.rakuten.co.jp/');

  // ④ スクリーンショットを撮影
  await page.screenshot({ path: '/Users/rina.e.sasaki/Desktop/point2_firefox.png', fullPage: true });

  // ⑤ Point Club
  await page.goto('https://point.rakuten.co.jp/history/?l-id=point_top_gadget_history_pc');

  // ⑥ スクリーンショットを撮影
  await page.screenshot({ path: '/Users/rina.e.sasaki/Desktop/point3_firefox.png', fullPage: true });

});