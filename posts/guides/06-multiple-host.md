---
title: Multiple Host
order: 6
page: guides
---

Basically, NextEPC is designed so that each node can be installed in separate hosts. Now, let''s look at how to configure multiple SGW/PGW hosts environments.

## Multiple SGW Configuration

The MME shall set the IP address for S11 and S1U for several SGWs. Every time the UE connects, the MME allocates the SGW in a round-robin manner.

> etc/nextepc.conf in MME node(10.1.35.215 Host)

```json
SGW :
{
  NETWORK :
  [
    {
      S11_IPV4: "10.1.35.216",
      S1U_IPV4: "10.1.35.216",
    },
    {
      S11_IPV4: "10.1.36.216",
      S1U_IPV4: "10.1.36.216",
    }
  ]
}
```

Run in MME node(10.1.35.215 Host)

```bash
sudo ./mmed
```

## SGW Configuration

Each SGW sets the MME Network Information.

> etc/nextepc.conf in SGW node(10.1.35.216 Host)

```json
MME :
{
  NETWORK :
  {
     S11_IPV4: "10.1.35.215",
  }
}
```

> Run in SGW node(10.1.35.216 Host)

```bash
sudo ./sgwd
```

> etc/nextepc.conf in SGW node(10.1.36.216 Host)

```json
MME :
{
  NETWORK :
  {
     S11_IPV4: "10.1.35.215",
  }
}
```

> Run in SGW node(10.1.36.216 Host)

```bash
sudo ./sgwd
```

Other configuration is similar with single host configuration.

## Multiple PGW Configuration

PGW Network Information can be specified as default in MME node setting or individullay when registering subscriber on the Web User Interface.

> etc/nextepc.conf in MME node(10.1.35.215 Host)

```json
PGW :
{
  NETWORK :
  {
    S5C_IPV4: "10.1.35.219",
    S5U_IPV4: "10.1.35.219"
  },
}
```

If PGW Network Information is included in MME setting, it can be omitted from subscriber information of HSS.
