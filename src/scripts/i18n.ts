import { projects } from '../data/projects';
import { agentSkills } from '../data/agent-skills';
import { uiCopy, type Locale } from '../data/ui-copy';

const storageKey = 'gmoran-locale';

function getInitialLocale(): Locale {
  try {
    const savedLocale = localStorage.getItem(storageKey);
    if (savedLocale === 'en' || savedLocale === 'es') return savedLocale;
  } catch {
    // Storage can be unavailable in private browsing or restricted contexts.
  }
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

let locale: Locale = getInitialLocale();

function calculateAge(): number {
  const now = new Date();
  const birthday = new Date(now.getFullYear(), 4, 22);
  return now.getFullYear() - 1995 - Number(now < birthday);
}

function projectCopy(key: string): string | undefined {
  const [, slug, ...path] = key.split('.');
  const project = projects.find((item) => item.slug === slug);
  if (!project) return undefined;
  if (path[0] === 'titleTag') return `${project.name} — Gabriel Martín Moran`;

  let value: unknown = project;
  for (const segment of path) {
    if (Array.isArray(value)) value = value[Number(segment)];
    else if (typeof value === 'object' && value !== null) {
      value = (value as Record<string, unknown>)[segment];
    } else return undefined;
  }

  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value !== null && locale in value) {
    const localized = (value as Record<Locale, unknown>)[locale];
    return typeof localized === 'string' ? localized : undefined;
  }
  return undefined;
}

function agentSkillCopy(key: string): string | undefined {
  const [, slug, ...path] = key.split('.');
  const skill = agentSkills.find((item) => item.slug === slug);
  if (!skill) return undefined;

  let value: unknown = skill;
  for (const segment of path) {
    if (typeof value === 'object' && value !== null) {
      value = (value as Record<string, unknown>)[segment];
    } else return undefined;
  }
  if (typeof value === 'object' && value !== null && locale in value) {
    const localized = (value as Record<Locale, unknown>)[locale];
    return typeof localized === 'string' ? localized : undefined;
  }
  return typeof value === 'string' ? value : undefined;
}

function translate(key: string): string | undefined {
  const text = uiCopy[locale][key] ?? projectCopy(key) ?? agentSkillCopy(key);
  return text?.replaceAll('{age}', String(calculateAge()));
}

function applyLocale(nextLocale: Locale): void {
  locale = nextLocale;
  document.documentElement.lang = locale;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const text = key ? translate(key) : undefined;
    if (text) element.textContent = text;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    const markup = key ? translate(key) : undefined;
    if (markup) element.innerHTML = markup;
  });

  document.querySelectorAll<HTMLMetaElement>('[data-i18n-content]').forEach((element) => {
    const key = element.dataset.i18nContent;
    const content = key ? translate(key) : undefined;
    if (content) element.content = content;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((element) => {
    const key = element.dataset.i18nAria;
    const label = key ? translate(key) : undefined;
    if (label) element.setAttribute('aria-label', label);
  });

  document.querySelectorAll<HTMLButtonElement>('[data-set-locale]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.setLocale === locale));
  });
}

applyLocale(locale);

document.querySelectorAll<HTMLButtonElement>('[data-set-locale]').forEach((button) => {
  button.addEventListener('click', () => {
    const nextLocale = button.dataset.setLocale;
    if (nextLocale !== 'en' && nextLocale !== 'es') return;
    applyLocale(nextLocale);
    try {
      localStorage.setItem(storageKey, locale);
    } catch {
      // The switch still works for this page when storage is unavailable.
    }
  });
});

document.querySelectorAll<HTMLButtonElement>('[data-copy-command]').forEach((button) => {
  button.addEventListener('click', async () => {
    const command = button.dataset.copyCommand;
    const label = button.querySelector<HTMLElement>('[data-copy-label]');
    if (!command || !label) return;

    try {
      await navigator.clipboard.writeText(command);
      label.textContent = translate('skills.copied') ?? 'COPIED';
    } catch {
      label.textContent = translate('skills.copyFallback') ?? 'COPY FROM CODE';
    }

    window.setTimeout(() => {
      label.textContent = translate('skills.copyCommand') ?? 'COPY COMMAND';
    }, 2200);
  });
});
