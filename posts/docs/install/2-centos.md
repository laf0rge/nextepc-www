---
title: CentOS
order: 22
page: docs
---

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

Create a `/etc/yum.repos.d/mongodb-org-3.4.repo` file so that you can install Mongo DB directly, and then install it.
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
