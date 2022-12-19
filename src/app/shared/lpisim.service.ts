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
      }
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
