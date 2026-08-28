<template>
  <div class="layout-container">
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout-container {
  background-color: var(--color-green-50);
}

.main-content {
  height: 100%;
}
</style>
