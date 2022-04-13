export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1.split(" ");
    this.line2 = line2.split(" ");
    this.line3 = line3.split(" ");
    this.vowel = ['a','e','i','o','u','y'];
  }

  singleVowelSyllable(line) {
    let syllableCount = 0;
      for (let i = 0; i < this[line].length; i++) {
        let vowelCount = 0;
        this[line][i].split("").forEach((letter, index) => {
          if(this.vowel.includes(letter)) {
            vowelCount++
          }
        });
        if(vowelCount === 1) {
          syllableCount++
        } 
    }
    return syllableCount;
  }

  vowelTeamSyllable(line) {
    let teamCount = 0;
    const vowelTeam = ['oa','oe','ie','ue','ea','ee','ai','ay'];
    for (let i = 0; i < this[line].length; i++) {
          teamCount += (this[line][i].match(/oa|oe|ie|ue|ea|ee|ai|ay/g)|| []).length;
    }
    return teamCount;
  }

  magicESyllable(line) {
    let magicCount = 0;
    for (let i = 0; i < this[line].length; i++) {
      for(let j = 0; j <this[line][i].length; j++){
        if (this[line][i][j] === "e" && 
        (!this.vowel.includes(this[line][i].slice(j-1,j))) && 
        this.vowel.includes(this[line][i].slice(j-2,j-1)) &&
        (!this[line][i].slice(j-3,j-1).match(/oa|oe|ie|ue|ea|ee|ai|ay/g))) {
          magicCount += 1;
        }
      }
    }
    return magicCount;
  }
}

/* 
haikus are not hard
I can make them up quickly
but i cant code it
*/
//inept
// inerrupt
//in-equality
//linear
//linen
//inline
//venice
//grease
//greece

//greenice
//
//even
//counting vowels each singular vowel is a syllable if has magic e subtract 1 from syllable

// if (this[line][i].slice(-1) === "e" && !this.vowel.includes(this[line][i].slice(-2,-1)) && this.vowel.includes(this[line][i].slice(-3,-2))
//if "string".match(VCE)

//vowelCount approach vowel = +1 magicE(unless index[2]for words.length >) 3 = -1 vowelPair = -1 diphthong = -1 

//cannon vowelCount = 2 syllableCount = 2
//venice vowelCount = 3 syllableCount = 2 magicE = -1 syllables
//pinecone vowelCount = 4 syllableCount = 2
//ice vowelCount = 2 syllable count = 1 magicE = -1
//icicle vowelCount = 3 syllableCount = 2 magicE = -1
//igloo 
//day 
//ewe
//bicycle
//acrylic
//gleaned
//cleaned
//cleaner
//healer


/*
word.match(REGEX for vowels).length = syllableCount
   syllableCount -= word.match(REGEX vowelPair).length;
   syllableCount -= magicE occurences


   for 1 
    if(vowels.includes(word[index]) && (!vowels.includes(word[index-1]))){

    }

    "string".match(REGEX vowels).length() - vowelTeamSyllable(string) - magicESyllable(string) = accurateSyllableCount

     this[line][i].split("").forEach((letter, index) => {
          if(this.vowel.includes(letter)) {
            if (isFirstLetter = false) {
              if (isMagicE = true) {
                count -= 1
              }
              if (isVowelTeam === true) {
                count -= 1
              }
            }
            count += 1
          }
        });
*/