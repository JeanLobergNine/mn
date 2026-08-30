<script setup lang="ts">
const route = useRoute();
const { chat, messages, sendMessage } = useChat(route.params.id as string);

const typing = ref(false);

const handleSendMessage = async (content: string) => {
  typing.value = true;
  await sendMessage(content);
  typing.value = false;
};

useHead({
  title: chat.value?.title || "Chat",
  htmlAttrs: {
    class: "my-really-cool-class",
  },
});
</script>

<template>
  <UContainer class="page-container">
    <h1>Chat Page</h1>
    <ChatWindow :messages :chat :typing @send-message="handleSendMessage" />
  </UContainer>
</template>
