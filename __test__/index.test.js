const measureTextWidth = require("../index");

test("measure text in English", async () => {
  const width1 = await measureTextWidth(
    "The quick brown fox jumps over the lazy dog.",
    "24px serif"
  );
  expect(typeof width1).toBe("number");
  expect(width1.toFixed(2)).toBe("444.56");

  const width2 = await measureTextWidth(
    "The quick brown fox jumps over the lazy dog.",
    "12px serif"
  );
  expect(typeof width2).toBe("number");
  expect(width2.toFixed(2)).toBe("222.28");
});

test("measure text in English", async () => {
  const width1 = await measureTextWidth(
    "落霞与孤鹜齐飞，秋水共长天一色。",
    "24px Noto Sans CJK SC"
  );
  expect(typeof width1).toBe("number");
  expect(width1.toFixed(2)).toBe("384.00");

  const width2 = await measureTextWidth(
    "落霞与孤鹜齐飞，秋水共长天一色。",
    "12px Noto Sans CJK SC"
  );
  expect(typeof width2).toBe("number");
  expect(width2.toFixed(2)).toBe("192.00");
});
