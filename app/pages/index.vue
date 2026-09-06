<script setup lang="ts">
const appConfig = useAppConfig();

const { createChatAndNavigate } = useChats();
async function handleCreateChat() {
  await createChatAndNavigate();
}
</script>

<template>
  <UContainer class="page-container">
    <h1>{{ appConfig.title }}</h1>
    <UButton @click="handleCreateChat"> Create Chat </UButton>
  </UContainer>
</template>
