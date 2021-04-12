import React from "react";
import Header from "../components/Header";
import MemberCard from "../components/MemberCard";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";

import OHurstProfile from "../assets/images/ohurst.png";
import Miles from "../assets/images/Miles.jpg";
import szedhanepicture from "../assets/images/szedhane picture.jpg";

export default class TeamPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <MemberCard
            name="Szedhane Goh"
            studentID="S3908225"
            description="Szedhane is currently working in a PVC Fabrication factory in Sydney. He is new to the IT scene, having developed a keen interest during the COVID lockdowns where he was unable to work and realized just how heavily and how much of the world is starting to rely on different technologies. While he is new to studying to become a qualified IT professional, he has already discovered the most beneficial method to try and resolve a computer issue – the power cycle. He has a keen interest in software development and hopes to become a Software Engineer once he has completed his degree."
            personality="Szedhane has a ISFJ-T personality which is “get it done” type, working well in a team as it makes them very practical and hands on. This personality type is great under pressure."
            profileImage={szedhanepicture}
          />
          <MemberCard
            name="Oscar Hurst"
            studentID="S3893861"
            description="Oscar has always had an interest in IT, from gadgets and devices right through to gaming and VR systems. He has had a curious nature about everything tech, even since he was a toddler. From making computers with his imagination and shoeboxes, to using and playing with fully functioning desktop PCs, he has developed a love for all things digital. Ideally Oscar would love to work in video games development, he even has current experience with Git, Unreal Engine, Unity Engine and is hoping to learn WebGL and similar languages."
            personality="Oscar is a ENTP-T Which lends itself very well to a group where he can learn from, and help, others.  This personality type is well suited for management type positions."
            profileImage={OHurstProfile}
          />
          <MemberCard
            name="Hans Mendoza"
            studentID="S3905757"
            description="Hans came to Australia, from the Philippines, at a young age and at the same time discovered how much he enjoyed gaming on his Xbox 360. He found out that games could be improved past what the original developers had created, so he then learnt to edit and modify the game files to add additional content for his own enjoyment. He has a fondness for watching and learning about the inner workings of computers through the likes of Linus Tech Tips and Michael Reeves on YouTube. He hopes to one day become an Auditor for Information Technology companies, which will be something that a lot of future IT companies will require for quality and scalability."
            personality="Hans is the ISTP-A type, which is a hands on, fix it myself kind of personality. While it is hands on it is also a private natured person who will do well in a team with a mix of personality types."
            profileImage="https://via.placeholder.com/3000.jpg"
          />
          <MemberCard
            name="Jackson Piper"
            studentID="S389379"
            description="Jackson is the resident snow bunny, currently working as a Ski Instructor at Thredbo in New South Wales. Previously he has taught Skiing in Japan and South Korea, but has also hit the snow in North America – Both the US and Canada – as well as across the Tasman in New Zealand. His interest in IT comes from seeing his grandfather playing strategy games, where he was able to eventually play them himself. After learning about and eventually playing video games he developed a fascination with technology and loves to play with the latest and greatest tech. The more he has used and studied technology the more he wanted to understand the inner workings and this has lead him to study a bachelor in IT to be able to pursue a career in software development, specifically backend, while still getting time on the slopes."
            personality="Jackson has an INTJ-T personality, which does prefer to work alone but not necessarily without a team. They are fantastic collaborators and help the team with brainstorming and outside ideas."
            profileImage="https://via.placeholder.com/3000.jpg"
          />
          <MemberCard
            name="Miles Wilson"
            studentID="S3893760"
            description="Currently working as a Senior IT Field Engineer with TCS and Shell Australia, working a Fly in Fly out IT role. Miles started his interest when he was young, having to battle his older brother to get time on the home computer, eventually leading to him wanting to build his own. Having worked in IT for a while, he decided to study a degree in IT to help with career prospects. Most of his roles in the past decade were either resource management roles, or customer service such as level 1 and 2 support. One of his strong points is in IT Project Management, being able to adapt to work in an Agile manner as well as using waterfall methods if needed. His past experience in workforce management helps him set clear goals to be able to succeed."
            personality="Miles has an ENFP-A personality type, which is a free-spirited person that loves working in a team. This personality type is a master of being with and around people."
            profileImage={Miles}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}
