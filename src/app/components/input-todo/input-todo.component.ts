import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Model } from '../Model';

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.css']
})


export class InputTodoComponent implements OnInit {
  title: string;
  desc: string;
  constructor() {
    this.title = "";
    this.desc = "";
  }
  @Output() addNote: EventEmitter<Model> = new EventEmitter();
  ngOnInit(): void {
  }
  OnSubmit() {
    if (!(this.title == "" && this.desc == "")) {
      const todo = {
        sr_no: 1,
        title: this.title,
        desc: this.desc,
        active: true
      }
      this.addNote.emit(todo);
      this.title = "";
      this.desc = "";
    }
  }
}
