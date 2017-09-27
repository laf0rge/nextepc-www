---
title: Web Setup
order: 3
page: guides
---

NextEPC is configured with `Subscriber Information` managed in **Mongo DB** and **Files** made in _JSON_ format.

The configuration file made in _JSON_ format can be modified using a general editor such as vi or emacs, but `Subscriber Information` can be managed properly using _Database Command_.

NextEPC provides **Web User Interface** to manage `Subscriber Information` in an easy way without using _Database Command_. Let's how to install it from now on.

## Install Node.js and NPM

To get the latest **Node.js** and **NPM** version, you can visit the official **Node.js** website:
[https://nodesjs.org/en/download/](https://nodesjs.org/en/download/).

Or, you can install _Node.js_ and _NPM_ on **Ubuntu** as follows:

```bash
sudo apt-get -y install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get -y install nodejs
```

## Install the dependencies for building the source

The first step is to use **npm** to install all depedencies.

```bash
cd nextepc/webui
npm install
```

## Build Web User Interface
```bash
npm run build
```

## Running Web Server

```bash
npm run start
```

Use **Web Browser** to connect it. _http://localhost:3000_
