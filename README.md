
# ejda-chat-docs

Ceci est la documentation officielle de EJDA Chat pour développeurs.

Lancer le serveur de développement :

```bash
npm run dev
# ou
pnpm dev
# ou
yarn dev
```

Ouvrez http://localhost:3000 dans votre navigateur pour voir le résultat.

## Explorer

Dans le projet, vous pouvez voir :

- `lib/source.ts` : Code pour l'adaptateur de source de contenu, [`loader()`](https://fumadocs.dev/docs/headless/source-api) fournit l'interface pour accéder à votre contenu.
- `app/layout.config.tsx` : Options partagées pour les layouts, optionnel mais préférable de les conserver.

| Route                     | Description                                                    |
| ------------------------- | -------------------------------------------------------------- |
| `app/(home)`              | Groupe de routes pour la page d'accueil et autres pages.        |
| `app/docs`                | Layout et pages de la documentation.                            |
| `app/api/search/route.ts` | Le gestionnaire de route pour la recherche.                     |

### Fumadocs MDX

Un fichier de configuration `source.config.ts` est inclus, vous pouvez personnaliser différentes options comme le schéma du frontmatter.