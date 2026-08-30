import type { Project } from "~/types";

export default function useProject(projectId: string) {
  const { projects } = useProjects();

  const project = computed(() => projects.value.find((p: Project) => p.id === projectId));

  const updateProject = (updatedProject: Partial<Project>) => {
    if (!project.value) return;
    const index = projects.value.findIndex((p: Project) => p.id === projectId);
    if (index === -1) return;

    projects.value[index] = { ...projects.value, ...updatedProject, id: projectId };
  };
  return {
    project,
    updateProject,
  };
}
