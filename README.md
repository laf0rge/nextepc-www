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

## Local Testing

```bash
npm run dev
```

Connect [http://localhost:3000](http://localhost:3000)


## Deploy `now` 

```bash
npm run now
```

[https://nextepc.now.sh](https://nextepc.now.sh)

## Deploy `github` 

```bash
npm run github
```

[http://nextepc.org](http://nextepc.org);

