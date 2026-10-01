import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  starting: any;
  ending: any;
  total: string = '';
  add() {
    this.total = "";
    if (!this.starting || !this.ending) {
      this.total = "enter both the inputs";
      return
    }
    if (Number(this.starting) > Number(this.ending)) {
      this.total = "check the number";
      console.log(this.starting, this.ending, "-----22")
      return
    }
    for (let i = 0; i <= this.ending; i++) {

      if (i % this.starting === 0) {
        this.total += i * this.starting + ',';
        console.log(i * this.starting, "22")
      }
      else {
        this.total += i + ',';
        console.log(i, "26")
      }
    }
  }
  printNumber: any;
  result: string = '';
  numprint() {
    this.result = '';

    let number = String(this.printNumber).split('');

    let line1 = '';
    let line2 = '';
    let line3 = '';
    let line4 = '';
    let line5 = '';
    let line6 = '';
    let line7 = '';

    if (!this.printNumber) {
      this.result = "enter input";
      return;
    }

    for (let i = 0; i < number.length; i++) {

      if (number[i] == '0') {

        line1 += '0000   ';
        line2 += '0  0   ';
        line3 += '0  0   ';
        line4 += '0  0   ';
        line5 += '0  0   ';
        line6 += '0  0   ';
        line7 += '0000   ';

      }

      else if (number[i] == '1') {

        line1 += '  1    ';
        line2 += ' 11    ';
        line3 += '1 1    ';
        line4 += '  1    ';
        line5 += '  1    ';
        line6 += '  1    ';
        line7 += '1111   ';
      }

      else if (number[i] == '2') {

        line1 += '2222   ';
        line2 += '   2   ';
        line3 += '   2   ';
        line4 += '2222   ';
        line5 += '2      ';
        line6 += '2      ';
        line7 += '2222   ';
      }

      else if (number[i] == '3') {

        line1 += '3333   ';
        line2 += '   3   ';
        line3 += '   3   ';
        line4 += '3333   ';
        line5 += '   3   ';
        line6 += '   3   ';
        line7 += '3333   ';
      }

      else if (number[i] == '4') {

        line1 += '4  4   ';
        line2 += '4  4   ';
        line3 += '4  4   ';
        line4 += '4444   ';
        line5 += '   4   ';
        line6 += '   4   ';
        line7 += '   4   ';
      }

      else if (number[i] == '5') {

        line1 += '5555   ';
        line2 += '5      ';
        line3 += '5      ';
        line4 += '5555   ';
        line5 += '   5   ';
        line6 += '   5   ';
        line7 += '5555   ';
      }

      else if (number[i] == '6') {

        line1 += '6666   ';
        line2 += '6      ';
        line3 += '6      ';
        line4 += '6666   ';
        line5 += '6  6   ';
        line6 += '6  6   ';
        line7 += '6666   ';
      }

      else if (number[i] == '7') {

        line1 += '7777   ';
        line2 += '   7   ';
        line3 += '   7   ';
        line4 += '  7    ';
        line5 += '  7    ';
        line6 += ' 7     ';
        line7 += ' 7     ';
      }

      else if (number[i] == '8') {

        line1 += '8888   ';
        line2 += '8  8   ';
        line3 += '8  8   ';
        line4 += '8888   ';
        line5 += '8  8   ';
        line6 += '8  8   ';
        line7 += '8888   ';
      }

      else if (number[i] == '9') {

        line1 += '9999   ';
        line2 += '9  9   ';
        line3 += '9  9   ';
        line4 += '9999   ';
        line5 += '   9   ';
        line6 += '   9   ';
        line7 += '9999   ';
      }

      else {
        this.result = "invalid number";
        return;
      }
    }

    this.result =
      line1 + '\n' +
      line2 + '\n' +
      line3 + '\n' +
      line4 + '\n' +
      line5 + '\n' +
      line6 + '\n' +
      line7;
  }

  
}
