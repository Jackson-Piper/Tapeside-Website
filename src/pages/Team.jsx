import React from "react";
import Container from "react-bootstrap/Container";
import MemberCard from "../components/MemberCard";

import szedhanepicture from "../assets/images/profiles/szedhane picture.jpg";
import OHurstProfile from "../assets/images/profiles/ohurst.png";
import HansMendozaPic from "../assets/images/profiles/Hans_Mendoza.jpg";
import JacksonP from "../assets/images/profiles/JacksonPiper.jpg";
import Miles from "../assets/images/profiles/Miles.jpg";

import s1 from "../assets/images/careerplans/s1.png"
import m1 from "../assets/images/careerplans/m1.png"
import m2 from "../assets/images/careerplans/m2.png"
import m3 from "../assets/images/careerplans/m3.png"

export default class Team extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <MemberCard
            firstName="Szedhane"
            lastName="Goh"
            studentID="S3908225"
            description="Szedhane is currently working in a PVC Fabrication factory in Sydney. He is new to the IT scene, having developed a keen interest during the COVID lockdowns where he was unable to work and realized just how heavily and how much of the world is starting to rely on different technologies. While he is new to studying to become a qualified IT professional, he has already discovered the most beneficial method to try and resolve a computer issue – the power cycle. He has a keen interest in software development and hopes to become a Software Engineer once he has completed his degree."
            personality="Szedhane has a ISFJ-T personality which is “get it done” type, working well in a team as it makes them very practical and hands on. This personality type is great under pressure."
            mark="53"
            profileImage={szedhanepicture}
          >
            <h5>Career Plans</h5>
            <p>
              My career is built on gaining certain skills that are in high demand which can grant me a good future.
              This course is helping me get the necessary skills for an industry that is becoming increasingly popular,
              as I have learned throughout the duration of this course. Retaining the information from this course has
              helped me decide on what career I have chosen to pursue a career in designing or leading a team of some
              sort, the position that comes to mind is a <i>software engineer</i>. This position requires a lot of
              knowledge and skill and although I am miles off from acquiring the necessary skills to become a qualified
              software engineer, I also need to have the required experience to call myself a software engineer. To
              obtain the title of become a software engineer I believe it starts off in the classroom because it helps
              receiving a qualification like a <i>bachelor’s</i> in computer science or Bachelor of Software
              Engineering, being recognised as a software engineer is where it starts. This course has helped me
              acknowledge the demand in software engineers throughout the current workforce and throughout Assignment 1
              & 2 feedback it has shown that software engineering is a commemorated career, people can achieve great
              things from having a background in computer science and that is hopefully the end goal, achieving or doing
              great things for the position I have earned.
            </p>
            <h5>Skills and Experience</h5>
            <p>
              The skills required to be a software are very achievable, the best way to go about it is to broaden my
              knowledge in the fields that make a software engineer like computer science like being able to use
              JavaScript and Python additionally it comes in handy when you are comfortable in many operating systems,
              all these skills are learnt from achieving a higher level of schooling by doing a bachelor’s degree.
              Careers in software engineering demand experience in multiple languages like this
              job. <a
              href={"https://www.seek.com.au/job/52323253?type=standout#searchRequestToken=96dfbd0e-415b-4ec3-96af-2d7427fbb49e"}
              target={"_blank"}>https://www.seek.com.au/job/52323253?type=standout#searchRequestToken=96dfbd0e-415b-4ec3-96af-2d7427fbb49e</a>
              <img src={s1} style={{maxWidth: "650px"}}/>
            </p>
            <h5>Groups Career Plans</h5>
            <p>
              <b>What common elements are there, if any?</b>
              <ul>
                <li>
                  The common elements are that everyone throughout the group is striving to use their strengths and
                  everyone’s strengths are that they want to create projects. Our team consists of entrepreneurs,
                  Auditors and Java Developers, the common elements is that our team want to create their own products
                  or be apart of something that creates something and that is found very easily through our group.
                </li>
              </ul>
              <b>What differentiates each position from the others if anything?</b>
              <ul>
                <li>
                  Each person is obviously different in their own way by wanting to create something, that being create
                  a project, create a great team chemistry through their entrepreneurship and leadership or being able
                  to test someone’s creation which is essential to any build of anything.
                </li>
              </ul>
              <b>How similar or different are your career plans across the group?</b>
              <ul>
                <li>
                  Our team consists of two Java Developers, IT manager, Auditor and Software. The main similarity
                  between all these careers is that they are a part of a team and that all these careers require a
                  higher level of education to obtain these jobs. The careers we all have chosen are of coarse different
                  because we all want different goals and have different personalities.
                </li>
              </ul>
            </p>
          </MemberCard>
          <MemberCard
            firstName="Oscar"
            lastName="Hurst"
            studentID="S3893861"
            description="Oscar has always had an interest in IT, from gadgets and devices right through to gaming and VR systems. He has had a curious nature about everything tech, even since he was a toddler. From making computers with his imagination and shoeboxes, to using and playing with fully functioning desktop PCs, he has developed a love for all things digital. Ideally Oscar would love to work in video games development, he even has current experience with Git, Unreal Engine, Unity Engine and is hoping to learn WebGL and similar languages."
            personality="Oscar is a ENTP-T Which lends itself very well to a group where he can learn from, and help, others.  This personality type is well suited for management type positions."
            mark="88"
            profileImage={OHurstProfile}
          >
            <h5>Dream Job – Game Developer</h5>
            <p>
              My career plan is to get a job as an app developer in languages such as C#, C++, and Java as I have
              experience in app development, those three languages, and I enjoy working on apps. I will be working on my
              own game development business on the side and be releasing video games on platforms such as Steam until I
              am earning enough revenue to move over to that business full time.
              <br/>
              As I do my degree in information technology, I am trying to get a job in the programming industry so that
              I will have experience to put on my resume so that once I get my degree, I will have the experience needed
              to get into higher roles in app development so I can have a good job while I work on my game development
              business.
              <br/>
              I have experience in web development as well as app development. Therefore, the scope of jobs I can apply
              for while I participate in the courses to get my degree is increased and the likelihood of me getting a
              job is widened.
              <br/>
              In the case that my own business succeeds, I will be working on the most popular game full time as well as
              other games as well so that we can expand successful franchises and solidify the business so that I can
              rely on the business’s income long term. I will also be hiring employees once the income supports it.
            </p>
          </MemberCard>
          <MemberCard
            firstName="Hans"
            lastName="Mendoza"
            studentID="S3905757"
            description="Hans came to Australia, from the Philippines, at a young age and at the same time discovered how much he enjoyed gaming on his Xbox 360. He found out that games could be improved past what the original developers had created, so he then learnt to edit and modify the game files to add additional content for his own enjoyment. He has a fondness for watching and learning about the inner workings of computers through the likes of Linus Tech Tips and Michael Reeves on YouTube. He hopes to one day become an Auditor for Information Technology companies, which will be something that a lot of future IT companies will require for quality and scalability."
            personality="Hans is the ISTP-A type, which is a hands on, fix it myself kind of personality. While it is hands on it is also a private natured person who will do well in a team with a mix of personality types."
            mark="54"
            profileImage={HansMendozaPic}
          >
            <h5>Dream Occupation – Computer Systems Engineer</h5>
            <p>
              My desired career plan is to become a full fledge systems engineer, fluent in different languages such as
              Java, JavaScript, Python and more as being knowledgeable in different languages
              provides multiple options to solve problems and approach them at the optimal way. Working as a freelancing
              individual provides a plethora of options on the types and number of request/projects, rates, and number
              of projects that my schedule allows.
              <br/>
              <br/>
              This method of working enables me to work for different organizations
              and companies whilst building a substantial network. Whereabouts of where I work is another privilege as
              this grant me the freedom to work anywhere around the world whilst working.
              <br/>
              <br/>
              Starting wise, this would
              require learning the above-mentioned languages by completing a degree in information technology and
              programming to gain the knowledge and skills to apply them effectively and efficiently in society.
              Searching for employment within the programming industry whilst completing my degree will immensely
              benefit not only my resume, but also my skills and understanding how the industry functions, what to
              expect, and general knowledge how work as a freelancer.
              <br/>
              <br/>
              Currently the experience I have of programming is
              limited and therefore the range of occupations I can apply is finite, though there are still occupations
              withing the industry that I am applicable for which a godsend to kickstart my career ideal.
              <br/>
              <br/>
              With the
              success of becoming a successful freelancer, working for major companies with life changing effects or
              revolutionary inventions; and small business to allow them to grow and expand would be fantastical as not
              only I am able to be a part of something big, but also have the gratification of witnessing a small
              business boom.
            </p>
          </MemberCard>
          <MemberCard
            firstName="Jackson"
            lastName="Piper"
            studentID="S389379"
            description="Jackson is the resident snow bunny, currently working as a Ski Instructor at Thredbo in New South Wales. Previously he has taught Skiing in Japan and South Korea, but has also hit the snow in North America – Both the US and Canada – as well as across the Tasman in New Zealand. His interest in IT comes from seeing his grandfather playing strategy games, where he was able to eventually play them himself. After learning about and eventually playing video games he developed a fascination with technology and loves to play with the latest and greatest tech. The more he has used and studied technology the more he wanted to understand the inner workings and this has lead him to study a bachelor in IT to be able to pursue a career in software development, specifically backend, while still getting time on the slopes."
            personality="Jackson has an INTJ-T personality, which does prefer to work alone but not necessarily without a team. They are fantastic collaborators and help the team with brainstorming and outside ideas."
            mark="70"
            profileImage={JacksonP}
          >
            <h5>Dream Job: Java Developer</h5>
            <p>
              Can help verify and test code with Oscar, leading to less mistakes and cleaner code. Can also cover and
              help bounce ideas of the other team members. Jacksons original Ideal job was a Backend Developer job at
              Roam Creative, however after discussing with our team and having a better understanding of job
              requirements in IT, he Agreed that Java Developer was a better overall fit.
              <br/>
              Moving forward from this course I have come to realise that pocketing myself into a job such as java
              Developer is not where I see my carer going. I have talked to people already in the field and have
              discussed potential avenues for my future. My career plans as it stands now will be to continue studying
              for the next year or two after which moving back to Sydney to start an internship at a telecommunications
              business, learning both the physically side of IT with tower instillations while also gaining experience
              in how working in a business environment.
            </p>
          </MemberCard>
          <MemberCard
            firstName="Miles"
            lastName="Wilson"
            studentID="S3893760"
            description="Currently working as a Senior IT Field Engineer with TCS and Shell Australia, working a Fly in Fly out IT role. Miles started his interest when he was young, having to battle his older brother to get time on the home computer, eventually leading to him wanting to build his own. Having worked in IT for a while, he decided to study a degree in IT to help with career prospects. Most of his roles in the past decade were either resource management roles, or customer service such as level 1 and 2 support. One of his strong points is in IT Project Management, being able to adapt to work in an Agile manner as well as using waterfall methods if needed. His past experience in workforce management helps him set clear goals to be able to succeed."
            personality="Miles has an ENFP-A personality type, which is a free-spirited person that loves working in a team. This personality type is a master of being with and around people."
            mark="85"
            profileImage={Miles}
          >
            My career plan begins during this degree. I still stand that I don’t wish to settle into the mold of an IT
            position but instead be a pioneer and entrepreneur. I do understand this is not something that is easily
            achievable, especially as I get older and have less capital available.
            <br/>
            <br/>
            With that in mind I am instead aiming towards the management side of Information Technology. I have noticed
            that assignment 3 has not gone as well as our first team assignment and I do believe it is due to us not
            having any one person in charge of the operation. Some of the IT management roles I found, (<a
            href={"https://www.seek.com.au/job/52328154?type=standout#searchRequestToken=bb1c787a-aa92-4b90-a8be-18c507e2dd14"}
            target={"_blank"}>for example,
            this one in Brisbane</a>) don’t seem to require a great deal of specific skills. This role only had some
            very
            basic Microsoft and Office systems.
            <img src={m1} style={{maxWidth: "650px"}}/>
            <br/>
            <br/>
            This is already achievable, however not the kind of role that I would be after as such. While searching I
            managed to find another IT Service Management role, this one <a
            href={"https://www.seek.com.au/job/52319211?type=standout#searchRequestToken=397c28ec-48cd-4b75-adc6-04e2730f8eba"}
            target={"_blank"}>didn't
            have much in the way of
            requirements.</a> Essentially saying you needed to have an understanding of ITIL and doing IT Audits.
            <img src={m2} style={{maxWidth: "650px"}}/>
            Based on my skillsets, it would not be difficult to apply for either of the roles above, but eventually I
            did manage to find <a
            href={"https://www.seek.com.au/job/52266414?type=standard#searchRequestToken=397c28ec-48cd-4b75-adc6-04e2730f8eba"}
            target={"_blank"}>a role that was little more demanding.</a>
            <img src={m3} style={{maxWidth: "650px"}}/>
            <br/>
            I found in this role that you would need to have a degree in IT, which I am doing at the moment, not to
            mention a better understanding of IT infrastructure.
            <br/>
            For me to be ready for a role like this I would need to
            learn a lot more about Software as a Service (SAAS) and similar systems as well as in house Data Center
            equipment, from servers to tape drives and even audio/visual or telephony systems.
            <br/>
            In order to obtain the
            skills I will need for any management role I will need to take an elective (I assume that is a thing at
            University) for management, which is something I am very interested in.
            <br/>
            <br/>
            <h5><u>What common elements are there?</u></h5>
            This goal to be in IT management differs greatly from the others in my team, most seem to be happy with
            being a developer, engineer and even QA person. While I am happy to do the work, I like to be able to work
            with the team to help push our projects towards completion. This has become especially noticeable after
            Assignment 2 where I was organizing everyone and helping get the tasks underway, when we received a low
            grade, I took it that I had failed everyone. The main thing here is that we are all interested in IT, myself
            being a little older and having experience in IT helps as well.
          </MemberCard>
        </Container>
      </div>
    );
  }
}
