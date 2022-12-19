import { Injectable } from '@angular/core';
import { fillQuestion, mcQuestion, scQuestion } from '../shared/questions';

@Injectable({
  providedIn: 'root'
})

export class LPIsimService {
  mcFragen: mcQuestion[];
  scFragen: scQuestion[];
  fillFragen: fillQuestion[];

  constructor() {
    // Multiple Choice Fragen
    this.mcFragen = [
      {
        id: 7,
        txt:"QUESTION 7: Which of the following connection types, as seen in nmcli connection show, may exist in NetworkManager? (Choose three.)",
        ans: [ {txt:"A. tcp", right:false, choosen:false}, {txt:"B. ethernet", right:true, choosen:false}, {txt:"C. wifi", right:true, choosen:false}, {txt:"D. ipv6", right:false, choosen:false }, {txt:"E. bridge", right:true, choosen:false}],
        info: "Die Antworten sind: B-C-E",
        art: "mc"
      },
      {
        id: 10,
        txt:"QUESTION 10: Which of the following nmcli subcommands exist? (Choose two.)",
        ans: [{txt:'A. nmcli ethernet', right:false, choosen:false}, {txt:'B. nmcli device', right: true, choosen:false}, {txt:'C. nmcli wifi', right:false, choosen:false}, { txt:'D. nmcli address', right:false, choosen:false}, { txt:'E. nmcli connection', right:true, choosen:false}],
        info: "Die Antworten sind: B-E",
        art: "mc"
      },
      {
        id: 11,
        txt:"QUESTION 11: Which of the following changes may occur as a consequence of using the command ip? (Choose three.)",
        ans: [{txt:'A. Network interfaces may become active or inactive.', right:true, choosen:false  },  { txt:'B. New name servers may be added to the resolver configuration.', right: false, choosen:false }, { txt:'C. The systems host name may change.', right: false, choosen:false  }, { txt:'D. IP addresses may change.', right:true, choosen:false  }, { txt:'E. The routing table may change.', right:true, choosen:false  }],
        info: "Die Antworten sind: A-D-E",
        art: "mc"
      },
      {
        id: 13,
        txt:"QUESTION 13: Which of the following IPv4 networks are reserved by IANA for private address assignment and private routing? (Choose three.)",
        ans: [{txt:'A. 10.0.0.0/8', right:true, choosen:false},  { txt:'B. 127.0.0.0/8', right: false, choosen:false }, { txt:'C. 169.255.0.0/16', right: false, choosen:false  }, { txt:'D. 172.16.0.0/12', right: true, choosen:false  }, { txt:'E. 192.168.0.0/16', right:true, choosen:false  }],
        info: "Die Antworten sind: A-D-E",
        art: "mc"
      },
      {
        id: 14,
        txt: "QUESTION 14: Which of the following commands configure network interfaces based on the system's existing distribution-specific configuration files? (Choose two.)",
        ans: [{txt: "A. ifconf", right:false, choosen:false}, {txt: "B. ifdown", right: true, choosen:false}, {txt:"C. ifpause", right:false, choosen:false}, {txt:"D. ifstart", right:false, choosen:false}, {txt:"E. ifup", right:true, choosen:false}],
        info: "Die Antworten sind: B-E",
        art: "mc"
      },
      {
        id: 18,
        txt: "QUESTION 18: Which of the following tasks can the date command accomplish? (Choose two.)",
        ans: [{txt: "A. Set the system's date and time.", right:true, choosen:false}, {txt: "B. Set the system's date but not the time.", right: false, choosen:false}, {txt:"C. Calculate the time span between two dates.", right:false, choosen:false}, {txt:"D. Print a calendar for a month or a year.", right:false, choosen:false}, {txt:"E. Display time in a specific format.", right:true, choosen:false}],
        info: "Die Antworten sind: A-E",
        art: "mc"
      },
      {
        id: 20,
        txt: "QUESTION 20: What can be specified with useradd? (Choose two.)",
        ans: [{txt: "A. Commands the user can run using sudo.", right:false, choosen:false}, {txt: "B. The absolute path to the user's home directory.", right: true, choosen:false}, {txt:"C. Which printers are available for the new user.", right:false, choosen:false}, {txt:"D. The SSH keys used to login to the new account.", right:false, choosen:false}, {txt:"E. The numeric user ID (UID) of the user.", right:true, choosen:false}],
        info: "Die Antworten sind: B-E",
        art: "mc"
      },
      {
        id: 23,
        txt: "QUESTION 23: Which of the following fields are available in the standard format of both the global /etc/crontab file as well as in user-specific crontab files? (Choose two.)",
        ans: [{txt: "A. Year", right:false, choosen:false}, {txt: "B. Minute", right: true, choosen:false}, {txt:"C. Username", right:false, choosen:false}, {txt:"D. Effective group ID", right:false, choosen:false}, {txt:"E. Command", right:true, choosen:false}],
        info: "Die Antworten sind: B-E",
        art: "mc"
      },
      {
        id: 28,
        txt: "QUESTION 28: Which of the following statements about systemd-journald are true? (Choose three.)",
        ans: [{txt: "A. It is incompatible with syslog and cannot be installed on a system using regular syslog.", right:false, choosen:false}, {txt: "B. It only processes messages of systemd and not messages of any other tools.", right: true, choosen:false}, {txt:"C. It can pass log messages to syslog for further processing.", right: true, choosen:false}, {txt:"D. It maintains metadata such as _UID or _PID for each message.", right:true, choosen:false}, {txt:"E. It supports syslog facilities such as kern, user, and auth.", right:true, choosen:false}],
        info: "Die Antworten sind: C-D-E",
        art: "mc"
      },
      {
        id: 40,
        txt: "QUESTION 40: Which of the following comparison operators for test work on elements in the file system? (Choose two.)",
        ans: [{txt: "A. -z", right:false, choosen:false}, {txt: "B. -eq", right:false, choosen:false}, {txt: "C. -d", right:true, choosen:false}, {txt: "C. -d", right:true, choosen:false}, {txt: "D. -f", right:true, choosen:false}, {txt: "E. -lt", right:false, choosen:false} ],
        info: "Die Antworten sind: C-D",
        art: "mc"
      },
      {
        id: 60,
        txt: "Which of the following features are provided by SPICE? (Choose two.)",
        ans: [{txt: "A. Connecting local USB devices to remote applications.", right:true, choosen:false}, {txt: "B. Accessing graphical applications on a remote host.", right:true, choosen:false}, {txt: "C. Replacing Xorg as local X11 server.", right:false, choosen:false}, {txt: "D. Downloading and locally installing applications from a remote machine.", right:false, choosen:false}, {txt: "E. Uploading and running a binary program on a remote machine.", right:false, choosen:false}],
        info: "Die Antworten sind: A-B",
        art: "mc"
      },
      {
        id: 65,
        txt: "QUESTION 65: Which of the following are syslog facilities? (Choose two.)",
        ans: [{txt: "A. local5", right:true, choosen:false}, {txt: "B. accounting", right:false, choosen:false}, {txt: "C. mail", right:true, choosen:false}, {txt: "D. postmaster", right:false, choosen:false}, {txt: "E. remote", right:false, choosen:false}],
        info: "Die Antworten sind: A-C",
        art: "mc"
      },
      {
        id: 50,
        txt: "QUESTION 50: Given the following excerpt of the sudo configuration: Jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk Which of the following statements are true? (Choose three.)",
        ans: [{txt: "A. Jane can run /bin/id only after specifying her password.", right:false, choosen:false}, {txt: "B. Jane can run /sbin/fdisk after specifying root's password.", right:false, choosen:false}, {txt: "C. Jane can run /sbin/fdisk after specifying her password.", right:true, choosen:false}, {txt: "D. Jane can run /bin/kill without specifying a password.", right:true, choosen:false}, {txt: "E. Jane can run /bin/id without specifying her password.", right:true, choosen:false}],
        info: "Die Antworten sind: C-D-E",
        art: "mc"
      },
      {
        id: 66,
        txt: "QUESTION 66: Which of the following parameters are used for journalctl to limit the time frame of the output? (Choose two.)",
        ans: [{txt: "A. --since=", right:true, choosen:false}, {txt: "B. --from=", right:false, choosen:false}, {txt: "C. --until=", right:true, choosen:false}, {txt: "D. --upto=", right:false, choosen:false}, {txt: "E. --date=", right:false, choosen:false} ],
        info: "Die Antworten sind: A-C",
        art: "mc"
      },
      {
        id: 68,
        txt: "QUESTION 68: Which of the following commands display a list of jobs in the print queue? (Choose two.)",
        ans: [{txt: "A. cups --list", right:false, choosen:false}, {txt: "B. lprm -l", right:false, choosen:false}, {txt: "C. lpstat", right:true, choosen:false}, {txt: "D. lpr -q", right:false, choosen:false}, {txt: "E. lpq", right:true, choosen:false} ],
        info: "Die Antworten sind: C-E",
        art: "mc"
      },
      {
        id: 69,
        txt: "QUESTION 69: On a system using systemd-journald, which of the following commands add the message Howdy to the system log? (Choose two.)",
        ans: [{txt: "A. append Howdy", right:false, choosen:false}, {txt: "B. logger Howdy", right:true, choosen:false}, {txt: "C. systemd-cat echo Howdy", right:true, choosen:false}, {txt: "D. echo Howdy > /dev/journal", right:false, choosen:false}, {txt: "E. journalctl add Howdy", right:false, choosen:false}],
        info: "Die Antworten sind: B-C",
        art: "mc"
      },
      {
        id: 70,
        txt: "QUESTION 70: Which of the following options in the chrony configuration file define remote time sources? (Choose two.)",
        ans: [{txt: "A. source", right:false, choosen:false}, {txt: "B. clock", right:false, choosen:false}, {txt: "C. remote", right:false, choosen:false}, {txt: "D. pool", right:true, choosen:false}, {txt: "E. server", right:true, choosen:false} ],
        info: "Die Antworten sind: D-E",
        art: "mc"
      },
      {
        id: 78,
        txt: "QUESTION 78: What is true regarding the statement beginning with #! that is found in the first line of script? (Choose two.)",
        ans: [{txt: "A. It prevents the scripts from being executed until the ! is removed.", right:false, choosen:false}, {txt: "B. It triggers the installation of the script's interpreter.", right:false, choosen:false}, {txt: "C. It specifies the path and the arguments of the interpreter used to run the script.", right:true, choosen:false}, {txt: "D. It defines the character encoding of the script.", right:false, choosen:false}, {txt:"E. It is a comment that is ignored by the script interpreter.", right:true, choosen:false} ],
        info: "Die Antworten sind: C-E",
        art: "mc"
      },
      {
        id: 85,
        txt: "QUESTION 85: What is true regarding public and private SSH keys? (Choose two.)",
        ans: [{txt: "A. For each user account, there is exactly one key pair that can be used to log into that account.", right:false, choosen:false}, {txt: "B. The private key must never be revealed to anyone.", right:true, choosen:false}, {txt: "C. Several different public keys may be generated for the same private key.", right:false, choosen:false}, {txt: "D. To maintain the private key's confidentiality, the SSH key pair must be created by its owner.", right:true, choosen:false}, {txt: "E. To allow remote logins, the user's private key must be copied to the remote server.", right:false, choosen:false} ],
        info: "Die Antworten sind: B-D",
        art: "mc"
      },
      {
        id: 95,
        txt: "QUESTION 95: Which of the following states can NetworkManager show regarding the system's network connectivity? (Choose two.)",
        ans: [{txt: "A. 203.0.113.64", right:false, choosen:false}, {txt: "B. 203.0.113.78", right:true, choosen:false}, {txt: "C. 203.0.113.65", right:true, choosen:false}, {txt: "D. 203.0.113.80", right:false, choosen:false}, {txt: "E. 203.0.113.81", right:false, choosen:false} ],
        info: "Die Antworten sind: B-C",
        art: "mc"
      },
      {
        id: 96,
        txt: "QUESTION 96: Which of the following are valid host addresses for the subnet 203.0.113.64/28? (Choose two.)",
        ans: [{txt: "A. For each user account, there is exactly one key pair that can be used to log into that account.", right:false, choosen:false}, {txt: "B. The private key must never be revealed to anyone.", right:true, choosen:false}, {txt: "C. Several different public keys may be generated for the same private key.", right:false, choosen:false}, {txt: "D. To maintain the private key's confidentiality, the SSH key pair must be created by its owner.", right:true, choosen:false}, {txt: "E. To allow remote logins, the user's private key must be copied to the remote server.", right:false, choosen:false} ],
        info: "Die Antworten sind: B-D",
        art: "mc"
      },
      {
        id: 97,
        txt: "QUESTION 97: Which of the following keywords can be used in the file /etc/resolv.conf? (Choose two.)",
        ans: [{txt: "A. substitute", right:false, choosen:false}, {txt: "B. lookup", right:false, choosen:false}, {txt: "C. search", right:true, choosen:false}, {txt: "D. nameserver", right:true, choosen:false}, {txt: "E. method", right:false, choosen:false} ],
        info: "Die Antworten sind: C-D",
        art: "mc"
      },
      {
        id: 99,
        txt: "QUESTION 99: Which of the following commands displays the number of bytes transmitted and received via the eth0 network interface? (Choose two.)",
        ans: [{txt: "A. route -v via eth0", right:false, choosen:false}, {txt: "B. ip stats show dev eth0", right:false, choosen:false}, {txt: "C. netstat -s -i eth0", right:false, choosen:false}, {txt: "D. ifconfig eth0", right:true, choosen:false}, {txt: "E. ip -s link show eth0", right:true, choosen:false} ],
        info: "Die Antworten sind: D-E",
        art: "mc"
      },
      {
        id: 101,
        txt: "QUESTION 101: Which of the following commands will delete the default gateway from the system's IP routing table? (Choose two.)",
        ans: [{txt: "A. ifconfig unset default", right:false, choosen:false}, {txt: "B. route del default", right:true, choosen:false}, {txt: "C. ip route del default", right:true, choosen:false}, {txt: "D. netstat -r default", right:false, choosen:false}, {txt: "E. sysctl ipv4.default_gw=0", right:false, choosen:false} ],
        info: "Die Antworten sind: B-C",
        art: "mc"
      },
      {
        id: 103,
        txt: "QUESTION 103: What is true about NetworkManager on a Linux system that uses its distribution's mechanisms to configure network interfaces? (Choose two.)",
        ans: [{txt: "A. NetworkManager reconfigures all network interfaces to use DHCP unless they are specifically managed by NetworkManager.", right:false, choosen:false}, {txt: "B. NetworkManager must be explicitly enabled for each interface it should manage.", right:false, choosen:false}, {txt: "C. NetworkManager by default does not change interfaces which are already configured.", right:true, choosen:false}, {txt: "D. NetworkManager disables all interfaces which were not configured by NetworkManager.", right:false, choosen:false}, {txt: "E. NetworkManager can be configured to use the distribution's network interface configuration.", right:true, choosen:false} ],
        info: "Die Antworten sind: C-E",
        art: "mc"
      },
      {
        id: 105,
        txt: "QUESTION 105: Which of the following environment variables can be defined in locale.conf? (Choose two.)",
        ans: [{txt: "A. LC_ALL", right:true, choosen:false}, {txt: "B. LC_USERNAME", right:false, choosen:false}, {txt: "C. LC_UTF8", right:false, choosen:false}, {txt: "D. LC_GEOGRAPHY", right:false, choosen:false}, {txt: "E. LC_TIME", right:true, choosen:false} ],
        info: "Die Antworten sind: A-E",
        art: "mc"
      },
      {
        id: 110,
        txt: "QUESTION 110: Which of the following fields can be found in the /etc/group file? (Choose two.)",
        ans: [{txt: "A. The home directory of the group.", right:false, choosen:false}, {txt: "B. The list of users that belong to the group.", right:true, choosen:false}, {txt: "C. The name of the group.", right:true, choosen:false}, {txt: "D. The default group ACL.", right:false, choosen:false}, {txt: "E. The description of the group.", right:false, choosen:false} ],
        info: "Die Antworten sind: B-C",
        art: "mc"
      },
      {
        id: 119,
        txt: "QUESTION 119: Which of the following tasks are handled by a display manager like XDM or KDM? (Choose two.)",
        ans: [{txt: "A. Configure additional devices like new monitors or projectors when they are attached.", right:false, choosen:false}, {txt: "B. Start and prepare the desktop environment for the user.", right:true, choosen:false}, {txt: "C. Create an X11 configuration file for the current graphic devices and monitors.", right:false, choosen:false}, {txt: "D. Lock the screen when the user was inactive for a configurable amount of time.", right:false, choosen:false}, {txt: "E. Handle the login of a user.", right:true, choosen:false} ],
        info: "Die Antworten sind: B-E",
        art: "mc"
      }
    ];


    // Single Choice Fragen
    this.scFragen = [
      {
        id: 2,
        txt:"QUESTION 2: Which of the following is a valid IPv6 address?",
        ans: [{txt:'A. 2001:db8:0g21::1', right:false, choosen:false }, {txt:'B. 2001::db8:4581::1', right: false, choosen:false }, {txt:'C. 2001:db8:3241::1', right: true, choosen:false }, {txt:'D. 2001%db8%9990%%1', right: false, choosen:false }, {txt:'E. 2001.db8.819f..1', right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 5,
        txt:"QUESTION 5: Which of the following tools, used for DNS debugging, reports not only the response from the name sever but also details about the query?",
        ans: [{txt:'A. dnsq', right: false, choosen:false }, {txt:'B. hostname', right: false, choosen:false }, {txt:'C. dig', right: true, choosen:false }, {txt:'D. dnslookup', right: false, choosen:false }, {txt:'E. zoneinfo', right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 6,
        txt:"QUESTION 6: Which of the following statements is valid in the file /etc/nsswitch.conf?",
        ans: [{txt:'A. multi on', right: false, choosen:false }, {txt:'B. 192.168.168.4 dns-server', right: false, choosen:false }, {txt:'C. namespaces: net mount procs', right: false, choosen:false }, {txt:'D. include /etc/nsswitch.d/', right: false, choosen:false }, {txt:'E. hosts: files dns', right: true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 8,
        txt:"QUESTION 8: On a Linux workstation, the route command takes a long time before printing out the routing table. Which of the following errors does that indicate?",
        ans: [{txt:'A. The local routing information may be corrupted and must be re-validated using a routing protocol.', right:false, choosen:false }, {txt:'B. One of the routers in the routing table is not available which causes the automatic router failure detection mechanism (ARF-D) to wait for a timeout.', right: false, choosen:false }, {txt:'C. There may accidentally be more than one default router in which case a default router election has to be done on the network in order to choose one router as the default.', right: false, choosen:false }, {txt:'D. The Linux Kernel Routing Daemon (LKRD) is not running and should be started using its init script or systemd unit.', right: false, choosen:false }, {txt:'E. DNS resolution may not be working as route by default tries to resolve names of routers and destinations and may run into a timeout.', right: true, choosen:false}],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 9,
        txt:"QUESTION 9: What is true about the Hop Limit field in the IPv6 header?",
        ans: [{txt:'A. The field is not changed during the transport of a package.', right:false, choosen:false }, {txt:'B. The field is transmitted within a hop-by-hop extension header.', right: false, choosen:false }, {txt:'C. Each router forwarding the packet increases the fields value.', right: false, choosen:false }, {txt:'D. Each router forwarding the packet decreases the fields value.', right: true, choosen:false }, {txt:'E. For multicast packages, the fields value is always 1.', right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 12,
        txt:"QUESTION 12: How many IP addresses can be used for unique hosts inside the IPv4 subnet 192.168.2.128/26?",
        ans: [{txt:'A. 33', right:false, choosen:false }, {txt:'B. 14', right: false, choosen:false }, {txt:'C. 30', right: false, choosen:false }, {txt:'D. 62', right: true, choosen:false }, {txt:'E. 126', right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 15,
        txt:"QUESTION 15: Which of the following statements is true if the UID of a regular user is identical to the GID of a group? A. UID have precedence over GIDs, therefore the user is available while the group doesn't.",
        ans: [{txt:'A. UID have precedence over GIDs, therefore the user is available while the group doesnt.', right:false, choosen:false }, {txt:'B. The user as well as the group are not available to avoid ambiguity due to the ID conflict.', right: false, choosen:false }, {txt:'C. UIDs and GIDs are independent of each other, therefore the user as well as the group are still available', right: true, choosen:false }, {txt:'D. The user is the only member of the group, even if the group configuration contains other members.', right: false, choosen:false }, {txt:'E. GIDs have precedence over UIDs, therefore the group is available while the user isnt.', right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 16,
        txt:"QUESTION 16: Which of the following information is stored in /etc/shadow for each user?",
        ans: [{txt:'A. The timestamp of the users last login', right:false, choosen:false }, {txt:'B. The users private SSH keys', right: false, choosen:false }, {txt:'C. The hashed password of the user', right: true, choosen:false }, {txt:'D. The numerical user ID (UID)', right: false, choosen:false }, {txt:'E. The path to the users home directory', right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 17,
        txt:"QUESTION 17: Which of the following commands shows all active systemd timers?",
        ans: [{txt:'A. systemctl-timer show', right:false, choosen:false }, {txt:'B. timectl list', right: false, choosen:false }, {txt:'C. systemctl -t', right: false, choosen:false }, {txt:'D. systemctl list-timers', right: true, choosen:false }, {txt:'E. timeq', right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 21,
        txt:"QUESTION 21: What is true about the file /etc/localtime?",
        ans: [{txt:'A. It is a plain text file containing a string such as Europe/Berlin', right:false, choosen:false }, {txt:'B. It is created and maintained by the NTP service based on the location of the systems IP address.', right: false, choosen:false }, {txt:'C. It is a symlink to /sys/device/clock/ltime and always contains the current local time.', right: false, choosen:false }, {txt:'D. After changing this file, newtzconfighas to be run to make the changes effective.', right: false, choosen:false }, {txt:'E. It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin.', right: true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 24,
        txt:"QUESTION 24: Which of the following commands should be executed when starting a login shell in order to change the language of messages for an internationalized program to Portuguese (pt)?",
        ans: [{txt:'A. export LANGUAGE=“pt"', right:false, choosen:false }, {txt:'B. export LC_MESSAGES=“pt"', right: true, choosen:false }, {txt:'C. export UI_MESSAGES=“pt"', right: false, choosen:false }, {txt:'D. export MESSAGE=“pt"', right: false, choosen:false }, {txt:'E. export ALL_MESSAGES=“pt"', right: false, choosen:false }],
        info: "Die Antwort ist: B",
        art: "sc"
      },
      {
        id: 25,
        txt:"QUESTION 25: Which of the following files assigns a user to its primary group?",
        ans: [{txt:'A. /etc/pgroup', right:false, choosen:false }, {txt:'B. /etc/shadow', right: false, choosen:false }, {txt:'C. /etc/passwd', right:true, choosen:false }, {txt:'D. /etc/group', right: false, choosen:false }, {txt:'E. /etc/gshadow', right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 26,
        txt:"QUESTION 26: Which of the following steps prevents a user from obtaining an interactive login session?",
        ans: [{txt:'A. Setting the UID for the user to 0.', right:false, choosen:false }, {txt:'B. Running the command chsh -s /bin/false with the user name.', right: true, choosen:false }, {txt:'C. Removing the user from the group staff.', right: false, choosen:false }, {txt:'D. Adding the user to /etc/noaccess.', right: false, choosen:false }, {txt:'E. Creating a .nologin file in the users home directory.', right: false, choosen:false }],
        info: "Die Antwort ist: B",
        art: "sc"
      },
      {
        id: 30,
        txt:"QUESTION 30: Which option in the chrony configuration file changes the initial interval of polls to a NTP server in order to speed up the initial synchronization?",
        ans: [{txt:'A. iburst', right:true, choosen:false }, {txt:'B. quickstart', right: false, choosen:false }, {txt:'C. fast', right: false, choosen:false }, {txt:'D. fsync', right: false, choosen:false }, {txt:'E. flood', right: false, choosen:false }],
        info: "Die Antwort ist: A",
        art: "sc"
      },
      {
        id: 31,
        txt:"QUESTION 31: Which of the following commands is used to rotate, compress, and mail system logs?",
        ans: [{txt:'A. logrotate', right:true, choosen:false }, {txt:'B. striplog', right: false, choosen:false }, {txt:'C. syslogd --rotate', right: false, choosen:false }, {txt:'D. rotatelog', right: false, choosen:false }, {txt:'E. logger', right: false, choosen:false }],
        info: "Die Antwort ist: A",
        art: "sc"
      },
      {
        id: 32,
        txt:"QUESTION 32: Why is the correct configuration of a system's time zone important?",
        ans: [{txt:'A. Because the timezone is included in checksum calculations and timezone changes invalidate existing checksums.', right:false, choosen:false }, {txt:'B. Because the time zone is saved as part of the modification times of files and cannot be changed after a file is created.', right:true, choosen:false }, {txt:'C. Because the environment variables LANG and LC_MESSAGES are, by default, set according to the time zone.', right: false, choosen:false }, {txt:'D. Because NTP chooses servers nearby based on the configured time zone.', right: false, choosen:false }, {txt:'E. Because the conversion of Unix timestamps to local time relies on the time zone configuration.', right: false, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 35,
        txt:"QUESTION 35: Which of the following commands lists all queued print jobs?",
        ans: [{txt:'A. lpd', right:false, choosen:false }, {txt:'B. lpr', right: false, choosen:false }, {txt:'C. lp', right: false, choosen:false }, {txt:'D. lsq', right: false, choosen:false }, {txt:'E. lpq', right:true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 36,
        txt:"QUESTION 36: Which of the following entries in /etc/syslog.conf writes all mail related events to the file /var/log/maillog and sends all critical events to the remote server logger.example.com?",
        ans: [{txt:'A. mail.* /var/log/maillog \n mail,crit @logger.example.org', right:false, choosen:false }, {txt:'B. mail.* /var/log/maillog \n mail.crit syslog://logger.example.org', right: false, choosen:false }, {txt:'C. mail /var/log/maillog \n mail.crit @logger.example.org', right: false, choosen:false }, {txt:'D. mail.* /var/log/maillog \n mail.crit @logger.example.org', right:true, choosen:false }, {txt:'E. mail * /var/log/maillog \n mail crit @logger.example.org', right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 38,
        txt:"QUESTION 38: Which of the following protocols is related to the term open relay?",
        ans: [{txt:'A. SMTP', right:true, choosen:false }, {txt:'B. POP3', right: false, choosen:false }, {txt:'C. NTP', right: false, choosen:false }, {txt:'D. IMAP', right: false, choosen:false }, {txt:'E. LDAP', right: false, choosen:false }],
        info: "Die Antwort ist: A",
        art: "sc"
      },
      {
        id: 39,
        txt:"QUESTION 39: Which of the following commands displays all environment and shell variables?",
        ans: [{txt:'A. getargs', right:false, choosen:false }, {txt:'B. lsenv', right: false, choosen:false }, {txt:'C. ls', right: false, choosen:false }, {txt:'D. env', right: true, choosen:false }, {txt:'E. lsshell', right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 41,
        txt:"QUESTION 41: What information is provided by the echo $$ command?",
        ans: [{txt:'A. The process ID of the current shell.', right:true, choosen:false }, {txt:'B. The process ID for the following command.', right: false, choosen:false }, {txt:'C. The process ID of the last command executed.', right: false, choosen:false }, {txt:'D. The process ID of the last command which has been placed in the background.', right: false, choosen:false }, {txt:'E. The process ID of the echo command.', right: false, choosen:false }],
        info: "Die Antwort ist: A",
        art: "sc"
      },
      {
        id: 42,
        txt:"QUESTION 42: Which command makes the shell variable named VARIABLE visible to subshells?",
        ans: [{txt:'A. export $VARIABLE', right:false, choosen:false }, {txt:'B. env VARIABLE', right: false, choosen:false }, {txt:'C. set $VARIABLE', right: false, choosen:false }, {txt:'D. set VARIABLE', right: false, choosen:false }, {txt:'E. export VARIABLE', right:true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 43,
        txt:"QUESTION 43: What output is produced by the following command sequence? echo '1 2 3 4 5 6' | while read a b c; do echo result: $c $b $a; done",
        ans: [{txt:'A. result: 6 5 4', right:false, choosen:false }, {txt:'B. result: 1 2 3 4 5 6', right: false, choosen:false }, {txt:'C. result: 3 4 5 6 2 1', right: true, choosen:false }, {txt:'D. result: 6 5 4 3 2 1', right: false, choosen:false }, {txt:'E. result: 3 2 1', right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 44,
        txt:"QUESTION 44: Which of the following configuration files should be modified to globally set shell variables for all users?",
        ans: [{txt:'A. /etc/profile', right:true, choosen:false }, {txt:'B. /etc/bashrc', right: false, choosen:false }, {txt:'C. ~/.bash_profile', right: false, choosen:false }, {txt:'D. /etc/.bashrc', right: false, choosen:false }, {txt:'E. /etc/shellenv', right: false, choosen:false }],
        info: "Die Antwort ist: A",
        art: "sc"
      },
      {
        id: 45,
        txt:"QUESTION 45: What output does the command seq 10 produce?",
        ans: [{txt:'A. A continuous stream of numbers increasing in increments of 10 until the command is stopped.', right:false, choosen:false }, {txt:'B. It creates no output because a second parameter is missing.', right: false, choosen:false }, {txt:'C. The number 0 through 9 with one number per line.', right: false, choosen:false }, {txt:'D. The number 10 to standard output.', right: false, choosen:false }, {txt:'E. The numbers 1 through 10 with one number per line.', right:true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 47,
        txt:"QUESTION 47: Which of the following commands can be used to limit the amount of memory a user may use?",
        ans: [{txt:'A. umask', right:false, choosen:false }, {txt:'B. usermod', right: false, choosen:false }, {txt:'C. passwd', right: false, choosen:false }, {txt:'D. ulimit', right:true, choosen:false }, {txt:'E. chage', right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 48,
        txt:"QUESTION 48: What is a purpose of an SSH host key?",
        ans: [{txt:'A. It must be sent by any SSH client in addition to a user key in order to identify the clients host.', right:false, choosen:false }, {txt:'B. It is root key by which all user SSH keys must be signed.', right: false, choosen:false }, {txt:'C. It provides the servers identity information to connecting SSH clients.', right: true, choosen:false }, {txt:'D. It authenticates any user that logs into a remote machine from the keys host.', right: false, choosen:false }, {txt:'E. It is used by system services like cron, syslog or a backup job to automatically connect to remote hosts.', right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 49,
        txt:"QUESTION 49: What is the purpose of TCP wrapper?",
        ans: [{txt:'A. Manage and adjust bandwidth used by TCP services.', right:false, choosen:false }, {txt:'B. Bind a network service to a TCP port.', right: false, choosen:false }, {txt:'C. Encapsulate TCP messages in IP packets.', right: false, choosen:false }, {txt:'D. Add SSL support to plain text TCP services.', right: false, choosen:false }, {txt:'E. Limit access to a network service.', right:true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 51,
        txt:"QUESTION 51: Which configuration file contains the default options for SSH clients?",
        ans: [{txt:'A. /etc/ssh/sshd_config', right:false, choosen:false }, {txt:'B. /etc/ssh/ssh', right: false, choosen:false }, {txt:'C. /etc/ssh/ssh_config', right: true, choosen:false }, {txt:'D. /etc/ssh/client', right: false, choosen:false }, {txt:'E. /etc/ssh/ssh_client', right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 52,
        txt:"QUESTION 52: Depending on a system's configuration, which of the following files can be used to enable and disable network services running on this host?",
        ans: [{txt:'A. /etc/profile', right:false, choosen:false }, {txt:'B. /etc/xinetd.conf', right: true, choosen:false }, {txt:'C. /etc/ports', right: false, choosen:false }, {txt:'D. /etc/services', right: false, choosen:false }, {txt:'E. /etc/host.conf', right: false, choosen:false }],
        info: "Die Antwort ist: B",
        art: "sc"
      },
      {
        id: 53,
        txt:"QUESTION 53: Which of the following commands can identify the PID or a process which opened a TCP port?",
        ans: [{txt:'A. ptrace', right:false, choosen:false }, {txt:'B. strace', right: false, choosen:false }, {txt:'C. debug', right: false, choosen:false }, {txt:'D. lsof', right: true, choosen:false }, {txt:'E. nessus', right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 56,
        txt:"QUESTION 56: Which of the following commands preloads and manages existing SSH keys that are used for automatic authentication while logging in to other machines using SSH?",
        ans: [{txt:'A. sshd', right:false, choosen:false }, {txt:'B. ssh-keyring', right: false, choosen:false }, {txt:'C. ssh-keygen', right: false, choosen:false }, {txt:'D. ssh-pki', right: false, choosen:false }, {txt:'E. ssh-agent', right:true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 57,
        txt:"QUESTION 57: On a machine running several X servers, how do programs identify the different instances of the X11 server?",
        ans: [{txt:'A. By a fixed UUID that is defined in the X11 configuration file.', right:false, choosen:false }, {txt:'B. By a display name like :1 .', right: true, choosen:false }, {txt:'C. By the name of the user that runs the X server like x11: bob.', right: false, choosen:false }, {txt:'D. By a device name like /dev/X11/xservers/1.', right: false, choosen:false }, {txt:'E. By a unique IPv6 address from the fe80::/64subnet.', right: false, choosen:false }],
        info: "Die Antwort ist: B",
        art: "sc"
      },
      {
        id: 58,
        txt:"QUESTION 58: What is the purpose of a screen reader?",
        ans: [{txt:'A. It manages virtual keyboards on touch screen displays.', right:false, choosen:false }, {txt:'B. It reads the parameters of the attached monitors and creates an appropriate X11 configuration.', right: false, choosen:false }, {txt:'C. It displays lines and markers to help people use speed reading techniques.', right: false, choosen:false }, {txt:'D. It manages and displays files that contain e-books.', right: false, choosen:false }, {txt:'E. It reads displayed text to accommodate the needs of blind or visually impaired people.', right:true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 59,
        txt:"QUESTION 59: The X11 configuration file xorg.conf is grouped into sections. How is the content of the section SectionName represented?",
        ans: [{txt:'A. It is placed in curly brackets as in Section SectionName {…}.', right:false, choosen:false }, {txt:'B. It is placed between the tags <Section name=“SectionName"> and </Section>.', right: false, choosen:false }, {txt:'C. It is placed between a line containing Section “SectionName" and a line containing EndSection.', right:true, choosen:false }, {txt:'D. It is placed after the row [SectionName].', right: false, choosen:false }, {txt:'E. It is placed after an initial unindented Section “SectionName" and must be indented by exactly one tab character.', right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 61,
        txt:"QUESTION 61: Where is the systemd journal stored?",
        ans: [{txt:'A. /var/jlog/and /var/jlogd/', right:false, choosen:false }, {txt:'B. /proc/log/and /proc/klog/', right: false, choosen:false }, {txt:'C. /run/log/journal/ or /var/log/journal/', right:true, choosen:false }, {txt:'D. /var/log/syslog.binor /var/log/syslog.jrn', right: false, choosen:false }, {txt:'E. /etc/systemd/journal/or /usr/lib/systemd/journal/', right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 62,
        txt:"QUESTION 62: Which of the following is true regarding the command sendmail?",
        ans: [{txt:'A. With any MTA, the sendmail command must be run periodically by the cron daemon.', right:false, choosen:false }, {txt:'B. When using systemd, sendmail is an alias to relayctl.', right: false, choosen:false }, {txt:'C. The sendmail command prints the MTAs queue history of which mails have been sent successfully.', right: false, choosen:false }, {txt:'D. It is only available when the sendmail MTA is installed.', right: false, choosen:false }, {txt:'E. All common MTAs, including Postfix and Exim, provide a sendmail command.', right:true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 63,
        txt:"QUESTION 63: Which file inside the CUPS configuration directory contains the settings of the printers?",
        ans: [{txt:'A. cups-devices.conf', right:false, choosen:false }, {txt:'B. snmp.conf', right: false, choosen:false }, {txt:'C. printers.conf', right:true, choosen:false }, {txt:'D. printcap.conf', right: false, choosen:false }, {txt:'E. cupsd.conf', right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 67,
        txt:"QUESTION 67: What is true regarding the file ~/.forward?",
        ans: [{txt:'A. When configured correctly ~/.forward can be used to forward each incoming mail to one or more other recipients.', right:true, choosen:false }, {txt:'B. After editing ~/.forward the user must run newaliases to make the mail server aware of the changes.', right: false, choosen:false }, {txt:'C. Using ~/.forward, root may configure any email address whereas all other users may configure only their own addresses.', right: false, choosen:false }, {txt:'D. As ~/.forward is owned by the MTA and not writable by the user, it must be edited using the editaliases command.', right: false, choosen:false }, {txt:'E. By default, only ~/.forward files of users in the group mailq are processed while all other users ~/.forward files are ignored.', right: false, choosen:false }],
        info: "Die Antwort ist: A",
        art: "sc"
      },
      {
        id: 72,
        txt:"QUESTION 72: Which of the following situations is observed and corrected by an NTP client?",
        ans: [{txt:'A. The skew in time between the system clock and the computers hardware clock.', right:false, choosen:false }, {txt:'B. The physical location and the time zone configuration.', right: false, choosen:false }, {txt:'C. Changes in the time zone of the current computers location.', right: false, choosen:false }, {txt:'D. Adjustment needed to support Daylight Saving Time.', right: false, choosen:false }, {txt:'E. The skew in time between the system clock and the reference clock.', right: true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 73,
        txt:"QUESTION 73: If an alias ls exists, which of the following commands updates the alias to point to the command ls -l instead of the alias's current target?",
        ans: [{txt:`A. set ls='ls -l'`, right:false, choosen:false }, {txt:`B. alias ls='ls -l`, right: true, choosen:false }, {txt:`C. alias --force ls='ls -l'`, right: false, choosen:false }, {txt:`D. alias --update ls ls='ls -l'`, right: false, choosen:false }, {txt:`E. realias ls='ls -l'`, right: false, choosen:false }],
        info: "Die Antwort ist: B",
        art: "sc"
      },
      {
        id: 74,
        txt: `QUESTION 74: Which of the following commands puts the output of the command date into the shell variable mydate?`,
        ans: [{txt:`A. mydate="date"`, right:false, choosen:false }, {txt:`B. mydate="exec date"`, right: false, choosen:false }, {txt:`C. mydate="$((date))"`, right: false, choosen:false }, {txt:`D. mydate="$(date)"`, right: true, choosen:false }, {txt:`E. mydate="${'date'}"`, right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 75,
        txt: `QUESTION 75: What information is shown by the echo $? command?`,
        ans: [{txt:`A. The process ID of the echo command.`, right:false, choosen:false }, {txt:`B. The exit value of the command executed immediately before echo.`, right: true, choosen:false }, {txt:`C. The process ID which will be used for the next command.`, right: false, choosen:false }, {txt:`D. The exit value of the echo command.`, right: false, choosen:false }, {txt:`E. The process ID of the current shell.`, right: false, choosen:false }],
        info: "Die Antwort ist: B",
        art: "sc"
      },
      {
        id: 76,
        txt: `QUESTION 76: Which of the following files is not read directly by a Bash login shell?`,
        ans: [{txt:`A. ~/.bashrc`, right:true, choosen:false }, {txt:`B. ~/.bash_profile`, right: false, choosen:false }, {txt:`C. ~/.bash_login`, right: false, choosen:false }, {txt:`D. ~/.profile`, right: false, choosen:false }, {txt:`E. /etc/profile`, right: false, choosen:false }],
        info: "Die Antwort ist: A",
        art: "sc"
      },
      {
        id: 77,
        txt: `QUESTION 77: What is true about the file .profile in a user's home directory?`,
        ans: [{txt:`A. It must be executable.`, right:false, choosen:false }, {txt:`B. It must call the binary of the login shell.`, right: false, choosen:false }, {txt:`C. It must use a valid shell script syntax.`, right: true, choosen:false }, {txt:`D. It must start with a shebang.`, right: false, choosen:false }, {txt:`E. It must be readable for its owner only.`, right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 79,
        txt: `QUESTION 79: What output does the command seq 1 5 20 produce?`,
        ans: [{txt:`A. 1 5 10 15`, right:false, choosen:false }, {txt:`B. 1 6 11 16`, right: true, choosen:false }, {txt:`C. 1 2 3 4`, right: false, choosen:false }, {txt:`D. 2 3 4 5`, right: false, choosen:false }, {txt:`E. 5 10 15 20`, right: false, choosen:false }],
        info: "Die Antwort ist: B",
        art: "sc"
      },
      {
        id: 82,
        txt: `QUESTION 82: Which command is used to set restrictions on the size of a core file that is created for a user when a program crashes?`,
        ans: [{txt:`A. core`, right:false, choosen:false }, {txt:`B. edquota`, right: false, choosen:false }, {txt:`C. quota`, right: false, choosen:false }, {txt:`D. ulimit`, right:true, choosen:false }, {txt:`E. ktrace`, right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 80,
        txt: `QUESTION 80: Which of the following commands lists all defines variables and functions within Bash?`,
        ans: [{txt:`A. env`, right:false, choosen:false }, {txt:`B. export`, right: false, choosen:false }, {txt:`C. env -a`, right: false, choosen:false }, {txt:`D. set`, right:true, choosen:false }, {txt:`E. echo $ENV`, right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 81,
        txt: `QUESTION 81: What information related to a user account is modified using the chage command?`,
        ans: [{txt:`A. Default ownership for new files`, right:false, choosen:false }, {txt:`B. Group membership`, right: false, choosen:false }, {txt:`C. Set of commands available to the user`, right: false, choosen:false }, {txt:`D. Password expiry information`, right: true, choosen:false }, {txt:`E. Default permissions for new files`, right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 83,
        txt: `QUESTION 83: How do shadow passwords improve the password security in comparison to standard no-shadow
        password?`,
        ans: [{txt:`A. Regular users do not have access to the password hashes of shadow passwords.`, right:true, choosen:false }, {txt:`B. Every shadow password is valid for 45 days and must be changed afterwards.`, right: false, choosen:false }, {txt:`C. The system's host key is used to encrypt all shadow passwords.`, right: false, choosen:false }, {txt:`D. Shadow passwords are always combined with a public key that has to match the user's private key.`, right: false, choosen:false }, {txt:`E. Shadow passwords are stored in plain text and can be checked for weak passwords.`, right: false, choosen:false }],
        info: "Die Antwort ist: A",
        art: "sc"
      },
      {
        id: 86,
        txt: `QUESTION 86: Which of the following commands finds all files owned by root that have the SetUID bit set?`,
        ans: [{txt:`A. find / -user root -perm -4000`, right:true, choosen:false }, {txt:`B. find / -user 0 -mode +s`, right: false, choosen:false }, {txt:`C. find / -owner root -setuid`, right: false, choosen:false }, {txt:`D. find / -owner 0 -permbits 0x100000000`, right: false, choosen:false }, {txt:`E. find / --filter uid=1 --filter pers=u+s`, right: false, choosen:false }],
        info: "Die Antwort ist: A",
        art: "sc"
      },
      {
        id: 84,
        txt: `QUESTION 84: After editing the TCP wrapper configuration to grant specific hosts access to a service, when do these
        changes become effective?`,
        ans: [{txt:`A. The new configuration becomes effective after restarting the respective service.`, right:false, choosen:false }, {txt:`B. The new configuration becomes effective at the next system reboot.`, right: false, choosen:false }, {txt:`C. The new configuration becomes effective when the last established connection to the service is closed.`, right: false, choosen:false }, {txt:`D. The new configuration becomes effective after restarting the tcpd service.`, right: false, choosen:false }, {txt:`E. The new configuration becomes effective immediately for all new connections.`, right: true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 89,
        txt: `QUESTION 89: Which mechanism does ssh use to interact with the SSH agent?`,
        ans: [{txt:`A. Connecting to port 2222 which is used by the system-wide SSH agent.`, right:false, choosen:false }, {txt:`B. Using the fixed socket .ssh-agent/ipc.`, right: false, choosen:false }, {txt:`C. Creating an alias replacing ssh with calls to ssh-agent.`, right: false, choosen:false }, {txt:`D. Starting ssh-agent as a child process for each ssh invocation.`, right: false, choosen:false }, {txt:`E. Evaluating environment variables such as SSH_AUTH_SOCK.`, right: true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 92,
        txt: `QUESTION 92: What is true about the following command?
        nmcli device wifi connect WIFIoI`,
        ans: [{txt:`A. NetworkManager opens a new public hotspot with the SSID WIFIoI.`, right:false, choosen:false }, {txt:`B. NetworkManager creates an unconfigured new virtual network interface named WIFIoI.`, right: false, choosen:false }, {txt:`C. NetworkManager creates a new wifi connection WIFIoI and activates it.`, right: true, choosen:false }, {txt:`D. NetworkManager returns an error in case the connection WIFIoI does not exist.`, right: false, choosen:false }, {txt:`E. NetworkManager returns an error because WIFIoI is an invalid wifi device.`, right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 93,
        txt: `QUESTION 93: Which of the commands below might have produced the following output?
        ;; global options: +cmd
        ;; Got answer:
        ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 14368
        ;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

        ;; OPT PSEUDOSECTION:
        ; EDNS: version: 0, flags:; udp: 4096
        ;; QuESTION SECTION:
        ;www.example.org.               IN      NS

        ;; AUTHORITY SECTION:
        example.org.            3600    IN      SOA     ns.icann.org. noc.dns.icann.org. 2019121418 7200 3600 1209600 3600

        ;; Query time: 96 msec
        ;; SERVER: 172.21.0.9#53(172.21.0.9)
        ;; WHEN: Di Jun 23 13:57:34 CEST 2020
        ;; MSG SIZE  rcvd: 97`,
        ans: [{txt:`A. dig -t mx www.example.org`, right:false, choosen:false }, {txt:`B. dig www.example.org`, right: false, choosen:false }, {txt:`C. dig -t ns www.example.org`, right: true, choosen:false }, {txt:`D. dig -t a www.example.org`, right: false, choosen:false }, {txt:`E. dig -t soa www.example.org`, right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 91,
        txt: `QUESTION 91: Which of the following is true about IPv6?`,
        ans: [{txt:`A. IPv6 no longer supports broadcast addresses.`, right:true, choosen:false }, {txt:`B. With IPv6, the TCP port numbers of most services have changed.`, right: false, choosen:false }, {txt:`C. IPv4 addresses can be used without any change with IPv6.`, right: false, choosen:false }, {txt:`D. IPv6 no longer supports multicast addresses.`, right: false, choosen:false }, {txt:`E. For IPv6, UDP and TCP have been replaced by the Rapid Transmission Protocol RTP.`, right: false, choosen:false }],
        info: "Die Antwort ist: A",
        art: "sc"
      },
      {
        id: 98,
        txt: `QUESTION 98: How does the ping command work by default?`,
        ans: [{txt:`A. Is sends an ICMP Echo Request to a remote host and waits to receive an ICMP Echo Response in return.`, right:true, choosen:false }, {txt:`B. It sends an ARP request to a remote host and waits to receive an ARP response in return.`, right: false, choosen:false }, {txt:`C. It sends a TCP SYN packet to a remote host and waits to receive an TCP ACK response in return.`, right: false, choosen:false }, {txt:`D. Is sends a broadcast packet to all hosts on the net and waits to receive, among others, a response from the target system.`, right: false, choosen:false }, {txt:`E. It sends a UDP packet to port 0 of the remote host and waits to receive a UDP error response in return.`, right: false, choosen:false }],
        info: "Die Antwort ist: A",
        art: "sc"
      },
      {
        id: 100,
        txt: `QUESTION 100:

        Given the following routing table:
         Kernel IP routing table
         Destination   Gateway       Genmask       Flags Metric Ref Use Iface
         0.0.0.0       192.168.178.1 0.0.0.0       UG    0      0   0   wlan0
         192.168.1.0   0.0.0.0       255.255.255.0 U     0      0   0   eth0
         192.168.2.0   192.168.1.1   255.255.255.0 U     0      0   0   eth0
         192.168.178.0 0.0.0.0       255.255.255.0 U     9      0   0   wlan0

        How would an outgoing packet to the destination 192.168.2.150 be handled?`,
        ans: [{txt:`A. It would be passed to the default router 192.168.178.1 on wlan0.`, right:false, choosen:false }, {txt:`B. It would be directly transmitted on the device eth0.`, right: false, choosen:false }, {txt:`C. It would be passed to the default router 255.255.255.0 on eth0.`, right: false, choosen:false }, {txt:`D. It would be passed to the router 192.168.1.1 on eth0.`, right: true, choosen:false }, {txt:`E. It would be directly transmitted on the device wlan0.`, right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 104,
        txt: `QUESTION 104: Which standardized TCP port is used by HTTPS services?`,
        ans: [{txt:`A. 25`, right:false, choosen:false }, {txt:`B. 80`, right: false, choosen:false }, {txt:`C. 8080`, right: false, choosen:false }, {txt:`D. 443`, right: true, choosen:false }, {txt:`E. 636`, right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 106,
        txt: `QUESTION 106: Which of the following commands sets the system's time zone to the Canadian Eastern Time?`,
        ans: [{txt:`A. localegen -t -f /usr/share/zoneinfo/Canada/Eastern > /etc/locate.tz`, right:false, choosen:false }, {txt:`B. tzconf /etc/localtime`, right: false, choosen:false }, {txt:`C. sysctl -w clock.tz='Canada/Eastern'`, right: false, choosen:false }, {txt:`D. modprobe tz_ca_est`, right: false, choosen:false }, {txt:`E. ln -sf /usr/share/zoneinfo/Canada/Eastern /etc/localtime`, right:true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 108,
        txt: `QUESTION 108: How can a specific user be prevented from scheduling tasks with at?`,
        ans: [{txt:`A. By adding the specific user to the /etc/at.allow file.`, right:false, choosen:false }, {txt:`B. By adding the specific user to the [deny] section in the /etc/atd.conf file.`, right: false, choosen:false }, {txt:`C. By adding the specific user to the nojobs group.`, right: false, choosen:false }, {txt:`D. By adding the specific user to the /etc/at.deny file.`, right:true, choosen:false }, {txt:`E. By executing the atd --deny [user] command.`, right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 109,
        txt: `QUESTION 109: Which file contains the data of the last change of a user's password?`,
        ans: [{txt:`A. /etc/gshadow`, right:false, choosen:false }, {txt:`B. /etc/passwd`, right: false, choosen:false }, {txt:`C. /etc/pwdlog`, right: false, choosen:false }, {txt:`D. /var/log/shadow`, right:true, choosen:false }, {txt:`E. /etc/shadow`, right: false, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 115,
        txt: `QUESTION 115: What is the purpose of the iconv command?`,
        ans: [{txt:`A. It converts bitmap images from one format to another such as PNG to JPEG.`, right:false, choosen:false }, {txt:`B. It verifies that the root directory tree compiles to all conventions from the Filesystem Hierarchy Standard (FHS).`, right: false, choosen:false }, {txt:`C. It converts files from one character set to an other.`, right: true, choosen:false }, {txt:`D. It changes the mode of an inode in the ext4 filesystem.`, right: false, choosen:false }, {txt:`E. It displays additional meta information from icon files ending in .ico.`, right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 111,
        txt: `QUESTION 111: Which of the following sections exists in a systemd timer unit?`,
        ans: [{txt:`A. [Events]`, right:false, choosen:false }, {txt:`B. [Timer]`, right: true, choosen:false }, {txt:`C. [cron]`, right: false, choosen:false }, {txt:`D. [Schedule]`, right: false, choosen:false }, {txt:`E. [Trigger]`, right: false, choosen:false }],
        info: "Die Antwort ist: B",
        art: "sc"
      },
      {
        id: 112,
        txt: `Which of the following getent invocations lists all existing users?`,
        ans: [{txt:`A. getent homes`, right:false, choosen:false }, {txt:`B. getent uids`, right: false, choosen:false }, {txt:`C. getent passwd`, right: true, choosen:false }, {txt:`D. getent users`, right: false, choosen:false }, {txt:`E. getent logins`, right: false, choosen:false }],
        info: "Die Antwort ist: C",
        art: "sc"
      },
      {
        id: 113,
        txt: `QUESTION 113:

        Given the following user's crontab entry:
         15 14 * * 1-5 /usr/local/bin/example.sh
        When will the script /usr/local/bin/example.sh be executed?`,
        ans: [{txt:`A. At 14:15 local time, January till May.`, right:false, choosen:false }, {txt:`B. At 15:14 local time, 1st to 5th day of month.`, right: false, choosen:false }, {txt:`C. At 14:15 local time, February till June.`, right: false, choosen:false }, {txt:`D. At 14:15 local time, 1st to 5th day of month.`, right: false, choosen:false }, {txt:`E. At 14:15 local time, Monday to Friday`, right: false, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 114,
        txt: `If neither cron.allow nor cron.deny exist in /etc/, which of the following is true?`,
        ans: [{txt:`A. Without additional configuration, all users may create user specific crontabs.`, right:false, choosen:false }, {txt:`B. Without additional configuration, only root may create user specific crontabs.`, right:true, choosen:false }, {txt:`C. The cron daemon will refuse to start and report missing files in the system's logfile.`, right: false, choosen:false }, {txt:`D. When a user creates a user specific crontab the system administrator must approve it explicitly.`, right: false, choosen:false }, {txt:`E. The default settings of /etc/crond.conf define whether or not user specific crontabs are generally allowed or not.`, right: false, choosen:false }],
        info: "Die Antwort ist: B",
        art: "sc"
      },
      {
        id: 116,
        txt: `QUESTION 116: Which character in the password field of /etc/passwd is used to indicate that the encrypted password
        is stored in /etc/shadow?`,
        ans: [{txt:`A. *`, right:false, choosen:false }, {txt:`B. !`, right: false, choosen:false }, {txt:`C. s`, right: false, choosen:false }, {txt:`D. #`, right: false, choosen:false }, {txt:`E. x`, right:true, choosen:false }],
        info: "Die Antwort ist: E",
        art: "sc"
      },
      {
        id: 117,
        txt: `QUESTION 117: What does the term Braille Display refer to?`,
        ans: [{txt:`A. A standardized high contract graphical theme for desktop applications?`, right:false, choosen:false }, {txt:`B. A Linux desktop environment similar to KDE and GNOME.`, right: false, choosen:false }, {txt:`C. A legacy display technology superseded by LCD.`, right: false, choosen:false }, {txt:`D. A physical representation of characters using small dots.`, right: true, choosen:false }, {txt:`E. A standard file format for data exchange, similar to XML.`, right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
      {
        id: 120,
        txt: `Which of the following protocols is designed to access the video card output of a virtual machine?`,
        ans: [{txt:`A. KDE`, right:false, choosen:false }, {txt:`B. X11`, right: false, choosen:false }, {txt:`C. Xfce`, right: false, choosen:false }, {txt:`D. SPICE`, right:true, choosen:false }, {txt:`E. XDMCP`, right: false, choosen:false }],
        info: "Die Antwort ist: D",
        art: "sc"
      },
    ];


    // Fill-In Fragen
    this.fillFragen = [
      {
        id: 1,
        txt:"QUESTION 1: Which command is used to set the hostname of the local system? (Specify only the command without any path or parameters.) ",
        ans: "hostname",
        info: "Answer: hostname",
        art: "fill"
      },
      {
        id: 3,
        txt:"QUESTION 3: What command, depending on its options, can display the open TCP connections, the routing tables, as well as network interface statistics? (Specify only the command without any path or parameters.)",
        ans: "netstat",
        info: "Answer: netstat",
        art: "fill"
      },
      {
        id: 4,
        txt:"QUESTION 4: Which command included in NetworkManager is a curses application which provides easy acces to the NetworkManager on the command line? (Specify only the command without any path or parameters.)",
        ans: "nmtui",
        info: "Answer: nmtui",
        art: "fill"
      },
      {
        id: 19,
        txt:"QUESTION 19: Which file, if present, must contain all users that are allowed to use the cron scheduling system? (Specify the full name of the file, including path.)",
        ans: "/etc/cron.allow",
        info: "Answer: /etc/cron.allow",
        art: "fill"
      },
      {
        id: 27,
        txt:"QUESTION 27: Which command included in systemd supports selecting messages from the systemd journal by criteria such as time or unit name? (Specify only the command without any path or parameters.)",
        ans: "journalctl",
        info: "Answer: journalctl",
        art: "fill"
      },
      {
        id: 29,
        txt:"QUESTION 29: Which command must be run after adding a new email alias to the configuration in order to make this change effective? (Specify the command without any path but including all required parameters.)",
        ans: "newaliases",
        info: "Answer: newaliases",
        art: "fill"
      },
      {
        id: 33,
        txt:"QUESTION 33: Which command, available with all sendmail-compatible MTAs, is used to list the contents of the MTA's mail queue? (Specify only the command without any path or parameters.)",
        ans: "mailq",
        info: "Answer: mailq",
        art: "fill"
      },
      {
        id: 34,
        txt:"QUESTION 34: What is the top-level directory which contains the configuration files for CUPS? (Specify the full path to the directory.)",
        ans: "/etc/cups",
        info: "Answer: /etc/cups",
        art: "fill"
      },
      {
        id: 37,
        txt:"QUESTION 37: Which option in the /etc/ntp.conf file specifies an external NTP source to be queried for time information? (Specify only the option without any values or parameters.)",
        ans: "server",
        info: "Answer: server",
        art: "fill"
      },
      {
        id: 46,
        txt:"QUESTION 46: What command list the aliases defined in the current Bash shell? (Specify only the command without any path or parameters.)",
        ans: "alias",
        info: "Answer: alias",
        art: "fill"
      },
      {
        id: 54,
        txt:"QUESTION 54: When using X11 forwarding in SSH, what environment variable is automatically set in the remote shell in order to help applications to connect to the correct X11 server? (Specify only the environment variable without any additional commands or values.)",
        ans: "DISPLAY",
        info: "Answer: DISPLAY",
        art: "fill"
      },
      {
        id: 55,
        txt:"QUESTION 55: The presence of what file will temporarily prevent all users except root from logging into a system?(Specify the full name of the file, including path.)",
        ans: "/etc/nologin",
        info: "Answer: /etc/nologin",
        art: "fill"
      },
      {
        id: 64,
        txt:"QUESTION 64: Which file is processed by newaliases? (Specify the full name of the file, including path.)",
        ans: "/etc/aliases",
        info: "Answer: /etc/aliases",
        art: "fill"
      },
      {
        id: 71,
        txt:"QUESTION 71: Which command is used to sync the hardware clock to the system clock? (Specify only the command without any path or parameters.)",
        ans: "hwclock",
        info: "Answer: hwclock",
        art: "fill"
      },
      {
        id: 87,
        txt:"QUESTION 87: What command is used to add OpenSSH private keys to a running ssh-agent instance? (Specify the command name only without any path.)",
        ans: "ssh-add",
        info: "Answer: ssh-add",
        art: "fill"
      },
      {
        id: 88,
        txt:"QUESTION 88: Which directory holds configuration files for xinetd services? (Specify the full path to the directory.)",
        ans: "/etc/xinetd.d/",
        info: "Answer: /etc/xinetd.d/",
        art: "fill"
      },
      {
        id: 94,
        txt:"QUESTION 94: Which parameter is missing in the command ip link set ____ dev eth0 to activate the previously inactive network interface eth0? (Specify the parameter only without any command, path or additional options.)",
        ans: "up",
        info: "Answer: up",
        art: "fill"
      },
      {
        id: 90,
        txt:"QUESTION 90:Which parameter of the ssh command specifies the location of the private key used for login attempts? (Specify only the option name without any values or parameters.)",
        ans: "-i",
        info: "Answer: -i",
        art: "fill"
      },
      {
        id: 102,
        txt:"QUESTION 102: What command enables a network interface according to distribution-specific configuration, such as /etc/network/interfaces or /etc/sysconfig/network-scripts/ifcfg-eth0? (Specify only the command without any path or parameters.)",
        ans: "ifup",
        info: "Answer: ifup",
        art: "fill"
      },
      {
        id: 107,
        txt:"QUESTION 107: What option to useradd creates a new user's home directory and provisions it with a set of standard files? (Specify only the option name without any values or parameters.)",
        ans: "-m",
        info: "Answer: -m",
        art: "fill"
      },
      {
        id: 118,
        txt:"QUESTION 118: Which environment variable is used by an X11 client to determine the X Server to connect to? (Specify only the variable name without any preceding commands or values.)",
        ans: "DISPLAY",
        info: "Answer: DISPLAY",
        art: "fill"
      },
    ]
  }

   mcAll(): mcQuestion[] {
    return this.mcFragen;
   }
   scAll(): scQuestion[] {
    return this.scFragen;
   }
   fillAll(): fillQuestion[] {
    return this.fillFragen;
   }
}
