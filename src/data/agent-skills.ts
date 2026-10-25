export const agentSkills = [
  {
    slug: 'clean-svelte-architecture',
    name: 'clean-svelte-architecture',
    description: {
      en: 'Clean Architecture patterns and practices for SvelteKit applications.',
      es: 'Patrones y prácticas de Clean Architecture para aplicaciones SvelteKit.',
    },
  },
  {
    slug: 'clean-backend-architecture',
    name: 'clean-backend-architecture',
    description: {
      en: 'Framework-agnostic architecture for APIs, workers, jobs, events, and CLIs.',
      es: 'Arquitectura independiente del framework para APIs, workers, jobs, eventos y CLIs.',
    },
  },
  {
    slug: 'clean-python',
    name: 'clean-python',
    description: {
      en: 'Python quality, tooling, testing, configuration, and application engineering.',
      es: 'Calidad, herramientas, testing, configuración e ingeniería de aplicaciones en Python.',
    },
  },
  {
    slug: 'prompt-optimizer',
    name: 'prompt-optimizer',
    description: {
      en: 'Improve prompts, agent instructions, and other LLM-facing text.',
      es: 'Mejorá prompts, instrucciones para agentes y otros textos dirigidos a LLMs.',
    },
  },
  {
    slug: 'clean-code',
    name: 'clean-code',
    description: {
      en: 'Principles for readable, maintainable, and testable software.',
      es: 'Principios para escribir software legible, mantenible y fácil de probar.',
    },
  },
  {
    slug: 'cognitive-writing',
    name: 'cognitive-writing',
    description: {
      en: 'Write clear, focused documentation and content that is easier to understand.',
      es: 'Escribí documentación y contenido claro, enfocado y fácil de comprender.',
    },
  },
];

export const agentSkillsRepository = 'https://github.com/GabrielMartinMoran/skills';

export function skillInstallCommand(slug: string): string {
  return `npx skills add ${agentSkillsRepository} --skill ${slug}`;
}
