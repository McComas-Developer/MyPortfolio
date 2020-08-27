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
        <p>Computer Scientist and Android Developer</p>
        <Wave />
      </div>
      <div className="AboutSection" id={"about"}>
        <h2>About</h2>
        <p>
          Hey there! My name is Michael McComas and I'm an computer scientist studying at Middle Tennessee State University. 
        I would be getting a degree in android development but unfortunately it wasn't an option  :D. 
        So instead, I'll have to let my personal projects speak for themselves. I've learned a lot throughout my android experience,
         but I am always on the lookout to learn more!
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
            title="Dinner Decider"
            text="Project Link"
            disc="Built"
            link="https://apps.apple.com/us/app/disneyland/id1022164656"
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
          image={require("../images/logo_android.jpg")}
          link=""
          company="Android Freelance"
          position="Android Developer"
          time="Aug 2019 - Present"
          details="I am a developer"
        />
        <ExperienceCell
          image={require("../images/logo_prgx.jpg")}
          link=""
          company="PRGX"
          position="IT Programmer"
          time="Jun 2019 - Present"
          details="I am a programmer"
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