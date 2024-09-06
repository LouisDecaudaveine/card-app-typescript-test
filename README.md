# Integrum ESG interview - Card App 🎴🃏

Simple card app created with Typescript Stack
Converted to a test from the [original](https://github.com/ThomiWidescreen/card-app-typescript)

## Prerequisites

NodeJS - if you don't already have it installed, check out [nvm](https://github.com/nvm-sh/nvm).

### Development set-up

If you don't have a favorite editor we highly recommend [VSCode](https://code.visualstudio.com).

Recommended VSCode extensions:

- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- [Tailwind](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

# Instruction to candidates

Your assignment is to improve this application. At the moment the application is simple and can only create and remove todos.

Fork this project into your own on github

Clone it onto a machine with node and a development environment (we use VScode)
Follow the instructions below to run the back end and the front end.

Then make changes to:

- Add a dark mode. Create a settings dialog to set it - and change the styling to render a dark mode. Consider how the current setting is passed to the components (and describe it in your covering email)
- Add a scheduled date to the cards. This involves adding a column in the database, changing the backend service and changing the frontend card entry and display components
- Add tests to the backend. There are some clues [here](https://www.fastify.io/docs/latest/Guides/Testing/) and [here](https://jestjs.io/docs/using-matchers).

If you feel constrained by time (which is totally fine!), prioritize quality over quantity.

Email us the link to your repo when you're done. Please also include a short write up describing the rationale of the changes you have made.

# Features

- Mutiple Routes for each action.
- Local Backend Database
- You can View, Create, Update, Delete simple cards.

# Stack

## Front End

- React ⚛
- React Router DOM 🔀
- Tailwind CSS 🐦

## Back End

- Fastify 🚀
- Prisma ORM 🅿
- SQLite ▪

# Deploy

Git hooks are used to automatically format committed files. To setup the hooks run:

```bash
npm i
```

The front end works in port 3000 and the backend works in the port 3001.

## Back End

```bash
npm install

npm run prisma-setup

npm start
```

To have the backend restart when changes have been made to `.ts`, `.prisma` and `.sql` files:

Replace `npm start` with `npm run dev`

To run the tests:

```bash
npm run test
```

## Front End

```bash
npm install

npm start
```

To deploy a final build with static files:

```bash
npm run build

cd ./dist

npx serve -p 3000 -s
```

## My Solution to the test:


#### Getting to grips with the new technologies: 

This was the first time using TypeScript, Tailwind and Prisma Orm for me, therefore before writing any code I wanted to gain understanding of the stack being used. I spent the first 3 hours looking through the code base and finding the relevant documentation for the given tasks and learning the fundamentals for these technologies.

#### Scheduled Date Field
Then I proceeded to start with the backend adding the scheduled date field to the prisma schema in `schema.prisma` file alongside adding default values to the `server.post` and `server.put` handles. I then added the relevant frontend jsx to fit the new field into the "All Entries", "Create" and "Edit" pages, using Tailwind CSS to stylise it.

#### Dark Mode Switch
Next I made the dark mode switch. For this feature I took advantage of the Tailwind `dark:` prefix, to reuse as much of the styling code as possible and changing only the relevant fields to fit a darker environment. For the switch I made a custom SVG checkbox component for an intuitive User Experience. I decided not to use the React.js Context file, given that the `dark:` prefix enabled me from needing to share the website's theme state to all components of the website.

#### Backend Testing

Once I was happy with the previous two features I approached adding testing to the backend. After reading some of the fastify and Jest documentation I wrote some tests to check the reliability of the database. Unfortunately given my previous work commitments I ran out of time and had to settle with only 2 tests. If I had more time I would have wanted to test all of the backend handles such as editing fields and adding to the database's table.


#### Development process 
There were 2 main hiccups throughout the development of these features. The first consists of not knowing how Prisma deals with adding SQL columns to a table schema. After 40 minutes I figured out I had to rerun the `npm run prisma-setup` command to update the schema. The second hiccup was in relation to Tailwind and the `dark:` prefix. I was trying to add the `dark` class to a parent component that was not in the scope of the `tailwind.config.js` file. I solved the issue once I understood what `content: ["./src/**/*.{js,jsx,ts,tsx}"]` setting meant in the file.

The whole development cycle took me around 7 hours, in which the majority of the time was spent learning the new technologies used within the project. I appreciate the effort put into the question and had a lot of fun completing it!
