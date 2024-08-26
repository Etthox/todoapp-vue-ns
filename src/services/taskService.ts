import { ref } from 'vue';
import { ObservableArray, Utils } from '@nativescript/core';

export class Task {
  title: string;
  completed: boolean;

  constructor(title: string, completed = false) {
    this.title = title;
    this.completed = completed;
  }
}

export const tasks = ref(new ObservableArray<Task>());

export function addTask(title: string) {
  if (title.trim() !== '') {
    const newTask = new Task(title.trim());
    tasks.value.push(newTask);
  } else {
    console.log('O título da tarefa não pode estar vazio.');
  }
}

export function toggleTaskCompletion(task: Task, completed: boolean) {
  task.completed = completed;
}

export function deleteTask(task: Task) {
  const index = tasks.value.indexOf(task);
  if (index > -1) {
    tasks.value.splice(index, 1);
    showToast(`Task ${task.title} excluída`);
  } else {
    console.error('Task não encontrada para exclusão');
  }
}

// Função utilitária para mostrar um Toast
function showToast(message: string) {
  const context = Utils.android.getApplicationContext();
  if (context) {
    const toast = android.widget.Toast.makeText(context, message, android.widget.Toast.LENGTH_LONG);
    toast.show();
  } else {
    console.error("Contexto da aplicação não encontrado.");
  }
}
