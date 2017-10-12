---
title: Fedora
order: 23
page: docs
---

## Fedora 26

Install the depedencies for building the source
```bash
sudo dnf -y install git gcc flex bison
sudo dnf -y install autoconf libtool
sudo dnf -y install lksctp-tools-devel libidn-devel
sudo dnf -y install gnutls-devel libgcrypt-devel
sudo dnf -y install openssl-devel cyrus-sasl-devel
sudo dnf -y install mongo-c-driver-devel
sudo dnf -y install mongodb-server
```

Compile and install NextEPC.
