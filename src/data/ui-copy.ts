export type Locale = 'en' | 'es';

import { projects } from './projects';
import { agentSkills } from './agent-skills';

export const uiCopy: Record<Locale, Record<string, string>> = {
  en: {
    'nav.label': 'Primary navigation',
    'locale.label': 'Choose language',
    'home.title': 'Engineering in the open',
    'home.titleTag': 'Engineering in the open — Gabriel Martín Moran',
    'home.description': 'Open source engineering projects by Gabriel Martín Moran: durable memory for AI workflows, agent orchestration, and practical software engineering.',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'hero.kicker': 'COMPUTER ENGINEER · BUENOS AIRES',
    'hero.title': 'Software for<br />people who <em>build.</em>',
    'hero.description': 'I’m Gabriel. I build open source software to solve engineering problems and share what I learn along the way.',
    'hero.link': 'Explore projects',
    'project.cardLink': 'Explore project',
    'project.cardType': 'PROJECT',
    'project.detailsSuffix': 'DETAILS',
    'project.technologyLabel': 'TECHNOLOGIES',
    'project.graphicCaption': 'SYSTEMS IN MOTION',
    'hero.artLabelTop': 'IDEA → SYSTEM',
    'hero.artLabelBottom': 'BUILT IN THE OPEN',
    'hero.scroll': 'SCROLL',
    'brand.homeLabel': 'Gabriel Martín Moran, home',
    'brand.backLabel': 'Back to home',
    'projects.eyebrow': 'GITHUB / PUBLIC REPOSITORIES',
    'projects.title': 'Systems <span>in progress.</span>',
    'projects.aside': 'Real problems. Open source.<br />Engineering decisions in the repo.',
    'projects.footerStatus': 'OPEN SOURCE · WORK IN PROGRESS',
    'projects.footerCount': '02 REPOSITORIES',
    'skills.eyebrow': 'AGENT TOOLKIT / REUSABLE WORKFLOWS',
    'skills.title': 'Skills for <span>your agent.</span>',
    'skills.description': 'Install focused instructions and workflows from my public skills repo. They activate when an agent’s task matches.',
    'skills.installLabel': 'INSTALL WITH',
    'skills.repoLink': 'Browse all skills',
    'skills.open': 'Open skill on GitHub',
    'skills.count': '06 SKILLS AVAILABLE',
    'skills.copyCommand': 'COPY COMMAND',
    'skills.cardType': 'AGENT SKILL',
    'skills.copyAria': 'Copy install command',
    'skills.copied': 'COPIED',
    'skills.copyFallback': 'COPY FROM CODE',
    'about.eyebrow': 'ENGINEER PROFILE',
    'about.meta': 'PROFILE / ENGINEERING',
    'about.title': 'Computer engineer, <em>building in public.</em>',
    'about.body': 'I’m {age} years old, a computer engineer with over 10 years in the software industry. I advocate for good engineering practices: DDD, Clean Architecture, Clean Code, and systems that stay understandable as they grow.',
    'about.link': 'Find me on GitHub',
    'about.linkedin': 'LinkedIn profile',
    'about.x': 'X profile',
    'about.reddit': 'Reddit profile',
    'footer.meta': 'BUENOS AIRES, AR · SOURCE: PUBLIC',
    'footer.top': 'BACK TO TOP',
    'project.breadcrumbHome': 'HOME',
    'project.breadcrumbProjects': 'PROJECTS',
    'project.github': 'View on GitHub',
    'project.read': 'About this project',
    'project.section': 'PROJECT FILE',
    'project.heading': 'The problem.<br /><em>The decisions.</em>',
    'project.next': 'NEXT PROJECT',
    'project.all': '← All projects',
    'project.top': 'BACK TO TOP',
    'project.approach': 'HOW IT WORKS',
    'project.capabilities': 'DESIGN NOTES',
    'project.install': 'TRY IT YOURSELF',
    'project.requirements': 'REQUIREMENTS',
    'project.source': 'SOURCE REPOSITORY',
    'project.repoLink': 'Read the source and full documentation',
    'project.homeCrumb': 'ENGINEERING PROJECTS',
  },
  es: {
    'nav.label': 'Navegación principal',
    'locale.label': 'Elegir idioma',
    'home.title': 'Ingeniería en abierto',
    'home.titleTag': 'Ingeniería en abierto — Gabriel Martín Moran',
    'home.titleTag': 'Ingeniería en abierto — Gabriel Martín Moran',
    'home.description': 'Proyectos de ingeniería open source de Gabriel Martín Moran: memoria para flujos de IA, orquestación de agentes e ingeniería de software.',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Skills',
    'hero.kicker': 'INGENIERO EN COMPUTACIÓN · BUENOS AIRES',
    'hero.title': 'Software para<br />quienes <em>construyen.</em>',
    'hero.description': 'Soy Gabriel. Construyo software open source para resolver problemas de ingeniería y compartir lo que aprendo en el camino.',
    'hero.link': 'Explorar proyectos',
    'project.cardLink': 'Explorar proyecto',
    'project.cardType': 'PROYECTO',
    'project.detailsSuffix': 'DETALLES',
    'project.technologyLabel': 'TECNOLOGÍAS',
    'project.graphicCaption': 'SISTEMAS EN MOVIMIENTO',
    'hero.artLabelTop': 'IDEA → SISTEMA',
    'hero.artLabelBottom': 'CÓDIGO ABIERTO',
    'hero.scroll': 'BAJAR',
    'brand.homeLabel': 'Gabriel Martín Moran, inicio',
    'brand.backLabel': 'Volver al inicio',
    'projects.eyebrow': 'GITHUB / REPOSITORIOS PÚBLICOS',
    'projects.title': 'Sistemas <span>en curso.</span>',
    'projects.aside': 'Problemas reales. Código abierto.<br />Decisiones de ingeniería en cada repo.',
    'projects.footerStatus': 'CÓDIGO ABIERTO · EN DESARROLLO',
    'projects.footerCount': '02 REPOSITORIOS',
    'skills.eyebrow': 'HERRAMIENTAS PARA AGENTES / WORKFLOWS REUTILIZABLES',
    'skills.title': 'Skills para tu <span>agente.</span>',
    'skills.description': 'Instalá instrucciones y workflows especializados desde mi repo público. Se activan cuando la tarea del agente coincide con su descripción.',
    'skills.installLabel': 'INSTALAR CON',
    'skills.repoLink': 'Ver todas las skills',
    'skills.open': 'Abrir skill en GitHub',
    'skills.count': '06 SKILLS DISPONIBLES',
    'skills.copyCommand': 'COPIAR COMANDO',
    'skills.cardType': 'SKILL DE AGENTE',
    'skills.copyAria': 'Copiar comando de instalación',
    'skills.copied': 'COPIADO',
    'skills.copyFallback': 'COPIAR DESDE EL CÓDIGO',
    'about.eyebrow': 'PERFIL DE INGENIERÍA',
    'about.meta': 'PERFIL / INGENIERÍA',
    'about.title': 'Ingeniero en computación, <em>construyendo en público.</em>',
    'about.body': 'Tengo {age} años y más de 10 años de experiencia en la industria del software. Soy evangelizador de buenas prácticas de ingeniería: DDD, Clean Architecture, Clean Code y sistemas que sigan siendo claros a medida que crecen.',
    'about.link': 'Encontrame en GitHub',
    'about.linkedin': 'Perfil de LinkedIn',
    'about.x': 'Perfil de X',
    'about.reddit': 'Perfil de Reddit',
    'footer.meta': 'BUENOS AIRES, AR · CÓDIGO: PÚBLICO',
    'footer.top': 'VOLVER ARRIBA',
    'project.breadcrumbHome': 'INICIO',
    'project.breadcrumbProjects': 'PROYECTOS',
    'project.github': 'Ver en GitHub',
    'project.read': 'Sobre este proyecto',
    'project.section': 'ARCHIVO DEL PROYECTO',
    'project.heading': 'El problema.<br /><em>Las decisiones.</em>',
    'project.next': 'SIGUIENTE PROYECTO',
    'project.all': '← Todos los proyectos',
    'project.top': 'VOLVER ARRIBA',
    'project.approach': 'CÓMO FUNCIONA',
    'project.capabilities': 'DECISIONES DE DISEÑO',
    'project.install': 'PROBALO',
    'project.requirements': 'REQUISITOS',
    'project.source': 'REPOSITORIO FUENTE',
    'project.repoLink': 'Ver el código y la documentación completa',
    'project.homeCrumb': 'PROYECTOS DE INGENIERÍA',
  },
};

function resolveObjectCopy(value: unknown, locale: Locale, path: string[]): unknown {
  let current = value;
  for (const segment of path) {
    if (Array.isArray(current)) current = current[Number(segment)];
    else if (typeof current === 'object' && current !== null) {
      current = (current as Record<string, unknown>)[segment];
    } else return undefined;
  }

  if (typeof current === 'object' && current !== null && locale in current) {
    return (current as Record<Locale, unknown>)[locale];
  }
  return current;
}

export function calculateAge(date = new Date()): number {
  const birthday = new Date(date.getFullYear(), 4, 22);
  return date.getFullYear() - 1995 - Number(date < birthday);
}

export function getCopy(locale: Locale, key: string): string | undefined {
  let value: unknown = uiCopy[locale][key];

  if (typeof value === 'undefined') {
    const [namespace, slug, ...path] = key.split('.');
    if (namespace === 'projects') {
      const project = projects.find((item) => item.slug === slug);
      if (project) {
        value = path[0] === 'titleTag'
          ? project.seoTitle[locale]
          : resolveObjectCopy(project, locale, path);
      }
    } else if (namespace === 'skills') {
      const skill = agentSkills.find((item) => item.slug === slug);
      if (skill) value = resolveObjectCopy(skill, locale, path);
    }
  }

  return typeof value === 'string' ? value.replaceAll('{age}', String(calculateAge())) : undefined;
}
