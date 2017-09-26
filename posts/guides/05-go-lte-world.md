---
title: Go! LTE World
order: 5
page: guides
---

Everything is ready. Let''s connect your mobile to the Internet.

## NextEPC Configuration

A configuration file is located on the configured installed paths + `etc/nextepc.conf`. It provides a way to config your own LTE environment.

Update **GUMMEI** and **TAI** based on your *eNodeB* configuration.

> etc/nextepc.conf

```json
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
```

You can also configure multiple _GUMMEI_ and _TAI_ using *JSON* array notation [].

## Add Subscriber

Using a web browser, add a subscriber with IMSI.  Do not miss to change *Security Parameter* _(K, OP, AMF)_ and *APN*.

## Starting NextEPC

```bash
sudo ./epcd
```

Turn on your **eNodeB** and **Mobile**.

Check Wireshark! Can you see the packet related TAU, Service Request, Multiple APN, Multiple PCC Rule, and S1/X2-Handover.

Good Luck with you!.

