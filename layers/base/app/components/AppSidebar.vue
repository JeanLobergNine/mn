<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();
defineProps<{
  isOpen: boolean;
}>();
const { projects, createProject } = useProjects();
const { chats, createChatAndNavigate, chatsInProject } = useChats();

const chatsWithoutProject = computed(() =>
  chats.value.filter((chat: Chat) => chat.projectId === undefined),
);

function isCurrentProject(projectId: string) {
  return route.params.projectId === projectId;
}

const chatInCurrentProject = computed(() => chatsInProject(route.params.projectId as string));

function formatProjectChat(project: Project, chat: Chat): NavigationMenuItem {
  return {
    label: chat.title || "Untitled Chat",
    to: `/projects/${project.id}/chats/${chat.id}`,
    active: route.params.id === chat.id,
  };
}

function formatProjectItem(project: Project): NavigationMenuItem {
  const isCurrent = isCurrentProject(project.id);
  const baseItem: NavigationMenuItem = {
    label: project.name,
    to: `/projects/${project.id}`,
    active: isCurrent,
    defaultOpen: isCurrent,
  };

  if (isCurrent) {
    return {
      ...baseItem,
      children: chatInCurrentProject.value.map((chat: Chat) => formatProjectChat(project, chat)),
    };
  }

  return baseItem;
}

function filterChats(startDays: number, endDays?: number) {
  return computed(() => {
    return filterChatsByDateRange(chatsWithoutProject.value, startDays, endDays).map(
      formatChatItem,
    );
  });
}

const projectItems = computed<NavigationMenuItem[]>(
  () => projects.value.map(formatProjectItem) || [],
);

async function handleCreateProject() {
  const newProject = await createProject();

  await createChatAndNavigate({ projectId: newProject.id });
}

const lastWeekChats = filterChats(1, 7);
const lastMonthChats = filterChats(7, 30);
const olderChats = filterChats(30);

function formatChatItem(chat: Chat): NavigationMenuItem {
  return {
    label: chat.title,
    to: `/chats/${chat.id}`,
    active: route.params.id === chat.id,
  };
}

async function handleCreateChat() {
  await createChatAndNavigate();
}
</script>

<template>
  <aside
    class="fixed top-16 left-0 bottom-0 w-64 transition-transform duration-300 z-40 bg-(--ui-bg-muted) border-r-(--ui-border) border-r"
    :class="{ '-translate-x-full': !isOpen }"
  >
    <div
      v-if="projectItems.length > 0"
      class="mb-4 overflow-auto p-4 border-b border-(--ui-border)"
    >
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-sm font-semibold text-(--ui-text-muted)">Today</h2>
      </div>
      <UNavigationMenu
        orientation="vertical"
        class="w-full mb-4"
        :items="projectItems"
        default-open
      />
      <UButton
        class="mt-2 w-full"
        color="neutral"
        variant="soft"
        icon="i-heroicons-plus-small"
        @click="handleCreateProject"
      >
        Create New Project
      </UButton>
    </div>

    <div v-if="lastWeekChats.length > 0" class="mb-4">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-sm font-semibold text-(--ui-text-muted)">lastWeekChats</h2>
      </div>
      <UNavigationMenu
        orientation="vertical"
        class="w-full mb-4"
        :items="lastWeekChats"
        default-open
      />
    </div>
    <div v-if="lastMonthChats.length > 0" class="mb-4">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-sm font-semibold text-(--ui-text-muted)">lastMonthChats</h2>
      </div>
      <UNavigationMenu
        orientation="vertical"
        class="w-full mb-4"
        :items="lastMonthChats"
        default-open
      />
    </div>
    <div v-if="olderChats.length > 0" class="mb-4">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-sm font-semibold text-(--ui-text-muted)">olderChats</h2>
      </div>
      <UNavigationMenu
        orientation="vertical"
        class="w-full mb-4"
        :items="olderChats"
        default-open
      />
    </div>

    <div v-else class="overflow-y-auto p-4">
      <UAlert
        title="No Chats"
        description="You have no chats without a project."
        color="neutral"
        variant="soft"
        class="mt-2"
      />
      <UButton
        class="mt-2 w-full"
        color="neutral"
        variant="soft"
        icon="i-heroicons-plus-small"
        @click="handleCreateChat"
      >
        Create New Chat
      </UButton>
    </div>
  </aside>
</template>
