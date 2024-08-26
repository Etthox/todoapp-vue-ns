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
            <StackLayout v-for="(task, index) in tasks" :key="index" class="flex flex-row items-center justify-between p-4 bg-white rounded-md shadow">
              <Label :text="task.title" :class="task.completed ? 'line-through text-gray-500' : 'text-black'" class="task-title" />
              <Switch :checked="task.completed" @checkedChange="() => handleToggleTaskCompletion(task)" class="align-middle" />
              <Image src="~/assets/closed-trash.png" class="w-6 h-6 ml-auto mr-2" @tap="() => handleDeleteTask(task)" />
            </StackLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </Page>
  </Frame>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { tasks, addTask, toggleTaskCompletion, deleteTask, Task } from '../services/taskService';

// Estado reativo para o título da nova tarefa
const newTaskTitle = ref<string>('');

// Função para adicionar uma nova tarefa
function handleAddTask() {
  if (newTaskTitle.value.trim()) {
    addTask(newTaskTitle.value);
    newTaskTitle.value = ''; // Limpa o campo de input
  }
}

// Função para alternar o estado de conclusão de uma tarefa
function handleToggleTaskCompletion(task: Task) {
  toggleTaskCompletion(task, !task.completed);
}

// Função para deletar uma tarefa
function handleDeleteTask(task: Task) {
  deleteTask(task);
}

onMounted(() => {
  // Lógica adicional ao montar o componente, se necessário
});
</script>
