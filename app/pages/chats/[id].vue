<script setup lang="ts">
const route = useRoute();
const { chat: chatFromChats, messages, sendMessage } = useChat(route.params.id as string);
if (!chatFromChats.value) {
  await navigateTo("/", { replace: true });
}

// reset chat value to ensure reactivity
const chat = computed(() => chatFromChats.value);

const typing = ref(false);

const handleSendMessage = async (content: string) => {
  typing.value = true;
  await sendMessage(content);
  typing.value = false;
};

useHead({
  title: chatFromChats.value?.title || "Chat",
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
