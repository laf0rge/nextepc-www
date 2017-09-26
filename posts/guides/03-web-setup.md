---
title: Web Setup
order: 3
page: guides
---

In **NextEPC**, the subscriber information is stored in **Mongo DB** server and other **LTE-related settings** are made in **JSON** format and stored in **nextepc.conf**.

To register the subscriber information first, you need to install the **Web User Interface** to save it on **Mongo DB** server.

## Install Node.js and NPM

To get the latest **Node.js** and **NPM** version, you can visit the official **Node.js** website:
[https://nodesjs.org/en/download/](https://nodesjs.org/en/download/).

Or, you can install _Node.js_ and _NPM_ on **Ubuntu** as follows:

```bash
sudo apt-get -y install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
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

## Running Mongo DB server & Web Server

```bash
sudo /etc/init.d/mongodb start
npm run start
```

Use a web browser to connect it. _(http://localhost:3000)_
