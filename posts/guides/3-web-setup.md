---
title: Web Setup
order: 3
page: guides
---

NextEPC is configured with **Mongo DB**, which manages _Subscriber Information_ mainly, and **Configuration File** made in _JSON_ format.

The configuration file can be modified using a general editor such as vi or emacs, but _Subscriber Information_ can be managed properly using _Mongo DB Client_.

NextEPC provides **Web User Interface** solely designed to manage _Subscriber Information_ in an easy way without using _Mongo DB Client_. Let's how to install it from now on.

## Install Node.js and NPM

To get the latest **Node.js** and **NPM** version, you can visit the official **Node.js** website:
[https://nodesjs.org/en/download/](https://nodesjs.org/en/download/).

Or, you can install _Node.js_ and _NPM_ on **Ubuntu** as follows:

```bash
sudo apt-get -y install curl gnupg
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

## Login with default account

Use **Web Browser** to connect it. _http://localhost:3000_

  * Username : admin
  * Password : 1423

Then, you can change your password in _Account_ Menu.
