## Install Node.js and NPM

```bash
sudo apt-get -y install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get -y install nodejs
```

## Retrieve the latest version of the source package

```bash
git clone https://github.com/acetcom/nextepc-www
```

## Install the dependencies for building the source

```bash
cd nextepc-www
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

Connect [https://nextepc.now.sh](https://nextepc.now.sh)

## Deploy `github` 

```bash
npm run github
```

Connect [http://nextepc.org](http://nextepc.org)
