export class HaikuGenerator {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.database = {fiveSyllables: ["oh, give me a break!", "the truth is out there", "we are not alone", "have you tried the pie?", "old habits die hard", "practice makes perfect", "what's in it for me?", "national interests", "live long and prosper", "you are what you eat", "enough is enough", "wardrobe malfunction", "something smells fishy", "I am your father!", "it's the next big thing", "Republican Guard", "the tribe has spoken", "there's always next year", "Serendipity.", "He had a big nose.", "officer on deck!", "people could get hurt", "I envy the dead", "it tastes like chicken", "there's no place like home", "cheap at twice the price!", "whichever comes first", "oh sure, you laugh now", "no one's laughing now", "all shall worship me", "and, it is written", "the party's over", "I am what I am", "I meant to do that", "take it or leave it", "is it Friday yet?", "follow the money", "yabba dabba do!", "for your protection", "what were you thinking?", "can you hear me now?", "film at eleven", "top of the food chain", "sitting in a tree", "You want a haiku?", "Illuminati", "Humiliation", "Unbelievable", "Abracadabra", "Photosynthesis", "it's free real estate", "I might know a guy", "thank you, come again", "soccer hooligans", "the book was better", "let the Wookie win", "home of the Whopper", "story of my life", "it's the thought that counts"],
      sevenSyllables: ["some assembly required", "it's a small world after all", "we have the technology", "all the good ones are taken", "oversimplification", "mutual understanding","if you build it, they will come", "elephants never forget", "do I look fat in this dress?", "no talking about Fight Club", "anesthesiologist", "digital photography", "I can stop at any time", "Eddie Shore: old time hockey", "irresponsibility", "I WILL turn this car around!", "license and registration", "what's the problem, officer?", "no shirt - no shoes - no service", "is that a word? it is now", "like sand through the hourglass", "so are the days of our lives", "that's against my religion", "Communist propaganda", "where are your manners, young man?!", "the other side of the tracks", "a diamond is forever", "close enough for government work", "Elvis has left the building", "the splendor of my manhood", "that's what they always tell us", "homosexuality", "anatomically correct", "K-I-S-S-I-N-G", "salary negotiable", "domestic tranquility", "if you break it, you own it", "viewer discretion advised", "I'll be your server today", "I'll alert the media", "reading is fundamental", "Fort Collins, Colorado", "a triumph of marketing", "G. I. Joe with kung foo grip!"]};
  }
  buildHaikuFirst() {
    let index = Math.floor(Math.random()*this.database.fiveSyllables.length-1);
    this.line1 = this.database.fiveSyllables[index];
    return index;
  }

  buildHaikuSecond() {
    let index = Math.floor(Math.random()*this.database.sevenSyllables.length-1);
    this.line2 = this.database.sevenSyllables[index];
    return index;
  }

  buildHaikuThird() {
    let index = Math.floor(Math.random()*this.database.fiveSyllables.length-1);
    this.line3 = this.database.fiveSyllables[index];
    return index;
  }
}