import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.binance.com/en/trade/BUSD_TRY?theme=dark&type=spot');

  const delta = await page.evaluate(() => {
    return document.querySelectorAll("#__APP > div.css-4pd5zw > div > div.css-1cpzhey > div > div > div.left > div > div.nowPrice > div.subPrice")[0].textContent
  });

  console.dir(delta)
  await browser.close();
})();



