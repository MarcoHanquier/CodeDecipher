import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vigenere',
  templateUrl: './vigenere.component.html',
  styleUrls: ['./vigenere.component.css'],
})
export class VigenereComponent implements OnInit {
  constructor() {}

  baseText = '';
  baseTextArray = [];
  baseKey = '';
  updatedKeyIndex = 0;
  updatedKey = '';
  updatedBaseText = '';
  decryptedText = '';
  alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  createKey() {
    // this.baseText = this.baseText.toLowerCase();
    // this.updatedKey = this.updatedKey.toLowerCase();
    // let baseKeyArray = this.baseKey.split("");
    // console.log(baseKeyArray);
    // baseKeyArray.replace()
    // for (let i=0; i< this.baseKey.length; i++) {
    // if (baseKeyArray[i] != " " && baseKeyArray[i] != "-" && baseKeyArray[i] != "." && baseKeyArray[i] != "," && baseKeyArray[i] != "'") { //Gestion de la ponctuation
    //   this.updatedKey = this.updatedKey + baseKeyArray[i];
    //   console.log("coucou");
    //   // console.log(baseKeyArray[i]);
    // }
    // }
    // console.log("key : " + this.updatedKey);
  }

  decryptText() {
    let keyLetterIndex = 0;
    let decryptedLetter = '';
    let decryptedLetterIndex = 0;
    this.decryptedText = '';
    this.updatedKey = this.baseKey.replace(/[^a-zA-Z]+/g, '');
    this.updatedBaseText = this.baseText.replace(/[^a-zA-Z]+/g, '').toLowerCase();
    this.updatedKey = this.updatedKey.toLowerCase();
    let baseTextArray = this.baseText.split('');
    let updatedTextArray = this.updatedBaseText.split('');
    let updatedKeyArray = this.updatedKey.split('');
    let updatedKeyIndex = 0;
    let keyIndex = 0;

    for (let i = 0; i < this.baseText.length; i++) {
      if (baseTextArray[i] == "'") {
        this.decryptedText = this.decryptedText + "'";
      } else if (baseTextArray[i] == ' ') {
        this.decryptedText = this.decryptedText + ' ';
      } else if (baseTextArray[i] == '.') {
        this.decryptedText = this.decryptedText + '.';
      } else if (baseTextArray[i] == ',') {
        this.decryptedText = this.decryptedText + ',';
      } else if (baseTextArray[i] == '-') {
        this.decryptedText = this.decryptedText + '-';
      } else {
        let cryptedLetterIndex = this.alphabet.indexOf(updatedTextArray[updatedKeyIndex]);

        if (keyIndex > this.updatedKey.length - 1) { // remets la valeur de l'index de la clé à 0 pour la répéter si elle est plus petite que le texte à décrypter
          keyIndex = 0;
        }
          keyLetterIndex = this.alphabet.indexOf(updatedKeyArray[keyIndex]); // récupère l'index de la lettre correspondante de la clé

        if (cryptedLetterIndex - keyLetterIndex < 0) {
          //revient à la fin de l'alphabet en cas de valeur négative
          cryptedLetterIndex = Math.abs(cryptedLetterIndex - keyLetterIndex);
          decryptedLetter = this.alphabet[26 - cryptedLetterIndex];
        } else {
          decryptedLetterIndex = cryptedLetterIndex - keyLetterIndex;
  
          decryptedLetter = this.alphabet[decryptedLetterIndex];
        }
  
        this.decryptedText = this.decryptedText + decryptedLetter;
  
        updatedKeyIndex++;
        keyIndex++;
      }

      
    }

    return this.decryptedText;
  }

  encryptText() {
    let keyLetterIndex = 0;
    let decryptedLetter = '';
    let decryptedLetterIndex = 0;
    this.decryptedText = '';
    this.updatedKey = this.baseKey.replace(/[^a-zA-Z]+/g, '');
    this.updatedBaseText = this.baseText.replace(/[^a-zA-Z]+/g, '').toLowerCase();
    this.updatedKey = this.updatedKey.toLowerCase();
    let baseTextArray = this.baseText.split('');
    let updatedTextArray = this.updatedBaseText.split('');
    let updatedKeyArray = this.updatedKey.split('');
    let updatedKeyIndex = 0;
    let keyIndex = 0;

    for (let i = 0; i < this.baseText.length; i++) {
      if (baseTextArray[i] == "'") {
        this.decryptedText = this.decryptedText + "'";
      } else if (baseTextArray[i] == ' ') {
        this.decryptedText = this.decryptedText + ' ';
      } else if (baseTextArray[i] == '.') {
        this.decryptedText = this.decryptedText + '.';
      } else if (baseTextArray[i] == ',') {
        this.decryptedText = this.decryptedText + ',';
      } else if (baseTextArray[i] == '-') {
        this.decryptedText = this.decryptedText + '-';
      } else {
        let cryptedLetterIndex = this.alphabet.indexOf(updatedTextArray[updatedKeyIndex]);

        if (keyIndex > this.updatedKey.length - 1) { // remets la valeur de l'index de la clé à 0 pour la répéter si elle est plus petite que le texte à décrypter
          keyIndex = 0;
        }
          keyLetterIndex = this.alphabet.indexOf(updatedKeyArray[keyIndex]); // récupère l'index de la lettre correspondante de la clé

        if (cryptedLetterIndex + keyLetterIndex > 25) {
          //revient à la fin de l'alphabet en cas de valeur négative
          cryptedLetterIndex = (cryptedLetterIndex + keyLetterIndex) -26;
          decryptedLetter = this.alphabet[0 + cryptedLetterIndex];
        } else {
          decryptedLetterIndex = cryptedLetterIndex + keyLetterIndex;
  
          decryptedLetter = this.alphabet[decryptedLetterIndex];
        }
  
        this.decryptedText = this.decryptedText + decryptedLetter;
  
        updatedKeyIndex++;
        keyIndex++;
      }

      
    }

    return this.decryptedText;
  }

  ngOnInit(): void {}
}
