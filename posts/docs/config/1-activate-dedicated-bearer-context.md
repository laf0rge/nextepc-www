---
title: Activate Dedicated Bearer Context
order: 31
page: docs
---


To create a _dedicated bearer_, you need to add a **PCC Rule** to the APN of the Subscriber Information. If QCI and ARP are different from the default bearer in the APN, a _dedicated bearer_ can be created.

#

If you click the button to add a **PCC Rule** in Web User Interface, a form to input _Flow-Direction, Flow-Description, QCI, and ARP_ is showed up.
  
#

The Flow-Descripiton defined in **TS29.212** can be described by the IPFilterRule method of **RFC3588**. The example of Flow-Description is like followings.


  * permit out udp from any 1-65535 to 10.200.136.98/32 23454
  * permit out tcp from 10.200.136.98/24 50020 to any 1-65535
  * permit out udp from any 1-65535 to 10.200.136.98:255.255.0.0 23455
  * permit out ip from any to 10.200.136.98/32


