<template>
  <Frame>
    <Page class="bg-gray-100">
      <ActionBar title="Todo App" class="bg-blue-800 text-white" />

      <ScrollView>
        <StackLayout class="p-4 space-y-4">
          <!-- Input e botão para criar nova tarefa -->
          <StackLayout class="flex flex-row space-x-2 bg-white p-4 shadow rounded-md">
            <TextField 
              v-model="newTaskTitle" 
              hint="Digite a tarefa..." 
              class="flex-1 p-2 border border-gray-300 rounded"
            />
            <Button text="Criar" @tap="handleAddTask" class="bg-blue-400 text-white p-2 rounded" />
          </StackLayout>

          <!-- Lista de tarefas -->
          <StackLayout class="space-y-4">
            <GridLayout v-for="(task, index) in tasks" :key="index" columns="*, auto, auto" class="p-4 bg-white rounded-md shadow">
              <!-- Título da tarefa -->
              <Label :text="task.title" :class="task.completed ? 'line-through text-gray-500' : 'text-black'" class="task-title" col="0" />
              
              <!-- Switch para completar tarefa -->
              <Switch :checked="task.completed" @checkedChange="() => handleToggleTaskCompletion(task)" col="1" />

              <!-- Ícone de lixo -->
              <Image src="~/assets/closed-trash.png" class="w-6 h-6 ml-4" @tap="() => handleDeleteTask(task)" col="2" />
            </GridLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </Page>
  </Frame> 
</template>


<script lang="ts" setup>
import { ref, computed } from 'vue';
import { Task, useTaskStore } from '../services/taskService';

// Pegando o store
const taskStore = useTaskStore();

// Estado reativo para o título da nova tarefa
const newTaskTitle = ref<string>('');

// Computed para a lista de tarefas
const tasks = computed(() => taskStore.tasks);

// Função para adicionar uma nova tarefa
function handleAddTask() {
    taskStore.addTask(newTaskTitle.value);
    newTaskTitle.value = ''; // Limpa o campo de input
}

// Função para alternar o estado de conclusão de uma tarefas
function handleToggleTaskCompletion(task: Task) {
  taskStore.toggleTaskCompletion(task, !task.completed);
}

// Função para deletar uma tarefa
function handleDeleteTask(task: Task) {
  taskStore.deleteTask(task);
}
</script>
