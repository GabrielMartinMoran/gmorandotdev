import type { Locale } from './ui-copy';
import type { Project } from './projects';

const siteUrl = 'https://gmoran.dev';

export function getLocaleUrls(path = ''): { en: string; es: string } {
  const normalizedPath = path.replace(/^\/+|\/+$/g, '');
  return {
    en: normalizedPath ? `/${normalizedPath}/` : '/',
    es: normalizedPath ? `/es/${normalizedPath}/` : '/es/',
  };
}

export function getHomeStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: 'Gabriel Martín Moran — Engineering in the open',
        inLanguage: ['en', 'es-AR'],
        publisher: { '@id': `${siteUrl}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Gabriel Martín Moran',
        url: `${siteUrl}/`,
        jobTitle: 'Computer engineer',
        sameAs: [
          'https://github.com/GabrielMartinMoran',
          'https://www.linkedin.com/in/gabriel-mart%C3%ADn-moran-a8220b125',
          'https://x.com/Gabriel_M_Moran',
          'https://www.reddit.com/user/GabrielMartinMoran/',
        ],
        knowsAbout: [
          'Software engineering',
          'Domain-Driven Design',
          'Clean Architecture',
          'Clean Code',
          'AI agent workflows',
        ],
      },
    ],
  };
}

export function getProjectStructuredData(project: Project, locale: Locale, canonicalUrl: string) {
  const labels = locale === 'es'
    ? { home: 'Inicio', projects: 'Proyectos' }
    : { home: 'Home', projects: 'Projects' };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: project.name,
        description: project.seoDescription[locale],
        url: canonicalUrl,
        codeRepository: project.url,
        applicationCategory: 'DeveloperApplication',
        programmingLanguage: project.stack.filter((item) => ['Bun', 'TypeScript'].includes(item)),
        inLanguage: locale === 'es' ? 'es-AR' : 'en',
        creator: {
          '@type': 'Person',
          name: 'Gabriel Martín Moran',
          url: `${siteUrl}/`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: labels.home, item: locale === 'es' ? `${siteUrl}/es/` : `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: labels.projects, item: locale === 'es' ? `${siteUrl}/es/#proyectos` : `${siteUrl}/#proyectos` },
          { '@type': 'ListItem', position: 3, name: project.name, item: canonicalUrl },
        ],
      },
    ],
  };
}

export function getCanonical(path: string): string {
  return new URL(path, siteUrl).href;
}
