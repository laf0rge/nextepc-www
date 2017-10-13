---
title: FreeBSD
order: 21
page: docs
---

## FreeBSD Release 11.1

Install the depedencies for building the source
```bash
sudo pkg install git gcc bison gsed pkgconf
sudo pkg install autoconf automake libtool
sudo pkg install gnutls libgcrypt libidn
sudo pkg install mongo-c-driver mongdb
```

Compile and install NextEPC.
```bash
autoreconf -iv
./configure --prefix=`pwd`/install
make -j `nproc`
sudo make install
```

Setup your network. For example,
- sudo ifconfig tun0 create
- sudo ifconfig tun0 inet 45.45.0.1 45.45.0.1 netmask 255.255.0.0
- sudo ifconfig em0 alias 10.1.35.214 netmask 255.255.255.255
- sudo ifconfig em0 alias 10.1.35.215 netmask 255.255.255.255
- sudo ifconfig em0 alias 10.1.35.216 netmask 255.255.255.255
- sudo ifconfig em0 alias 10.1.35.217 netmask 255.255.255.255
- sudo ifconfig em0 alias 10.1.35.218 netmask 255.255.255.255
- sudo ifconfig em0 alias 10.1.35.219 netmask 255.255.255.255

Run MongoDB server.
```bash
sudo service mongod start
```

Run NextEPC.
```bash
sudo ./epcd
```
(this should require sudo due to access `/dev/tun0`)
