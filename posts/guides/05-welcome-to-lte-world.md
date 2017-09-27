---
title: Welcome to LTE World
order: 5
page: guides
---

There is only one setting for this guide. The _Subscriber Information_ required for **HSS** should be registered in _Mongo DB_. Let's run the **Web User Interface** with `npm run start` as mentioned eariler.

## Register Subscriber Information

Connect http://localhost:3000 using Web Browser.

```txt
1. Go to Subscriber Menu
2. Click + Button to add Subscriber Information
3. Fill IMSI, Security(K, OP, AMF), APN in the Form
4. Click the `SAVE` Button
```

## Running NextEPC

Generally, to use NextEPC in several hosts, you must use an independent daemon called _mmed, sgwd, pgwd, hssd, and pcrfd_.

However, we are preparing a more convenient daemon named **epcd**. It enables to service all five nodes of NextEPC.

```bash
sudo ./epcd
```

Turn on your **eNodeB** and **Mobile**. Check Wireshark!

Hopefully, you can see the real packet for TAU/Service Request, Dedicated Bearer, Multiple APN, and S1/X2-Handover.
