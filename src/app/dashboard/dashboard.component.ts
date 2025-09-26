import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {NgClass, NgForOf,} from '@angular/common';
import { Task } from './models/task.model';
import {filter} from 'rxjs';


@Component({
  selector: 'app-dashboard',
  imports: [
    FormsModule,
    MatInput,
    NgForOf,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  tasks: Task[] = [];
  newTitle: string = '';
  newDescription: string = '';



  addTask(): void {
    if (!this.newTitle.trim()) return;

    const newTask: Task = {
      id:Date.now(),
      title: this.newTitle.trim(),
      description: this.newDescription.trim(),
      status:"pending"
    };

    this.tasks.push(newTask);
    this.newTitle = '';
    this.newDescription = '';
  }
  deleteTaskByIndex(index:number): void {
    this.tasks.splice(index, 1);
  }

  get allTasksCount(): number {
    return this.tasks.length;
  }


  get pendingTasksCount(): number {
    return this.tasks.filter(task => task.status === 'pending').length;
  }

  get completedTasksCount(): number {
    return this.tasks.filter(task => task.status === 'completed').length;
  }


  toggleTaskStatusByIndex(index: number): void {
    if (this.tasks[index]) {
      this.tasks[index].status = this.tasks[index].status === 'pending' ? 'completed' : 'pending';
    }
  }

}
