import { Haiku } from "../src/js/haiku.js";
describe("Haiku", () => {
  test("should construct a haiku object with three arrays", () => {
    let haiku = new Haiku(
      "Haikus are easy",
      "But sometimes they don't make sense",
      "Refrigerator."
    );
    expect(haiku.line1).toEqual(["haikus", "are", "easy"]);
    expect(haiku.line2).toEqual(["but", "sometimes", "they", "don't", "make", "sense"]);
    expect(haiku.line3).toEqual(["refrigerator."]);
  });

  test("should recognize words with a single vowel team as single syllables", () => {
    let haiku = new Haiku("cat toe mail boy", "chex", "sometimes");
    expect(haiku.vowelTeamSyllable("line1")).toEqual(2);
    expect(haiku.vowelTeamSyllable("line2")).toEqual(0);
    expect(haiku.vowelTeamSyllable("line3")).toEqual(0);
  });

  test("should recognize words with multiple vowel teams as seperate syllables", () => {
    let haiku = new Haiku("chainmail toe boat boy", "chex", "sometimes");
    expect(haiku.vowelTeamSyllable("line1")).toEqual(4);
    expect(haiku.vowelTeamSyllable("line2")).toEqual(0);
    expect(haiku.vowelTeamSyllable("line3")).toEqual(0);
  });

  test("should count words with the 'VCe' structure as one syllable", () => {
    let haiku = new Haiku("baker pine bone", "pinecone", "iced");
    expect(haiku.magicESyllable("line1")).toEqual(3);
    expect(haiku.magicESyllable("line2")).toEqual(2);
    expect(haiku.magicESyllable("line3")).toEqual(1);
  });

  test("should count number of vowels", () => {
    let haiku = new Haiku("test", "new", "install");
    expect(haiku.vowelCount("line1")).toEqual(1);
    expect(haiku.vowelCount("line2")).toEqual(1);
    expect(haiku.vowelCount("line3")).toEqual(2);
  });

  test("should not count when y is the first letter", () => {
    let haiku = new Haiku("yoke", "yikes", "install");
    expect(haiku.vowelCount("line1")).toEqual(2);
    expect(haiku.vowelCount("line2")).toEqual(2);
    expect(haiku.vowelCount("line3")).toEqual(2);
  });

  test("should count number of syllables with exceptions adressed", () => {
    let haiku = new Haiku(
      "Haikus are easy",
      "But english is not easy",
      "I really hate this"
    );
    expect(haiku.syllableTotals()).toEqual([5, 7, 5]);
  })
});
