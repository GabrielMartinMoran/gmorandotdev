import { getCopy, type Locale } from '../data/ui-copy';

const storageKey = 'gmoran-locale';

function getInitialLocale(): Locale {
  const routeLocale = document.documentElement.dataset.routeLocale;
  if (routeLocale === 'en' || routeLocale === 'es') return routeLocale;

  try {
    const savedLocale = localStorage.getItem(storageKey);
    if (savedLocale === 'en' || savedLocale === 'es') return savedLocale;
  } catch {
    // Storage can be unavailable in private browsing or restricted contexts.
  }

  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

function translate(key: string): string | undefined {
  return getCopy(locale, key);
}

function localizedPath(pathname: string, nextLocale: Locale): string {
  const spanishPrefix = '/es';
  const isSpanishPath = pathname === spanishPrefix || pathname.startsWith(`${spanishPrefix}/`);

  if (nextLocale === 'es' && !isSpanishPath) {
    return `${spanishPrefix}${pathname === '/' ? '/' : pathname}`;
  }
  if (nextLocale === 'en' && isSpanishPath) {
    return pathname.slice(spanishPrefix.length) || '/';
  }
  return pathname;
}

let locale: Locale = getInitialLocale();

function applyLocale(nextLocale: Locale): void {
  locale = nextLocale;
  document.documentElement.lang = locale === 'es' ? 'es-AR' : 'en';

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

  document.querySelectorAll<HTMLAnchorElement>('[data-locale-link]').forEach((link) => {
    link.setAttribute('aria-current', link.dataset.localeLink === locale ? 'page' : 'false');
  });
}

applyLocale(locale);

if (document.documentElement.dataset.routeLocale === 'auto' && locale === 'es') {
  const path = localizedPath(window.location.pathname, 'es');
  if (path !== window.location.pathname) window.location.replace(`${path}${window.location.search}${window.location.hash}`);
}

document.querySelectorAll<HTMLAnchorElement>('[data-locale-link]').forEach((link) => {
  link.addEventListener('click', () => {
    const nextLocale = link.dataset.localeLink;
    if (nextLocale !== 'en' && nextLocale !== 'es') return;
    try {
      localStorage.setItem(storageKey, nextLocale);
    } catch {
      // The explicit locale URL still works when storage is unavailable.
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
