const puppeteer=require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: false,});
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    await page.setViewport({width: 1800, height: 900});
    await page.focus('[jsname="vdLsw"]');
    await page.keyboard.type('qa engineering');
    await page.click('.FPdoLc .gNO89b');
    await page.waitForSelector('.LHJvCe #result-stats') 
    await page.screenshot({path:'screenshot.png'});
    await browser.close();
  })();