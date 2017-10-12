---
title: Building NextEPC
order: 2
page: guides
---

This post will guide you on how to get installed with **NextEPC**. To date, **NextEPC** has been compiled and tested on GNU/Linux distributions(Debian, Ubuntu, CentOS, Fedora) and FreeBSD.

We will describe this guide using **Ubuntu 16.04 LTS (Xenial)**. You'll need to install **Ubuntu** if you don't have it installed already. To get the latest Ubuntu version, please visit the official Ubuntu website: [https://www.ubuntu.com/download/](https://www.ubuntu.com/download/). 

## Install the dependencies for building the source

The first step is to use **apt-get** to install all depedencies.

```bash
sudo apt-get -y install git gcc flex bison make
sudo apt-get -y install autoconf libtool pkg-config
sudo apt-get -y install libsctp-dev libssl-dev
sudo apt-get -y install libgnutls-dev libgcrypt-dev
sudo apt-get -y install libmongoc-dev libbson-dev
sudo apt-get -y install mongodb
```

## Retrieve the latest version of the source package

Download the latest source [nextepc-0.1.1.tar.gz](https://github.com/acetcom/nextepc/archive/v0.1.1.tar.gz) or,

```bash
git clone https://github.com/acetcom/nextepc
```

## Configure the build

```bash
cd nextepc
test -f configure || autoreconf -iv
CFLAGS='-O2' ./configure --prefix=`pwd`/install
```

## Compiling

Hopefully, once you have completed the autotools configuration, you only need to run:

```bash
make -j `nproc`
```

## Installing

Once the compilation is complete, you can install in the configured paths with:

```bash
make install
```
(this might require sudo depending on the configured target directories)

