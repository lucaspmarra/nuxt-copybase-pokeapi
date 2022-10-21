# Nuxt Copybase Test

[Copybase PokeApi](https://lucaspmarra.github.io/nuxt-copybase-pokeapi/#/)

### Prerequisites

- Node.js >= v16.18.0
- Yarn (or NPM)

### Stack

- Nuxt 2
- Vue 2
  - Options API
  - Event handler
- Axios
- EsLint (default rules)
- Prettier (default rules)
- Bootstrap-vue
- Static files

# Installing dependencies and starting dev server

Run `yarn` or `npm install` to install project dependeNcies.

```
>> yarn
yarn install v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 142.36s.
```

Navigate into folder and start project

```
>> cd /nuxt-copybase-pokeapi
>> yarn dev -o
	yarn run v1.22.5
	$ nuxt -o

   ╭────────────────────────────────────────────────────────────────╮
   │                                                                │
   │   Nuxt @ v2.15.8                                               │
   │                                                                │
   │   ▸ Environment: development                                   │
   │   ▸ Rendering:   client-side                                   │
   │   ▸ Target:      static                                        │
   │                                                                │
   │   Listening: http://localhost:8887/nuxt-copybase-pokeapi/      │
   │                                                                │
   ╰────────────────────────────────────────────────────────────────╯
```

-o open dev. server in browser

# Pages folder

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

File tree:

```
index.vue
about.vue
--| pokemon/
-----| _id.vue
```

# Assets page

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

# Build project

Current project is configured for static hosting server.

| nuxt.config.js |          |
| -------------- | -------- |
| ssr:           | false    |
| target:        | 'static' |

Using that configuration nuxt will compile files using `yarn generate` and compile into `/dist` folder.

| nuxt.config.js |          |
| -------------- | -------- |
| ssr:           | true     |
| target:        | 'server' |

Using that configuration nuxt will compile files using `yarn build` .

### Reference:

## [List of Commands](https://nuxtjs.org/docs/get-started/commands#list-of-commands)

You can run different commands depending on the [target](https://nuxtjs.org/docs/features/deployment-targets) :

### [target: `server` (default value)](https://nuxtjs.org/docs/get-started/commands#target-server-default-value)

- **nuxt dev** - Launch the development server.
- **nuxt build** - Build and optimize your application with webpack for production.
- **nuxt start** - Start the production server (after running `nuxt build`). Use it for Node.js hosting like Heroku, Digital Ocean, etc.

### [target: `static`](https://nuxtjs.org/docs/get-started/commands#target-static)

- **nuxt dev** - Launch the development server.
- **nuxt generate** - Build the application (if needed), generate every route as a HTML file and statically export to `dist/` directory (used for static hosting).
- **nuxt start** - serve the `dist/` directory like your static hosting would do (Netlify, Vercel, Surge, etc), great for testing before deploying.
