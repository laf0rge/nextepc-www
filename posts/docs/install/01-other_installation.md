---
title: Other Installation
order: 11
page: docs
---

As mentioned eariler, NextEPC is designed to work with both the **GNU/Linux and FreeBSD** families. Here's how to install NextEPC on other platforms.

## Ubuntu 14.04 (Trusty)

_Ubuntu 14.04_ release does not have the **Mongo C Driver** provided by [http://mongoc.org](https://mongoc.org). You have to compile and install it manually

#
First, install the following packages except Mongo C Driver.
(Dependencies are changed. Install `libidn11-dev` instead of `libgcrypt-dev`)

```bash
sudo apt-get -y install git gcc flex bison make
sudo apt-get -y install autoconf libtool pkg-config
sudo apt-get -y install libsctp-dev libssl-dev
sudo apt-get -y install libgnutls-dev libidn11-dev 
sudo apt-get -y install mongodb
```

And then, compile and install Mongo C Driver like the followings.
```bash
sudo apt-get -y install g++ libsasl2-dev
tar xzf mongo-c-driver-1.8.0.tar.gz
cd mongo-c-driver-1.8.0
./configure --disable-automatic-init-and-cleanup
make
sudo make install
sudo ldconfig
```

Finally, you can compile and install the NextEPC as described in the Installation Guide.


## Ubuntu 17.04 (Zesty)

In this _Ubuntu_ release, the package name of GNUTLS has been changed from `libgnutls-dev` to `libgnutls28-dev`. Install dependencies as follows and build NextEPC.

```bash
sudo apt-get -y install git gcc flex bison make
sudo apt-get -y install autoconf libtool pkg-config
sudo apt-get -y install libsctp-dev libssl-dev
sudo apt-get -y install libgnutls28-dev libgcrypt-dev
sudo apt-get -y install libmongoc-dev libbson-dev
sudo apt-get -y install mongodb
```
