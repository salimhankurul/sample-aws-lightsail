// run puppeteer on VC2 https://github.com/alixaxel/chrome-aws-lambda/issues/164#issuecomment-754621407
import puppeteer from 'puppeteer';
//@ts-ignore
import express from 'express';

const app = express()

app.get('/getData', async (req: any, res: any) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  })
  const page = await browser.newPage()
  await page.goto('https://www.binance.com/en/trade/BUSD_TRY?theme=dark&type=spot')

  const delta = await page.evaluate(() => {
    return document.querySelectorAll('#__APP > div.css-4pd5zw > div > div.css-1cpzhey > div > div > div.left > div > div.nowPrice > div.subPrice')[0].textContent
  })

  console.dir(delta)
  await browser.close()

  res.send(delta)
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
    