import { Component, OnInit } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tasksList: Array<string> = [];
  doneTasksList: Array<string> = [];

  ngOnInit(): void {

    this.tasksList = ['Sprzatanie kuwety', 'Nauka angulara', 'Podlewanie kwiatkow', 'Zakupy'];
  }

  add(task: string) {
    this.tasksList.push(task);
  }

  markAsDone(task: string) {

    this.doneTasksList.push(task);
    this.remove(task);

  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

  // inputText = 'Tekst';
  // maxLength = 5;
  // colorClass = 'color';
  // logoUrl = '';

  // isDisabled = true;

  // constructor() {

  //   setTimeout(() => {
  //     this.isDisabled = false;
  //   }, 3000);

  // }


  // change() {

  //   this.inputText = 'Zmiana tekstu i koloru';
  //   this.maxLength = 10;
  //   this.colorClass = 'color2';
  //   this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  // }

}
