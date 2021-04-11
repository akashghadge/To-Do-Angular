import { Component, OnInit } from '@angular/core';
import { Model } from "../Model"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: Model[];
  localstirng: string;
  constructor() {
    this.localstirng = localStorage.getItem("to-do");
    if (this.localstirng == undefined || this.localstirng == null) {
      this.todos = [];
    } else {
      // console.log("hello");
      this.todos = JSON.parse(this.localstirng);
    }
  }
  ngOnInit(): void {
  }
  finalDelete(todo: Model) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log("!!!!!!! todo deleted succesfully !!!!!!!", todo);
    localStorage.setItem("to-do", JSON.stringify(this.todos));
  }
  finalAdd(todo: Model) {
    this.todos.push(todo);
    localStorage.setItem("to-do", JSON.stringify(this.todos));
    console.log("succefully added !!!");
  }
}
