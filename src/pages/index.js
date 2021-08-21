import React from "react"

import Layout from "../components/Layout"
import Card from "../components/Card"
import Wave from "../components/Wave"
import styled from "styled-components"
import ExperienceCell from "../components/Experience"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Michael McComas</h1>
        <p>Computer Scientist, Eagle Scout, and Android Developer at FortyAU</p>
        <Wave />
      </div>
      <div className="AboutSection" id={"about"}>
        <h2>About</h2>
        <p>
          Hey there! My name is Michael McComas and I'm an computer scientist graduate from MTSU and an Android Developer at FortyAU. 
          I am a super outdoorsy person with a lot of positivity. I am trying everything I can to improve my Mobile Dev skills and to help others so 
          don't be afraid to reach out! :)
        </p>
      </div>
      <div className="Cards" id={"projects"}>
        <h2>Applications</h2>
        <div className="CardGroup">
          <Card
            title="Water Me"
            link=""
            text="Project Link"
            disc="Built"
            image={require("../images/ic_water-me.png")}
          />
          <Card
            title="Dinnerly"
            text="Google Play"
            disc="Built"
            link="https://play.google.com/store/apps/details?id=com.michael.dinnerly"
            image={require("../images/ic_dinner_decided.png")}
          />
          <Card
            title="Fake or Fact"
            text="Google Play"
            disc="Built"
            link="https://play.google.com/store/apps/details?id=com.michael.fakeorfact&hl=en_US"
            image={require("../images/ic_fake_or_fact.png")}
          />
        </div>
      </div>
      <div className="ExperienceSection" id={"experience"} >
        <h2>Experience</h2>
        <ExperienceCell
          image={require("../images/logo_fortyau.jpg")}
          company="FortyAU"
          position="Android Developer"
          time="Jun 2021 - Present"
          details="Mid-June of 2021 I began working with a software development consulting company working on several projects.
          From working on an Asurion health application, creating a fitness app from the ground up with a grant from the national
          science foundation, to working with Cirrus to maintain their IOS application. Our development teams are all 'mentor-minded'
          meaning that when someone is unfamiliar with a topic but someone else is, they work together to help them understand. I've 
          had the opportunity to implement features such as Audio detection, creating a fitness app from the ground up, and creating
          multi-language support."
        />
        <ExperienceCell
          image={require("../images/logo_android.jpg")}
          company="Android Freelance"
          position="Android Developer"
          time="Aug 2019 - Present"
          details="In early August of 2019, I began to learn android through small projects such as a tip calculator and small two
                  button games. Over the next several months I learned more about android architecture patterns
                  and how to properly design an application. I learned about MVVM, JetPack Libraries: Navigation Component, Room, 
                  Live Data, 'Seperation of Concerns', GitHub: version control, Kotlin, Firebase, and so much more."
        />
        <ExperienceCell
          image={require("../images/logo_prgx.jpg")}
          link="https://www.prgx.com"
          company="PRGX"
          position="Data Developer"
          time="Jun 2019 - Jun 2021"
          details="In early june of 2019 I had the opportunity to work with PRGX to create 
                  new in-house applications. I used Microsoft access and SQL databases to create
                  dynamic tools to track, report, view, and analyze data. I had the honor of having 
                  one of the tools I created adopted by their entire North American division. Working
                  here has allowed me to gain knowledge of how to analyze/make data readable, and show
                  me the product production process."
        />
      </div>

      <div id={"contact"}>
        <h2>Contact</h2>
        <ContactSection>
          <Contact
            logo={require("../images/logo-github.png")}
            link="https://github.com/McComas-Developer"
            title="Github"
          />
          <Contact
            logo={require("../images/logo-linkedin.png")}
            link="https://www.linkedin.com/in/-michael-mccomas/"
            title="LinkedIn"
          />
          <Contact
            logo={require("../images/logo-email.png")}
            link="mailto: michael.ray.mcomas@gmail.com"
            title="Email"
          />
        </ContactSection>
      </div>
    </div>
  </Layout>
)

export default IndexPage

const ContactSection = styled.div`
  margin: 0 auto;
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`