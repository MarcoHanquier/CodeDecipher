import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atbash',
  templateUrl: './atbash.component.html',
  styleUrls: ['./atbash.component.css']
})
export class AtbashComponent implements OnInit {

  constructor() { }


  caesarValue = 0;
  encrdyptedText = "";
  reversedText = "";
  baseText = "";
  alphabet = ["a", "b","c", "d","e", "f","g", "h","i", "j","k", "l","m", "n","o", "p","q", "r","s", "t","u", "v","w", "x","y", "z",];
  reversedAlphabet = ["z", "y","x", "w","v", "u","t", "s","r", "q","p", "o","n", "m","l", "k","j", "i","h", "g","f", "e","d", "c","b", "a",];

  reverseText(){
    this.reversedText=""
    let decryptedLetter = "";
    this.baseText = this.baseText.toLowerCase();
     let baseTextArray = this.baseText.split("");
     
    for (let i=0; i< this.baseText.length; i++) {
      let letterIndex = this.alphabet.indexOf(baseTextArray[i]);

if (baseTextArray[i] == " ") {
  decryptedLetter = " ";
} else if (baseTextArray[i] == "-") {
  decryptedLetter = "-";
} else if (baseTextArray[i] == ".") {
  decryptedLetter = ".";
} else if (baseTextArray[i] == ",") {
  decryptedLetter = ",";
} else if (baseTextArray[i] == "'") {
  decryptedLetter = "'";
} else {

  decryptedLetter = this.reversedAlphabet[letterIndex];
}
      this.reversedText = this.reversedText + decryptedLetter;
    }    
    return this.reversedText;
  }


  ngOnInit(): void {
  }

}
