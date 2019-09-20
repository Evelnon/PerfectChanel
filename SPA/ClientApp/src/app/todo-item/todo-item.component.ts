import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.style.css']
})
export class TodoItemComponent {

  @Input() description: string;
  @Input() status: number;
  statusList: Array<string> = ["Pending", "Completed"];
     
}
