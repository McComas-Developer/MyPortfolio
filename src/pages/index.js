import React from 'react'
import Link from 'gatsby-link'
import Cell from '../components/Cell';
import Wave from '../components/Wave';
import Card from '../components/Card';
import Experience from '../components/Experience';
import Section from '../components/Section';
import Contact from '../components/Contact'
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div className="Hero">
        <div className="HeroGroup">
          <h1>Michael McComas</h1>
          <p>Computer Scientist and Android Devloper</p>
          <Link to="/page-2/">Resume</Link>
          <Wave/>
        </div>
        <div className="About" id={"about"}>
        <h2>About</h2>
        <p>
        Hello! My name is Michael McComas and I am an Android Developer :D
        </p>
      </div>
        <div className="Cards" id={"projects"}>
        <h2>Applications</h2>
        <div className="CardGroup">
          <Card
            title="Dinner Decided"
            link="https://apps.apple.com/us/app/iheart-radio-music-podcasts/id290638154"
            text="Google Play Store Link"
            disc="Created"
            image={require("../images/wallpaper.jpg")}
          />
          <Card
            title="Fake or Fact"
            link="https://apps.apple.com/us/app/iheart-radio-music-podcasts/id290638154"
            text="Google Play Store Link"
            disc="Created"
            image={require("../images/wallpaper.jpg")}
          />
          <Card
            title="Water Me"
            link="https://apps.apple.com/us/app/iheart-radio-music-podcasts/id290638154"
            text="Google Play Store Link"
            disc="Created"
            image={require("../images/wallpaper.jpg")}
          />
        </div>
     </div>
     <div className="ExperienceSection" id={"experience"} >
        <h2>Experience</h2>
        <Experience
          image={require("../images/wallpaper3.jpg")}
          link="https://www.iheartmedia.com"
          company="Freelance"
          position="Android Developer"
          time="Aug 2019 - Present"
          details="Some desc"
        />
        <Experience
          image={require("../images/wallpaper2.jpg")}
          link="https://thewaltdisneycompany.com"
          company="PRGX"
          position="IT Programmer"
          time="Jun 2019 - Present"
          details="Some desc"
        />
      </div>
      <div id={"contact"}>
        <h2>Contact</h2>
        <ContactSection>
          <Contact
            logo={require("../images/wallpaper2.jpg")}
            link="https://github.com/McComas-Developer"
            title="Github"
          />
          <Contact
            logo={require("../images/wallpaper3.jpg")}
            link="https://www.linkedin.com/in/michael-mccomas/"
            title="LinkedIn"
          />
          <Contact
            logo={require("../images/wallpaper.jpg")}
            link="mailto: michael.ray.mccomas@gmail.com"
            title="Email"
          />
        </ContactSection>
      </div>
    </div>
</Layout>
)

const ContactSection = styled.div`
  margin: 0 auto;
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`

export default IndexPage