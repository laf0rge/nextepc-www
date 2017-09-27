---
title: Welcome to LTE World
order: 5
page: guides
---

There is only one setting for this guide. The `Subscriber Information` required for **HSS** should be registered in _Mongo DB_. Let's run the **Web User Interface** as mentioned eariler.

## Register Subscriber Information

```txt
1. Go to Subscriber Menu
2. Click + Button to add Subscriber Information
3. Fill IMSI, Security(K, OP, AMF), APN in the Form
4. Click the `SAVE` Button
```

## Running NextEPC

```bash
sudo ./epcd
```

Turn on your **eNodeB** and **Mobile**. Check Wireshark!

Hopefully, you can see the real packet for TAU/Service Request, Dedicated Bearer, Multiple APN, and S1/X2-Handover.
