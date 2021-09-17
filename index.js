const puppeteer = require("puppeteer");

const url = process.argv[2];

if (!url) {
  throw "Please provide a website url";
}

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto(url);

  await page.screenshot({ path: "screenshot.png" });

  browser.close();
}

run();