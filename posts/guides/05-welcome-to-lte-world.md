---
title: Welcome to LTE World
order: 5
page: guides
---

## Update GUMMEI and TAI

The followings are the **GUMMEI** and **TAI** of the *MME* currently set to Default. Your *eNodeB* will also have a **PLMN ID** and **TAC** set. Refer to these parameters to change the setting of MME or eNodeB.

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
},
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

For reference, MME can set several GUMMEI and TAI as **JSON array notation** as follows.

```json
GUMMEI:
[
  {
    PLMN_ID : 
    {
      MCC : "001",
      MNC : "01"
    }
    MME_GID : 2,
    MME_CODE : 1
  },
  {
    PLMN_ID : 
    {
      MCC : "005",
      MNC : "05"
    }
    MME_GID : 5,
    MME_CODE : 6
  },
]
TAI:
[
  {
    PLMN_ID :
    {
      MCC: "001",
      MNC: "01",
    }
    TAC: 12345
  },
  {
    PLMN_ID :
    {
      MCC: "005",
      MNC: "05",
    }
    TAC: 6789
  }
]
```

## Register Subscriber Information

There is only one setting for this guide. The _Subscriber Information_ required for **HSS** should be registered in _Mongo DB_. Let's run the **Web User Interface** with `npm run start` as mentioned eariler.

Connect http://localhost:3000 using Web Browser.

  * Go to Subscriber Menu
  * Click + Button to add Subscriber Information
  * Fill IMSI, Security(K, OP, AMF), APN in the Form
  * Click the `SAVE` Button

## Running NextEPC

Generally, to use NextEPC in several hosts, you must use an independent daemon called _mmed, sgwd, pgwd, hssd, and pcrfd_.

However, we are preparing a more convenient daemon named **epcd**. It enables to service all five nodes of NextEPC.

```bash
./epcd
```

Turn on your **eNodeB** and **Mobile**. Check Wireshark!

Hopefully, you can see the real packet for TAU/Service Request, Dedicated Bearer, Multiple APN, and S1/X2-Handover.
