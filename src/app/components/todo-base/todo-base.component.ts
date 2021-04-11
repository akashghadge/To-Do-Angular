import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Model } from '../Model';

@Component({
  selector: 'app-todo-base',
  templateUrl: './todo-base.component.html',
  styleUrls: ['./todo-base.component.css']
})
export class TodoBaseComponent implements OnInit {
  @Input() todo: Model;
  @Output() ToDoDelete: EventEmitter<Model> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  deleteToDo(todo: Model) {
    // console.log(todo + " is deleted");
    this.ToDoDelete.emit(todo);
  }
}
