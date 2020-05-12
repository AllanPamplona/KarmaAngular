import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanService {

  constructor() { }

  convert(number){
    if (isNaN(number))
      return;
    var digits = String(+number).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
              "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
              "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }
}
