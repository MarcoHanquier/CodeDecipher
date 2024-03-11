import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-caesar',
  templateUrl: './caesar.component.html',
  styleUrls: ['./caesar.component.css']
})
export class CaesarComponent implements OnInit {
  
  constructor() { }

  caesarValue = 0;
  encryptedText = "";
  decryptedText = "";
  baseText = "";
  alphabet = ["a", "b","c", "d","e", "f","g", "h","i", "j","k", "l","m", "n","o", "p","q", "r","s", "t","u", "v","w", "x","y", "z",];

  decryptText(){
    this.decryptedText=""
    let decryptedLetter = "";
    this.baseText = this.baseText.toLowerCase();
     let baseTextArray = this.baseText.split("");
     
    for (let i=0; i< this.baseText.length; i++) {
      let letterIndex = this.alphabet.indexOf(baseTextArray[i]);

      if (baseTextArray[i] == " ") { //Gestion de la ponctuation
        decryptedLetter = " ";
      } else if (baseTextArray[i] == "-") {
        decryptedLetter = "-";
      } else if (baseTextArray[i] == ".") {
        decryptedLetter = ".";
      } else if (baseTextArray[i] == ",") {
        decryptedLetter = ",";
      } else if (baseTextArray[i] == "'") {
        decryptedLetter = "'";
      } else if (letterIndex-this.caesarValue < 0) { //revient à la fin de l'alphabet en cas de valeur négative
letterIndex = Math.abs(letterIndex-this.caesarValue);
decryptedLetter = this.alphabet[26-letterIndex];
} else {
  decryptedLetter = this.alphabet[letterIndex-this.caesarValue];
}
      this.decryptedText = this.decryptedText + decryptedLetter;
    }    
    return this.decryptedText;
  }

  encryptText(){
    this.decryptedText=""
    let decryptedLetter = "";
    this.baseText = this.baseText.toLowerCase();
     let baseTextArray = this.baseText.split("");
     
    for (let i=0; i< this.baseText.length; i++) {
      let letterIndex = this.alphabet.indexOf(baseTextArray[i]);

      if (baseTextArray[i] == " ") { //Gestion de la ponctuation
        decryptedLetter = " ";
      } else if (baseTextArray[i] == "-") {
        decryptedLetter = "-";
      } else if (baseTextArray[i] == ".") {
        decryptedLetter = ".";
      } else if (baseTextArray[i] == ",") {
        decryptedLetter = ",";
      } else if (baseTextArray[i] == "'") {
        decryptedLetter = "'";
      } else if (letterIndex+this.caesarValue > 25) { //revient au début de l'alphabet en cas de valeur supérieure à 25
        letterIndex = (letterIndex + this.caesarValue) -26;
decryptedLetter = this.alphabet[0+letterIndex];
} else {
  decryptedLetter = this.alphabet[letterIndex+this.caesarValue];
}
      this.decryptedText = this.decryptedText + decryptedLetter;
    }    
    return this.decryptedText;
  }

  lowerCaesarValue() {
    this.caesarValue = this.caesarValue - 1;
    if (this.caesarValue < 0) {
      this.caesarValue = 0;
    }
  }

  upCaesarValue() {
    this.caesarValue = this.caesarValue + 1;
    if (this.caesarValue > 26) {
      this.caesarValue = 26;
    }
  }

  updateCaesarValueInUI() {
    return this.caesarValue;
  }

  ngOnInit(): void {
  }

}
