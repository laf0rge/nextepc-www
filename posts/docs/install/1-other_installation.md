---
title: Other Installation
order: 11
page: docs
---

As mentioned eariler, NextEPC is designed to work with both the **GNU/Linux and FreeBSD** families. Here's how to install NextEPC on other platforms.

## CentOS 7

Install the depedencies for building the source
```bash
sudo yum -y install git gcc flex bison make
sudo yum -y install autoconf libtool
sudo yum -y install lksctp-tools-devel libidn-devel
sudo yum -y install gnutls-devel libgcrypt-devel
sudo yum -y install openssl-devel cyrus-sasl-devel
sudo yum -y install epel-release
sudo yum -y install mongo-c-driver-devel
```

Create a `/etc/yum.repos.d/mongodb-org-3.4.repo` file so that you can install Mong
oDB directly, and then install it.
>[mongodb-org-3.4]  
>name=MongoDB Repository  
>baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/ 
>gpgcheck=1  
>enabled=1  
>gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc  

```bash
sudo yum -y install mongodb-org
```

Compile and install NextEPC.

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
