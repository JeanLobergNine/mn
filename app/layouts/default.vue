<script setup lang="ts"></script>

<template>
  <div class="layout-container">
    <AppHeader />
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout-container {
  background-color: var(--ui-bg);
}

.main-content {
  height: 100%;
}
</style>
