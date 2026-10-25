export const projects = [
  {
    slug: 'mind',
    number: '01',
    name: 'Mind',
    eyebrow: {
      en: 'MEMORY FOR AI WORKFLOWS',
      es: 'MEMORIA PARA FLUJOS DE IA',
    },
    summary: {
      en: 'A local memory layer that helps AI tools retain decisions, lessons, and context across sessions.',
      es: 'Una capa de memoria local para que las herramientas de IA conserven decisiones, aprendizajes y contexto entre sesiones.',
    },
    description: {
      en: 'Mind stores the context that would otherwise disappear at the end of a session: decisions, fixes, patterns, and summaries. It organizes that knowledge into spaces so you can find it, review it, and pick up where you left off.',
      es: 'Mind guarda el contexto que normalmente se pierde cuando termina una sesión: decisiones, arreglos, patrones y resúmenes. Lo organiza en espacios para que puedas volver a encontrarlo, revisarlo y retomar el trabajo.',
    },
    details: [
      {
        title: {
          en: 'One place for durable context',
          es: 'Un mismo lugar para el contexto',
        },
        text: {
          en: 'A local SQLite database brings memories, tags, links, and checkpoints together. Your data stays on your machine and under your control.',
          es: 'Una base SQLite local reúne recuerdos, etiquetas, enlaces y checkpoints. Los datos quedan en tu máquina y bajo tu control.',
        },
      },
      {
        title: {
          en: 'Built for agent workflows',
          es: 'Hecho para flujos con agentes',
        },
        text: {
          en: 'Use Mind through the CLI, MCP server, HTTP API, or web UI. Each interface works with the same source of truth.',
          es: 'Usá Mind desde la CLI, el servidor MCP, la API HTTP o la interfaz web. Todas las interfaces usan la misma fuente de verdad.',
        },
      },
      {
        title: {
          en: 'Resume work without starting over',
          es: 'Retomá el trabajo sin empezar de cero',
        },
        text: {
          en: 'Checkpoints and session summaries help restore what was happening and identify the next step.',
          es: 'Los checkpoints y resúmenes de sesión ayudan a recuperar qué estaba pasando y cuál era el siguiente paso.',
        },
      },
    ],
    stack: ['Bun', 'TypeScript', 'SQLite', 'MCP'],
    url: 'https://github.com/GabrielMartinMoran/mind',
    accent: 'mind',
    mark: '◉',
  },
  {
    slug: 'pulsar-agent-squad',
    number: '02',
    name: 'Pulsar Agent Squad',
    eyebrow: {
      en: 'A LIGHTWEIGHT SOFTWARE DEVELOPMENT HARNESS',
      es: 'UN ARNÉS LIVIANO PARA DESARROLLO',
    },
    summary: {
      en: 'A lightweight harness that coordinates agents to move fast with clear boundaries, explicit approval, and verification.',
      es: 'Un harness liviano que coordina agentes para avanzar rápido, con límites claros, aprobación explícita y verificación.',
    },
    description: {
      en: 'Pulsar Agent Squad (PAS) organizes software work around bounded contracts and atomic tasks. A strong Lead handles planning, approvals, and adjudication; lightweight agents research, implement, and verify. PAS also adds living documentation and durable project context that can resume across sessions.',
      es: 'Pulsar Agent Squad (PAS) organiza el trabajo de desarrollo con contratos acotados y tareas atómicas. Un Lead fuerte se ocupa de planificar, gestionar aprobaciones y adjudicar resultados; agentes livianos investigan, implementan y verifican. PAS también suma documentación viva y contexto persistente para retomar el trabajo entre sesiones.',
    },
    details: [
      {
        title: {
          en: 'One Lead, focused workers',
          es: 'Un Lead, workers enfocados',
        },
        text: {
          en: 'The Lead coordinates the workflow and makes control-plane decisions. Researcher, Developer, and QA handle research, implementation, and verification.',
          es: 'El Lead coordina el flujo y toma decisiones de control. Researcher, Developer y QA investigan, implementan y verifican.',
        },
      },
      {
        title: {
          en: 'Approval scoped to each task',
          es: 'Aprobaciones acotadas a cada tarea',
        },
        text: {
          en: 'No source change starts without explicit approval. Each approval covers the agreed scope and cannot authorize later expansion.',
          es: 'Ningún cambio de código empieza sin aprobación explícita. La autorización cubre el alcance acordado y no permite ampliarlo después.',
        },
      },
      {
        title: {
          en: 'Atomic delivery, mandatory verification',
          es: 'Entrega atómica y verificación obligatoria',
        },
        text: {
          en: 'Each delegation defines scope, paths, and skills. QA returns a PASS, FAIL, or BLOCKED verdict for the Lead to review.',
          es: 'Cada delegación define alcance, rutas y skills. QA devuelve un resultado PASS, FAIL o BLOCKED que el Lead revisa.',
        },
      },
    ],
    stack: ['Bun', 'TypeScript', 'Gherkin', 'OpenCode', 'Mind'],
    url: 'https://github.com/GabrielMartinMoran/pulsar-agent-squad',
    accent: 'pulsar',
    mark: '✦',
  },
];
