## Concepts

- Split in packages

## Steps to setup this

1. Create and enter /packages/tokes folder
   > npm init -y
2. Adjust the package name
3. Create colors file ( token) and export in index.ts file in this directory
4. Inside tokens package install typescript as a dependency
   > npm install typescript -D
   > npx tsc --init
5. Init project in root

   > npm init
   > add private: true,
   > add workspaces: : [ "packages/*"]

6. Add all tokes and export in index.ts

7. Install tsup. It helps to build and convert typescript in JS. The main difference it can be build in ecmascript modules and old version with require. Also generate the d.ts files.
8. Add in package.json the script to build with tsup:

   > "build": "tsup src/index.ts --format esm, cjs --dts"
   > "dev": "tsup src/index.ts --format esm, cjs --dts --watch"

## Monorepo

- Use multiple projects in same directory
- For different projects dependent on each other
- It is a concept not necessarily a tool

### Setup monorepo

1. Create other package, like react , and start initial setup with typescript
2. Add package in devDependencies using "\*" to all versions
3. Add the correct reference to main files
4. remove local node_modules and lock json files
5. install all over again

### Setup Typescript

- It is possible to create the same tsconfig to all packages

1. Create a new package 'ts-config'
2. init npm -y
3. create base.json to generic configuration. And also a react.json to config specification for react.
4. Add this as a dependency in other packages.

### Setup Eslint

- It is possible to create the same eslint config to all packages

1. Create a new package 'eslint-config'
2. init npm -y
3. Add main as index.js
4. Add new dependency:

   > npm i -D eslint @rocketseat/eslint-config.

5. Creat a index.js file and exports
6. Add the eslint-config as dependency in other packages

### Setup React package

- The React lib is installed as devDependencies because the host application that runs this design system lib should have the react already installed.
- To avoid duplicated dependencies this will set is as devDependencies

1. Install React as devDependencies

   > npm i -D react @types/react @types/react-dom

2. Adjust the 'dev' and 'build scripts to add a flag to indicate during the build the react is going to be external, used from the hosted application.
   > "build": "tsup src/index.ts --format esm, cjs --dts --external react",
   > "dev": "tsup src/index.ts --format esm, cjs --dts --watch --external react",

### Todo Components

- [] Text
- [] Heading
- [] Box
- [] Button
- [] TextInput
- [] TextArea
- [] CheckBox
- [] Avatar
- [] MultiStep