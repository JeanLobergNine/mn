<script setup lang="ts">
const appConfig = useAppConfig();
const { createChat } = useChats();
function handleCreateChat() {
  createChat();
}
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
      <UButton icon="i-lucide-menu" color="primary" variant="ghost" />
      <UButton icon="i-lucide-plus" @click="handleCreateChat"> Create chat </UButton>
    </template>

    <template #right>
      <div class="header-title">
        {{ appConfig.title }}
      </div>
      <UColorModeButton />
      <UButton
        to="https://github.com/MasteringNuxt/mastering-nuxt-full-stack-unleashed"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        variant="ghost"
      />
    </template>
  </UHeader>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem; /* 16 * 0.25 = 4rem */
  background-color: var(--ui-bg-muted);
  border-bottom: 1px solid var(--ui-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  z-index: 50;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-title {
  font-size: 1.125rem;
  font-weight: 600;
}
</style>
