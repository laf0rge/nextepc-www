---
title: Network Configuration
order: 4
page: guides
---

NextEPC consists of five nodes such as _MME, SGW, PGW, HSS and PCRF_. Basically, each node can be installed in a physically separate host or in the same host.

We will run these five nodes that make up NextEPC in a **Single Host**. The reason is why it is the easiest way to understand how to configure NextEPC network.

## IP Configuration

In order to run _MME, HSS, SGW, PGW, and PCRF_ on a **Single Host**, IP address is set by using **IP aliasing**.

```bash
sudo ifconfig eth1:hss 10.1.35.214/24 up
sudo ifconfig eth1:mme 10.1.35.215/24 up
sudo ifconfig eth1:sgw_s5 10.1.35.216/24 up
sudo ifconfig eth1:sgw_s11 10.1.35.217/24 up
sudo ifconfig eth1:pcrf 10.1.35.218/24 up
sudo ifconfig eth1:pgw 10.1.35.219/24 up
```

## Setup for Data Path

Use the **TUN Driver** to make _Data Path_ to be used by the **PGW**.

```bash
sudo ip tuntap add name pgwtun mode tun
sudo ifconfig pgwtun 45.45.0.1/16 up
```

## Check Configuration File

A configuration file is located `etc/nextepc.conf` from the installed paths. If you need to change the IP address for a particular problem, you should modify `XXXX_IPV4` field in the configuration file.

For example, if you want the IP aliasing address of *PGW* to be _10.1.35.254_, `PGW.NETWORK.S5C_IPV4` and `PGW_NETWORK.S5U_IPV4` field should be updated like the followings.

```json
  PGW :
  {
    FD_CONF_PATH : "/Users/acetcom/Documents/git/nextepc/install/etc/freeDiamete

    NETWORK :
    {
      S5C_IPV4: "10.1.35.254",
      S5U_IPV4: "10.1.35.254"
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
```

## Testing Network Configuration

Once you are done, run the testing script.
```bash
sudo ./test/testepc
```
You can see the simulated packet through **Wireshark**.  _(FILTER : s1ap || gtpv2 || diameter)_

