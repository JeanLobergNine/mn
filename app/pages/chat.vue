<script setup lang="ts">
definePageMeta({
  layout: "secondary",
});

const { chat, messages, sendMessage } = useChat();

useHead({
  title: chat.value.title,
  htmlAttrs: {
    class: "my-really-cool-class",
  },
});
</script>

<template>
  <UContainer class="page-container">
    <h1>Chat Page</h1>
    <ChatWindow :messages :chat @send-message="sendMessage" />
  </UContainer>
</template>
