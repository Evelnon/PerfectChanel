import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItemService } from '../services/todo-item.service'

export interface TodoItem {
  description: string;
  todoId: string;
  status: number;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.style.css']
})
export class HomeComponent {

  taskList: TodoItem[];
  showAddTaskMenuStatus: boolean = true;
  descriptionText: string = "";

  private _taskServ: TodoItemService;

  constructor(private taskServ: TodoItemService) {
    this._taskServ = taskServ;
    this._taskServ.getTodoList().subscribe(
      (response: any) => {
        this.taskList = response;
      }, (error) => {
        console.log(error);
      });

  }

  showAddTaskMenu(): void {
    this.showAddTaskMenuStatus = !(this.showAddTaskMenuStatus);
  }

  saveTask(): void {
    const item: TodoItem = { description: this.descriptionText, todoId: "", status: 0 };
    this._taskServ.addTodo(item).subscribe(
      (dataResponse: any) => {
        this.taskList.push(dataResponse);
      }, (error) => {
        console.log(error);
      });
    this.finishTaskAction();
  }

  cancelSave(): void {
    this.finishTaskAction();
  }

  finishTaskAction() {
    this.showAddTaskMenuStatus = true;
    this.descriptionText = "";
  }

  updateTaskStatus(item: TodoItem) {
    this._taskServ.updateTodoStatus(item).subscribe((dataResponse) => {      
      this.taskList = this.taskList.filter(item => (item.todoId !== dataResponse.todoId));
      this.taskList.push(dataResponse);
    }, (error) => {
      console.log(error);
    });;
  }

  filter(group: number): TodoItem[] {
    if (this.taskList !== undefined && this.taskList.length > 0)
      return this.taskList.filter(item => (item.status == group));
  }

}

