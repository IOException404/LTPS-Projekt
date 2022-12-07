import { Injectable } from '@angular/core';
import { mcQuestion, scQuestion } from '../shared/questions';

@Injectable({
  providedIn: 'root'
})

export class LPIsimService {
  mcFragen: mcQuestion[];
  scFragen: scQuestion[];

  constructor() {
    this.mcFragen = [
      {
        id:1,
        txt:"QUESTION 7: Which of the following connection types, as seen in nmcli connection show, may exist in NetworkManager? (Choose three.)",
        ans: [ {txt:"A. tcp", right: false, choosen:false }, {txt:"B. ethernet", right: true, choosen:false }, {txt:"C. wifi", right: true, choosen:false }, {txt:"D. ipv6", right: false, choosen:false }, {txt:"E. bridge", right: true, choosen:false }],
        info: "Die Antworten sind: B-C-E"
      },
      {
        id:2,
        txt:"QUESTION 10: Which of the following nmcli subcommands exist? (Choose two.)",
        ans: [{txt:'A. nmcli ethernet', right:false, choosen:false  },  { txt:'B. nmcli device', right: true, choosen:false }, { txt:'C. nmcli wifi', right: false, choosen:false  }, { txt:'D. nmcli address', right: false, choosen:false  }, { txt:'E. nmcli connection', right:true, choosen:false  }],
        info: "Die Antworten sind: B-E"
      },
      {
        id:3,
        txt:"QUESTION 11: Which of the following changes may occur as a consequence of using the command ip? (Choose three.)",
        ans: [{txt:'A. Network interfaces may become active or inactive.', right:true, choosen:false  },  { txt:'B. New name servers may be added to the resolver configuration.', right: false, choosen:false }, { txt:'C. The systems host name may change.', right: false, choosen:false  }, { txt:'D. IP addresses may change.', right:true, choosen:false  }, { txt:'E. The routing table may change.', right:true, choosen:false  }],
        info: "Die Antworten sind: A-D-E"
      },
      {
        id:4,
        txt:"QUESTION 13: Which of the following IPv4 networks are reserved by IANA for private address assignment and private routing? (Choose three.)",
        ans: [{txt:'A. 10.0.0.0/8', right:true, choosen:false},  { txt:'B. 127.0.0.0/8', right: false, choosen:false }, { txt:'C. 169.255.0.0/16', right: false, choosen:false  }, { txt:'D. 172.16.0.0/12', right: true, choosen:false  }, { txt:'E. 192.168.0.0/16', right:true, choosen:false  }],
        info: "Die Antworten sind: A-D-E"
      }
    ]
    this.scFragen = [
      {
        id:1,
        txt:"QUESTION 2: Which of the following is a valid IPv6 address?",
        ans: [{txt:'A. 2001:db8:0g21::1', right:false, choosen:false }, {txt:'B. 2001::db8:4581::1', right: false, choosen:false }, {txt:'C. 2001:db8:3241::1', right: true, choosen:false }, {txt:'D. 2001%db8%9990%%1', right: false, choosen:false }, {txt:'E. 2001.db8.819f..1', right: false, choosen:false }],
        info: "Die Antwort ist: C"
      },
      {
        id:1,
        txt:"QUESTION 5: Which of the following tools, used for DNS debugging, reports not only the response from the name sever but also details about the query?",
        ans: [{txt:'A. dnsq', right: false, choosen:false }, {txt:'B. hostname', right: false, choosen:false }, {txt:'C. dig', right: true, choosen:false }, {txt:'D. dnslookup', right: false, choosen:false }, {txt:'E. zoneinfo', right: false, choosen:false }],
        info: "Die Antwort ist: C"
      },
      {
        id:1,
        txt:"QUESTION 6: Which of the following statements is valid in the file /etc/nsswitch.conf?",
        ans: [{txt:'A. multi on', right: false, choosen:false }, {txt:'B. 192.168.168.4 dns-server', right: false, choosen:false }, {txt:'C. namespaces: net mount procs', right: false, choosen:false }, {txt:'D. include /etc/nsswitch.d/', right: false, choosen:false }, {txt:'E. hosts: files dns', right: true, choosen:false }],
        info: "Die Antwort ist: C"
      }
    ]

   }
   mcAll(): mcQuestion[] {
    return this.mcFragen;
   }
   scAll(): scQuestion[] {
    return this.scFragen;
   }
}
