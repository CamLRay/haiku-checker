export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1.toLowerCase().split(" ");
    this.line2 = line2.toLowerCase().split(" ");
    this.line3 = line3.toLowerCase().split(" ");
    this.vowel = ['a','e','i','o','u','y'];
  }

  // singleVowelSyllable(line) {
  //   let syllableCount = 0;
  //   for (let i = 0; i < this[line].length; i++) {
  //     let vowelCount = 0;
  //     this[line][i].split("").forEach((letter) => {
  //       if(this.vowel.includes(letter)) {
  //         vowelCount++;
  //       }
  //     });
  //     if(vowelCount === 1) {
  //       syllableCount++;
  //     } 
  //   }
  //   return syllableCount;
  // }

  vowelCount(line) {
    let vowelCount = 0;
    for (let i = 0; i < this[line].length; i++) {
      this[line][i].split("").forEach((letter) => {
        if(this.vowel.includes(letter)) {
          vowelCount++;
        }
      });
      if(this[line][i][0] === "y") {
        vowelCount--;
      }
    }
    return vowelCount;
  }

  vowelTeamSyllable(line) {
    let teamCount = 0;
    for (let i = 0; i < this[line].length; i++) {
      teamCount += (this[line][i].match(/oa|oe|ie|ue|ea|ee|ai|ay|ey|ou|oo|oi/g)|| []).length;
    }
    return teamCount;
  }

  magicELoop(startingIndex, line, i) {
    let magicCount = 0;
    for(let j = startingIndex; j <this[line][i].length; j++){
      if (this[line][i][j] === "e" && 
      (!this.vowel.includes(this[line][i].slice(j-1,j))) && 
      this.vowel.includes(this[line][i].slice(j-2,j-1)) 
      ){
        magicCount += 1;
      } 
    }
    return magicCount;
  }

  magicESyllable(line) {
    let magicCount = 0;
    for (let i = 0; i < this[line].length; i++) {
      if(this[line][i].length <= 3){
        magicCount += this.magicELoop(0, line, i);
      } else if(this[line][i].length === 4 && this[line][i].endsWith("d")) {
        magicCount += this.magicELoop(0, line, i);
      } else {
        magicCount += this.magicELoop(3, line, i);
      }
    }
    return magicCount;
  }

  syllableTotals() {
    let syllableArray = [];
    for(let i = 1; i <=3; i++) {
      syllableArray.push(this.vowelCount("line" + i) - this.vowelTeamSyllable("line" + i) - this.magicESyllable("line" + i));
    }
    return syllableArray;
  }
}
