---
title: Using Other HSS/PCRF
order: 4
page: docs
---


If you use another vendor's HSS or PCRF product, you must generate a key and certificate for the TLS connection.

## Generate Key and Certificate

For the first time, you need to get CA certificate file. For example, `cacert.pem`. And then, `cakey.pem` is generated like the followings:

```bash
openssl req -new -batch -x509 -days 3650 -nodes \
  -newkey rsa:1024 -out cacert.pem \
  -keyout cakey.pem -subj \
  /CN=ca.localdomain/C=KO/ST=Seoul/O=NextEPC
```

The MME key and certificate for TLS connection to the HSS are generated as follows.

```bash
openssl genrsa -out mme.key.pem 1024
openssl req -new -batch -out mme.csr.pem \
  -key mme.key.pem -subj \
  /CN=mme.localdomain/C=KO/ST=Seoul/O=NextEPC
openssl ca -cert cacert.pem -keyfile cakey.pem \
  -in mme.csr.pem -out mme.cert.pem \
  -outdir . -batch
```

The PGW key and certificate are also generated as follows.
```bash
openssl genrsa -out pgw.key.pem 1024
openssl req -new -batch -out pgw.csr.pem \
  -key pgw.key.pem -subj \
  /CN=pgw.localdomain/C=KO/ST=Seoul/O=NextEPC
openssl ca -cert cacert.pem -keyfile cakey.pem \
  -in pgw.csr.pem -out pgw.cert.pem \
  -outdir . -batch
```

## Freediameter Configuration File.

  * /etc/freeDiameter/mme.conf
```json
TLS_Cred="/etc/freeDiameter/mme.cert.pem",
         "/etc/freeDiameter/mme.key.pem";
TLS_CA="/etc/freeDiameter/cacert.pem";
```

  * /etc/freeDiameter/mme.conf
```json
TLS_Cred="/etc/freeDiameter/pgw.cert.pem",
         "/etc/freeDiameter/pgw.key.pem";
TLS_CA="/etc/freeDiameter/cacert.pem";
```

## NextEPC Configration File

```json
{
  LOG_PATH : "/var/log/nextepc.log",
  TRACE:
  {
    S1AP: 1,
    NAS: 1,
    FD: 1,
    GTP: 1,
    OTHERS: 1,
  }

  MME :
  {
    FD_CONF_PATH : "/etc/freeDiameter/mme.conf",

    DEFAULT_PAGING_DRX : "v64",
#RELATIVE_CAPACITY : 255,

    NETWORK :
    {
      S1AP_IPV4 : "10.1.35.215",
      S11_IPV4: "10.1.35.215",
    }
    GUMMEI:
    {
      PLMN_ID : 
      {
        MCC : "001",
        MNC : "01"
      }
      MME_GID : 2,
      MME_CODE : 1
    }
    TAI:
    {
      PLMN_ID :
      {
        MCC: "001",
        MNC: "01",
      }
      TAC: 12345
    }
    SECURITY :
    {
      INTEGRITY_ORDER : [ "EIA1", "EIA2", "EIA0" ]
      CIPHERING_ORDER : [ "EEA0", "EEA1", "EEA2" ]
    }
  }

  SGW :
  {
    NETWORK :
    [
      {
        S11_IPV4: "10.1.35.216",
        S1U_IPV4: "10.1.35.216",

        S5C_IPV4: "10.1.35.217",
        S5U_IPV4: "10.1.35.217"
      }
    ]
  }

  PGW :
  {
    FD_CONF_PATH : "/etc/freeDiameter/pgw.conf",

    NETWORK :
    {
      S5C_IPV4: "10.1.35.219",
      S5U_IPV4: "10.1.35.219"
    }

    TUNNEL: 
    {
      DEV_NAME: "pgwtun"
    }

    IP_POOL :
    {
      CIDR: 45.45.45.0/24
    }

    DNS :
    {
      PRIMARY_IPV4: "8.8.8.8",
      SECONDARY_IPV4: "4.4.4.4"
    }
  }
}
```

## Run MME, SGW, PGW

```bash
./mmed
./sgwd
./pgwd
```
