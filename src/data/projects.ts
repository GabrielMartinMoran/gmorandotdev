export type LocalizedText = { en: string; es: string };

export interface Project {
  slug: string;
  number: string;
  name: string;
  eyebrow: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
  details: { title: LocalizedText; text: LocalizedText }[];
  chapters: { title: LocalizedText; text: LocalizedText; points: LocalizedText[] }[];
  quickStart: {
    title: LocalizedText;
    intro: LocalizedText;
    requirements: LocalizedText[];
    commands: { label: LocalizedText; value: string }[];
  };
  stack: string[];
  url: string;
  accent: string;
  mark: string;
}

export const projects: Project[] = [
  {
    slug: 'mind',
    number: '01',
    name: 'Mind',
    eyebrow: {
      en: 'LOCAL MEMORY FOR AI WORKFLOWS',
      es: 'MEMORIA LOCAL PARA FLUJOS DE IA',
    },
    summary: {
      en: 'A local memory system that helps AI agents retain decisions, lessons, and project context across sessions.',
      es: 'Un sistema de memoria local para que los agentes de IA conserven decisiones, aprendizajes y contexto entre sesiones.',
    },
    description: {
      en: 'Mind gives AI workflows a durable place for the context that would otherwise disappear: decisions, bug fixes, patterns, checkpoints, and session summaries. A local SQLite store keeps that knowledge organized and available through the CLI, MCP server, HTTP API, and web UI.',
      es: 'Mind les da a los flujos con IA un lugar persistente para el contexto que de otro modo se perdería: decisiones, arreglos, patrones, checkpoints y resúmenes de sesión. Una base SQLite local organiza ese conocimiento y lo expone mediante CLI, servidor MCP, API HTTP e interfaz web.',
    },
    seoTitle: {
      en: 'Mind: Local AI Agent Memory | Gabriel Moran',
      es: 'Mind: memoria local para agentes de IA | Gabriel Moran',
    },
    seoDescription: {
      en: 'Mind is a local AI agent memory system built on SQLite. Save decisions, search project context, and resume work through CLI, MCP, HTTP API, and web UI.',
      es: 'Mind es un sistema local de memoria para agentes de IA basado en SQLite. Guarda decisiones, busca contexto y permite retomar tareas desde CLI, MCP, API HTTP e interfaz web.',
    },
    details: [
      {
        title: { en: 'One place for durable context', es: 'Un lugar para el contexto duradero' },
        text: {
          en: 'A local SQLite database brings memories, tags, links, and checkpoints together. The data stays on your machine and under your control.',
          es: 'Una base SQLite local reúne recuerdos, etiquetas, enlaces y checkpoints. Los datos quedan en tu máquina y bajo tu control.',
        },
      },
      {
        title: { en: 'Interfaces over one memory layer', es: 'Varias interfaces, una memoria' },
        text: {
          en: 'Use Mind through the CLI, MCP server, HTTP API, or web UI. Each interface works with the same local source of truth.',
          es: 'Usá Mind desde la CLI, el servidor MCP, la API HTTP o la interfaz web. Todas las interfaces usan la misma fuente de verdad local.',
        },
      },
      {
        title: { en: 'Resume work with checkpoints', es: 'Retomá el trabajo con checkpoints' },
        text: {
          en: 'Checkpoints and session summaries restore what was happening and make the next step easier to recover.',
          es: 'Los checkpoints y resúmenes de sesión recuperan qué estaba pasando y ayudan a encontrar el siguiente paso.',
        },
      },
    ],
    chapters: [
      {
        title: { en: 'A memory model you can inspect', es: 'Una memoria que podés inspeccionar' },
        text: {
          en: 'Mind organizes durable context into spaces, with named memories, tags, links, tiers, and pinned items. This structure keeps project knowledge understandable instead of turning it into an opaque chat transcript.',
          es: 'Mind organiza el contexto en espacios con recuerdos nombrados, etiquetas, enlaces, niveles y elementos fijados. Así, el conocimiento del proyecto sigue siendo legible y no queda enterrado en una transcripción de chat.',
        },
        points: [
          { en: 'Store decisions, bug fixes, patterns, and session summaries.', es: 'Guardá decisiones, arreglos, patrones y resúmenes de sesión.' },
          { en: 'Connect related memories with tags and directional links.', es: 'Conectá recuerdos relacionados con etiquetas y enlaces direccionales.' },
          { en: 'Use checkpoints to record a goal, pending work, and handoff notes.', es: 'Usá checkpoints para registrar objetivos, trabajo pendiente y notas de continuidad.' },
        ],
      },
      {
        title: { en: 'Local storage, shared interfaces', es: 'Datos locales, interfaces compartidas' },
        text: {
          en: 'Mind is a Bun and TypeScript application backed by one local SQLite database. Its CLI, MCP server, HTTP API, and web UI operate on that same store.',
          es: 'Mind es una aplicación de Bun y TypeScript respaldada por una base SQLite local. Su CLI, servidor MCP, API HTTP e interfaz web operan sobre esa misma base.',
        },
        points: [
          { en: 'Full-text search uses SQLite FTS5.', es: 'La búsqueda de texto completo usa SQLite FTS5.' },
          { en: 'Optional semantic search uses OpenAI embeddings and is off by default.', es: 'La búsqueda semántica opcional usa embeddings de OpenAI y viene desactivada.' },
          { en: 'Experimental autosync can mirror selected project spaces into versioned files.', es: 'La sincronización experimental puede reflejar espacios elegidos en archivos versionados.' },
        ],
      },
    ],
    quickStart: {
      title: { en: 'Install Mind', es: 'Instalá Mind' },
      intro: {
        en: 'The recommended installer sets up Mind in user-local paths without sudo. Bun 1.2 or later is required; the installer can add Bun if it is missing.',
        es: 'El instalador recomendado configura Mind en rutas del usuario, sin sudo. Requiere Bun 1.2 o posterior; si no está instalado, el instalador puede agregarlo.',
      },
      requirements: [
        { en: 'Bun 1.2 or later.', es: 'Bun 1.2 o posterior.' },
        { en: 'A local machine where Mind can store its SQLite database.', es: 'Una máquina local donde Mind pueda guardar su base SQLite.' },
      ],
      commands: [
        { label: { en: 'Install', es: 'Instalar' }, value: 'curl -fsSL https://raw.githubusercontent.com/GabrielMartinMoran/mind/main/scripts/install.sh | bash' },
        { label: { en: 'Create a project space', es: 'Crear un espacio de proyecto' }, value: 'mind create projects/my-project "My project"' },
        { label: { en: 'Save and find context', es: 'Guardar y buscar contexto' }, value: 'mind add projects/my-project architecture "CLI uses atomic modules"\nmind search architecture' },
      ],
    },
    stack: ['Bun', 'TypeScript', 'SQLite', 'MCP', 'FTS5'],
    url: 'https://github.com/GabrielMartinMoran/mind',
    accent: 'mind',
    mark: '◉',
  },
  {
    slug: 'pulsar-agent-squad',
    number: '02',
    name: 'Pulsar Agent Squad',
    eyebrow: {
      en: 'A SOFTWARE DEVELOPMENT HARNESS FOR AGENTS',
      es: 'UN HARNESS DE DESARROLLO PARA AGENTES',
    },
    summary: {
      en: 'A lightweight AI agent harness for software development, with scoped approvals, atomic tasks, and mandatory verification.',
      es: 'Un harness liviano de agentes de IA para desarrollo de software, con aprobaciones acotadas, tareas atómicas y verificación obligatoria.',
    },
    description: {
      en: 'Pulsar Agent Squad (PAS) coordinates software work through explicit approvals and closed task contracts. A Lead plans and adjudicates; focused agents research, implement, and verify. The harness keeps scope visible while living documentation and Mind checkpoints preserve project context across sessions.',
      es: 'Pulsar Agent Squad (PAS) coordina el trabajo de software con aprobaciones explícitas y contratos de tarea cerrados. Un Lead planifica y adjudica; agentes enfocados investigan, implementan y verifican. El harness mantiene visible el alcance, mientras la documentación viva y los checkpoints de Mind conservan el contexto entre sesiones.',
    },
    seoTitle: {
      en: 'Pulsar Agent Squad: AI Coding Agent Harness',
      es: 'Pulsar Agent Squad: harness para agentes de código',
    },
    seoDescription: {
      en: 'Pulsar Agent Squad is an open-source AI coding agent harness. Coordinate research, implementation, and QA with explicit approval gates and bounded tasks.',
      es: 'Pulsar Agent Squad es un harness open source para agentes de programación. Coordina investigación, implementación y QA con aprobaciones explícitas y tareas acotadas.',
    },
    details: [
      {
        title: { en: 'One Lead, focused workers', es: 'Un Lead, workers enfocados' },
        text: {
          en: 'The Lead coordinates the workflow and handles planning, approvals, and adjudication. Researcher, Developer, and QA agents focus on evidence, implementation, and verification.',
          es: 'El Lead coordina el flujo y se ocupa de planificar, gestionar aprobaciones y adjudicar resultados. Los agentes Researcher, Developer y QA se enfocan en evidencia, implementación y verificación.',
        },
      },
      {
        title: { en: 'Approval belongs to one scope', es: 'Cada aprobación tiene un alcance' },
        text: {
          en: 'No source change starts without explicit approval. Approval covers the agreed task; a changed plan needs a new approval.',
          es: 'Ningún cambio de código empieza sin aprobación explícita. La aprobación cubre la tarea acordada; si cambia el plan, hace falta una nueva.',
        },
      },
      {
        title: { en: 'Atomic delivery, mandatory QA', es: 'Entrega atómica y QA obligatorio' },
        text: {
          en: 'Each delegation defines scope, paths, and skills. QA returns a PASS, FAIL, or BLOCKED verdict for the Lead to adjudicate.',
          es: 'Cada delegación define alcance, rutas y skills. QA devuelve PASS, FAIL o BLOCKED para que el Lead adjudique el resultado.',
        },
      },
    ],
    chapters: [
      {
        title: { en: 'A bounded workflow for AI coding agents', es: 'Un flujo acotado para agentes de programación' },
        text: {
          en: 'PAS separates control-plane decisions from focused execution. One strong Lead owns planning and approvals, while lighter worker agents handle research, coding, and QA under explicit contracts.',
          es: 'PAS separa las decisiones de coordinación de la ejecución enfocada. Un Lead fuerte se ocupa del plan y las aprobaciones; agentes workers más livianos investigan, programan y hacen QA con contratos explícitos.',
        },
        points: [
          { en: 'Research runs read-only and can batch independent questions.', es: 'La investigación es de solo lectura y puede agrupar preguntas independientes.' },
          { en: 'Implementation follows one atomic task at a time.', es: 'La implementación avanza de a una tarea atómica por vez.' },
          { en: 'QA verifies the work and returns one objective verdict.', es: 'QA verifica el trabajo y devuelve un resultado objetivo.' },
        ],
      },
      {
        title: { en: 'State and context survive the session', es: 'El estado y el contexto sobreviven a la sesión' },
        text: {
          en: 'PAS keeps feature state in numbered project folders managed by its pas_toolkit plugin. Living documentation, an ADR trail, and Mind checkpoints make ongoing work easier to resume.',
          es: 'PAS mantiene el estado de cada feature en carpetas numeradas gestionadas por su plugin pas_toolkit. La documentación viva, el historial de ADRs y los checkpoints de Mind facilitan retomar el trabajo.',
        },
        points: [
          { en: 'A single writer owns lifecycle operations for task state.', es: 'Un único writer gestiona el ciclo de vida del estado de las tareas.' },
          { en: 'Conflicting or malformed state blocks instead of guessing.', es: 'Si el estado tiene conflictos o está mal formado, el flujo se bloquea en lugar de adivinar.' },
          { en: 'OpenCode is the primary runtime; supported targets are listed in the repository manifest.', es: 'OpenCode es el runtime principal; el manifiesto del repo lista los demás targets.' },
        ],
      },
    ],
    quickStart: {
      title: { en: 'Install Pulsar Agent Squad', es: 'Instalá Pulsar Agent Squad' },
      intro: {
        en: 'The bootstrap installs the OpenCode target by default. PAS requires a POSIX shell, Git, and Bun on your PATH; it does not install Bun automatically.',
        es: 'El bootstrap instala el target de OpenCode por defecto. PAS requiere una shell POSIX, Git y Bun en el PATH; no instala Bun automáticamente.',
      },
      requirements: [
        { en: 'A POSIX shell and Git.', es: 'Una shell POSIX y Git.' },
        { en: 'Bun available on PATH.', es: 'Bun disponible en el PATH.' },
        { en: 'OpenCode is the primary supported runtime.', es: 'OpenCode es el runtime principal.' },
      ],
      commands: [
        { label: { en: 'Clone and install', es: 'Clonar e instalar' }, value: 'git clone https://github.com/GabrielMartinMoran/pulsar-agent-squad.git\ncd pulsar-agent-squad\n./install.sh' },
        { label: { en: 'Check the setup', es: 'Verificar la instalación' }, value: './pas doctor\n./pas validate' },
        { label: { en: 'Choose the Lead agent', es: 'Elegir el agente Lead' }, value: '"default_agent": "Pulsar Agent Squad"' },
      ],
    },
    stack: ['Bun', 'TypeScript', 'Gherkin', 'OpenCode', 'Mind'],
    url: 'https://github.com/GabrielMartinMoran/pulsar-agent-squad',
    accent: 'pulsar',
    mark: '✦',
  },
];
