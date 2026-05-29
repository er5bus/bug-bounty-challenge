## Bugs fixed

**1. Missing `key` prop** : for `issues.map()` i added `key={index}`

**2. "known" not bold** : i used `<Trans components={{ b: <strong /> }}>`

**3. Avatar not showing** :
- i fixed the typo `this.urser = result` → `this.user = result`
- `new Store()` was called directly in JSX it refresh on every render so i added `useState(() => new Store())`

**4. Countdown glitching** : `setInterval` was never cleared on unmount in dev mode it stacks multiple intervals so the counter increments way too fast so i added `return () => clearInterval(id)`

**5. Language switcher** : i added a `LanguageSwitcher` component in the app bar it switches btw EN and DE using `i18n.changeLanguage()` i also add German translations to `de.json`

---

## Extra stuff

- `AvatarMenu` needed `React.forwardRef` bc MUI's `Grow` injects a ref into its child ir was causing a prop warning.
- i fixed a wrong import `Box` from `@mui/system` (not installed) `@mui/material`

---
