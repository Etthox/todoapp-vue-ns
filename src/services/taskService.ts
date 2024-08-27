// stores/taskStore.ts
import { Utils } from '@nativescript/core';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export class Task {
  title: string;
  completed: boolean;

  constructor(title: string, completed = false) {
    this.title = title;
    this.completed = completed;
  }
}

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref<Task[]>([]);

  function addTask(title: string) {
    if (title.trim() !== '') {
      const newTask = new Task(title.trim());
      tasks.value.push(newTask);
    } else {
      console.log('O título da tarefa não pode estar vazio.');
    }
  }

  function toggleTaskCompletion(task: Task, completed: boolean) {
    task.completed = completed;
  }

  function deleteTask(task: Task) {
    const index = tasks.value.indexOf(task);
    if (index > -1) {
      tasks.value.splice(index, 1);
      showToast(`Task ${task.title} excluída`);
    } else {
      console.error('Task não encontrada para exclusão');
    }
  }

  function showToast(message: string) {
    const context = Utils.android.getApplicationContext();
    if (context) {
      const toast = android.widget.Toast.makeText(context, message, android.widget.Toast.LENGTH_LONG);
      toast.show();
    } else {
      console.error("Contexto da aplicação não encontrado.");
    }
  }

  return {
    tasks,
    addTask,
    toggleTaskCompletion,
    deleteTask,
  };
});
