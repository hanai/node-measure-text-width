const puppeteer = require("puppeteer");

const memorize = (func) => {
  const memorized = async (...args) => {
    const key = args.join(";");
    const cache = memorized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = await func(...args);
      cache.set(key, result);
      return result;
    }
  };
  memorized.cache = new Map();
  return memorized;
};

const measureTextWidth = async (text, font) => {
  if (text == null || text === "") {
    return 0;
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const width = await page.evaluate(
    (text, font) => {
      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext("2d");
      ctx.font = font;
      return ctx.measureText(text).width;
    },
    text,
    font
  );

  await browser.close();

  return width;
};

module.exports = memorize(measureTextWidth);
