![splash](https://raw.githubusercontent.com/davestewart/vuex-pathify/master/docs/assets/img/readme/splash-github.png)

# Vuex Pathify Demos

## Introduction

This repo contains various [Vuex Pathify](https://github.com/davestewart/vuex-pathify) demos:

- [Main demo](./main) - shows all Pathify features with several "code comparison" demos
- [Simple demo](./simple) - a simple "Hello World" style demo with minimal code and setup
- [Nuxt demo](./nuxt) - Pathify working in a Nuxt installation

Each folder is an individual demo and is entirely self-contained.

See individual demo readme files and source code for more information.

## Installation

To clone the repo and install all demo folder packages, run:

```
git clone https://github.com/davestewart/vuex-pathify-demos.git
cd vuex-pathify-demos
npm run init
```

## Running the demos

Each demo can be run from its own folder, or by a convenience npm command from the root:

```
npm run main
npm run simple
npm run nuxt
```

Additionally, the main and simple demos can be run on Code Sandbox:

- [Simple demo](https://codesandbox.io/s/github/davestewart/vuex-pathify-demos/tree/master/simple)
- [Main demo](https://codesandbox.io/s/github/davestewart/vuex-pathify-demos/tree/master/main)


## Local plugin development

To develop the Pathify locally whilst running any of the demos, you will need a special NPM setup which links the local demos to a locally-downloaded copy of the plugin repo.

The steps are:

- download the plugin package
- globally link the plugin package
- download the demos
- locally link individual demos
- run the dev setups for both plugin and demos

#### Plugin setup

First of all, create a folder that you can store both repos in:

```
mkdir ~/VuexPathify
```

Next, download and link the plugin package:

```
# clone the repo
cd ~/VuexPathify
git clone https://github.com/davestewart/vuex-pathify

# create global link
cd vuex-pathify
npm link
```

#### Demo setup

Next download and link one or more demos:

```
cd ~/VuexPathify
git clone https://github.com/davestewart/vuex-pathify-demos

# create local link
cd vuex-pathify-demos
cd simple
npm link vuex-pathify
```

#### Running the demo

Finally, you can run both the plugin and demo dev setups, and see the results in the browser.

In separate terminal windows:

```
cd ~/VuexPathify/vuex-pathify
npm run dev 
```

```
cd ~/VuexPathify/vuex-pathify-demos
npm run simple
```

View in the browser at the URL stated in the terminal.
