import React from "react";
import Endnote from "../Endnote";
import Paper from "@material-ui/core/Paper";

export default class Cybersecurity extends React.Component {
  render() {
    return (
      <Paper class="contentBox" elevation={3}>
        <p>
          Cybersecurity covers a range of topics – Network Security, Application
          Security, Information Security, Operational Security, Disaster
          recovery and BCP and End User Education
          <Endnote
            tooltip="i"
            placement="bottom"
            note="What is Cyber Security? | Definition, Types, and User Protection | Kaspersky"
            link="https://www.kaspersky.com.au/resource-center/definitions/what-is-cyber-security"
          />
          . The broad definition of Cybersecurity is protection from
          unauthorised or unwarranted access to personal or private data and
          information, which is especially more important in this modern,
          digital age. Some of the types of threats that are encompassed by the
          cybersecurity banner are in the form of Cybercrimes which are usually
          just singular attacks to obtain money or profit. Cyberattacks (for
          example, Distributed Denial-of-Service or DDoS) which are performed in
          order to cause havoc or take down systems “for the lulz”. Lastly there
          is Cyberterrorism, which is often politically motivated, attacks made
          with the intention of causing fear and spreading uncertainty,
          especially to destabilise and cause unrest. The most common form that
          general home users will be aware of is the “Virus” or “Malware”, most
          commonly in the form of unsafe links via emails (phishing) and fake
          files that install malware. Those are often the bigger threats on home
          PCs and laptops, but with the rise of mobile technology there are more
          threats than ever. Luckily, we have all sorts of cybersecurity methods
          for mobile devices, for example biometrics (fingerprints) that you can
          use to unlock a phone, but some companies, such as Apple, use facial
          recognition to allow access to devices. Besides mobile devices, even
          your home PC has cybersecurity applications, of which there are a lot
          to choose from like AVG, Avast, Kaspersky and McAfee to name just a
          few. These programs work by scanning incoming files and/or code that
          passes through your network traffic
          <Endnote
            tooltip="ii"
            placement="bottom"
            note="How Does Antivirus Work? (soscanhelp.com)"
            link="https://www.soscanhelp.com/blog/how-does-antivirus-work#:~:text=An%20antivirus%20software%20works%20by,%2C%20flag%2C%20and%20remove%20them."
          />
          and then compares it to a known database of treats and risks, then
          removes the malicious code/files before it can cause any damage to
          your system, files or information. It is worth nothing there is a
          difference between Antivirus and Antimalware although the key
          difference is that Antivirus is a more generic service to cover all
          things malicious where antimalware is designed to fend off trojans,
          worms and even ransomware. Using software like mentioned before you
          are able to scan your files and see if you have downloaded any
          malicious software or files by accident without accessing them as yet.
          One of the biggest changes in helping turn the tide on cyberattacks
          will be the implementation of Artificial Intelligence
          <Endnote
            tooltip="iii"
            placement="bottom"
            note="Future Of Cybersecurity: 4 Evolving Technologies | Managed IT Services and Cyber Security Services Company | 24 X 7 (teceze.com)"
            link="https://www.teceze.com/future-of-cybersecurity-4-evolving-technologies/"
          />
          that can adapt and learn which threats to stop without requiring
          intervention by users. As of early 2021, there are 560,000 new pieces
          of malware being detected every day, with over 1 billion malware
          programs out there.
          <Endnote
            tooltip="iv"
            placement="bottom"
            note="A Not-So-Common Cold: Malware Statistics in 2021 | DataProt"
            link="https://dataprot.net/statistics/malware-statistics/"
          />
          , those kinds of numbers make it borderline impossible for humans to
          keep up, even with the help of clever programs and dedicated
          resources. This is where the need for Artificial Intelligence has
          arisen from, to be able to listen, look and learn the habits and
          patterns of these viruses and counter them before they become a risk.
          A huge plus to this system would be the ongoing nature of machine
          learning, allowing stronger defences for corporate networks as well as
          end user computing without requiring massive teams of people working
          constantly to stem the tide of newly created viruses and malware.
        </p>
      </Paper>
    );
  }
}
