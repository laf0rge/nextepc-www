---
title: Getting Started
order: 1
page: guides
---

This post will guide you on how to get started with **NextEPC**. To date, **NextEPC** has been compiled and tested on GNU/Linux distributions(Debian, Ubuntu, Fedora, OpenSUSE) and FreeBSD.

We will explain the starting guide using **Ubuntu 16.04 LTS (64bit)**. You'll need to install **Ubuntu** if you don't have it installed already. To get the latest Ubuntu version please visit the official Ubuntu website: [https://www.ubuntu.com/download/](https://www.ubuntu.com/download/). 

## Install the dependencies for building the source

The first step is to use **apt-get** to install all depedencies.

```bash
sudo apt-get -y install gcc gdb make autoconf libtool pkg-config git
sudo apt-get -y install libsctp-dev libssl-dev libmongoc-dev libbson-dev
sudo apt-get -y install mongodb
```
## Retrieve the latest version of the source package

```bash
git clone https://github.com/acetcom/nextepc
```
## Install the freeDiameter

The **freeDiameter** does not provide a binary package for **Ubuntu 16.04 LTS (Trusty)**. You can install it by our binary package.

```bash
cd nextepc
dpkg -i support/freeDiameter/packages/ubuntu/dist/trusty/universe/binary-amd64/Package.deb
```

or compile it manually.
```bash
sudo apt-get -y install mercurial cmake bison flex libgnutls-dev libgcrypt-dev libidn11-dev
hg clone http://www.freediameter.net/hg/freeDiameter
mkdir fDbuild
cd fDbuild
cmake ../freeDiameter
make
sudo make install
```
## Configure the build

```bash
cd nextepc
test -f configure || autoreconf -iv
CFLAGS='-g3' ./configure --prefix=`pwd`/install
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
