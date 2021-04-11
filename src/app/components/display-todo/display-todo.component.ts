import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Model } from '../Model';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent implements OnInit {
  @Input() todos: Model;
  @Output() deleteEvent: EventEmitter<Model> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  deleteNote(todo: Model) {
    this.deleteEvent.emit(todo);
    // console.log(todo);
  }
}
