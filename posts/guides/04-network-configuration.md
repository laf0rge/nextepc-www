---
title: Network Configuration
order: 4
page: guides
---

Now, we will start setting up the network to connect the **eNodeB** and **Mobile** to the installed **NextEPC**. For easy configuration, _MME, HSS, SGW, PGW, and PCRF_ will be setting up on a single host.

## IP Configuration

In order to run _MME, HSS, SGW, PGW, and PCRF_ on a single host, IP address is set by using **IP aliasing**.

```bash
sudo ifconfig eth1:hss 10.1.35.214/24 up
sudo ifconfig eth1:mme 10.1.35.215/24 up
sudo ifconfig eth1:sgw_s5 10.1.35.216/24 up
sudo ifconfig eth1:sgw_s11 10.1.35.217/24 up
sudo ifconfig eth1:pcrf 10.1.35.218/24 up
sudo ifconfig eth1:pgw 10.1.35.219/24 up
```

## Setup for Data Path

Use the **TUN driver** to set the data path to be used by the **PGW**.

```bash
sudo ip tuntap add name pgwtun mode tun
sudo ifconfig pgwtun 45.45.0.1/16 up
```

## Testing Network Configuration

Once you are done, run the testing script.
```bash
sudo ./test/testepc
```
Are you succeeded? You can see the testing packet using **Wireshark**._(filter : s1ap || gtpv2 || diameter)_

