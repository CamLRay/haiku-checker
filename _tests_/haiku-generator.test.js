import { HaikuGenerator } from "../src/js/haiku-generator.js";

describe("Haiku Generator", () => {
  test("it should construct a Haiku Generator Object", () => {
    let randomHaiku = new HaikuGenerator("five syllable string", "seven syllable string", "another five syllable string");
    expect(randomHaiku.line1).toEqual("five syllable string");
    expect(randomHaiku.line2).toEqual("seven syllable string");
    expect(randomHaiku.line3).toEqual("another five syllable string");
  });

  test("it should generate random number in a range for the first line", () => {
    let randomHaiku = new HaikuGenerator();
    expect(randomHaiku.buildHaikuFirst()).toBeGreaterThan(-1);
    expect(randomHaiku.buildHaikuFirst()).toBeLessThan(randomHaiku.database.fiveSyllables.length);
  });

  test("it should select a random string from the five syllable array and assign it to line1", () => {
    let randomHaiku = new HaikuGenerator();
    let number = randomHaiku.buildHaikuFirst();
    expect(randomHaiku.database.fiveSyllables).toContain(randomHaiku.line1);
    expect(randomHaiku.line1).toEqual(randomHaiku.database.fiveSyllables[number]);
  });

  test("it should select a random string from the five syllable array and assign it to line1", () => {
    let randomHaiku = new HaikuGenerator();
    let number = randomHaiku.buildHaikuSecond();
    expect(randomHaiku.database.sevenSyllables).toContain(randomHaiku.line2);
    expect(randomHaiku.line2).toEqual(randomHaiku.database.sevenSyllables[number]);
  });

  test("it should select a random string from the five syllable array and assign it to line1", () => {
    let randomHaiku = new HaikuGenerator();
    let number = randomHaiku.buildHaikuThird();
    expect(randomHaiku.database.fiveSyllables).toContain(randomHaiku.line3);
    expect(randomHaiku.line3).toEqual(randomHaiku.database.fiveSyllables[number]);
  });
});