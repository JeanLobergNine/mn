<script setup lang="ts">
const appConfig = useAppConfig();

const { createChat } = useChats();
function handleCreateChat() {
  createChat();
}
</script>

<template>
  <UContainer class="page-container">
    <h1>{{ appConfig.title }}</h1>
    <UButton @click="handleCreateChat"> Create Chat </UButton>
  </UContainer>
</template>
