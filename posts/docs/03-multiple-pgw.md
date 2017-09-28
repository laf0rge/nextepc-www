---
title: Multiple PGW
order: 3
page: docs
---


Let's prepare three hosts. We'll setup MME, SGW, HSS, PCRF on the first host and two PGWs on the second and third hosts.

## Host 1 (MME, SGW, HSS, PCRF)

All configuration is same except PGW field.

```json
{
  DB_URI : "mongodb://localhost/nextepc",
  LOG_PATH : "/Users/acetcom/Documents/git/nextepc/install/var/log/nextepc.log",
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
    FD_CONF_PATH : "/Users/acetcom/Documents/git/nextepc/install/etc/freeDiameter/mme.conf",

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

  HSS :
  {
    FD_CONF_PATH : "/Users/acetcom/Documents/git/nextepc/install/etc/freeDiameter/hss.conf",
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
      },
      {
        S11_IPV4: "10.1.36.216",
        S1U_IPV4: "10.1.36.216",

        S5C_IPV4: "10.1.36.217",
        S5U_IPV4: "10.1.36.217"
      }
    ]
  }

  PCRF :
  {
    FD_CONF_PATH : "/Users/acetcom/Documents/git/nextepc/install/etc/freeDiameter/pcrf.conf",
  }

}
```

The MME maps to the PGW from HSS Subscriber Information. As such, you need to fill PGW IP field of Subscriber Information using Web User Interface.  Let's run four nodes except two PGWs.

```bash
./mmed
./sgwd
./hssd
./pcrfd
```

Note that default PGW can be set in case PGW IP field is omitted in Subscriber Information. In this case, you need to add PGW.NETWORK fleid in the configuration file as shown below.

```json
{
  PGW :
  {
    NETWORK :
    {
      S5C_IPV4: "10.1.35.219",
      S5U_IPV4: "10.1.35.219"
    }
  }
}
```

## Host 2 (First PGW)

```json
{
  LOG_PATH : "/Users/acetcom/Documents/git/nextepc/install/var/log/nextepc.log",
  TRACE:
  {
    GTP: 1,
    OTHERS: 1,
  }

  PGW :
  {
    FD_CONF_PATH : "/Users/acetcom/Documents/git/nextepc/install/etc/freeDiameter/pgw.conf",

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

Run the first PGW.

```bash
./pgwd
```

## Host 3 (Second SGW)

```json
{
  LOG_PATH : "/Users/acetcom/Documents/git/nextepc/install/var/log/nextepc.log",
  TRACE:
  {
    GTP: 1,
    OTHERS: 1,
  }

  PGW :
  {
    FD_CONF_PATH : "/Users/acetcom/Documents/git/nextepc/install/etc/freeDiameter/pgw.conf",

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

Run the second PGW.

```bash
./pgwd
```
