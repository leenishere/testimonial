import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Grid from "../components/grid"
import "../components/global.css"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <Grid 
        name="Daniel Clifford" 
        position="Verified Graduate" 
        testimony="I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                in the company I joined. I honestly feel I got every penny’s worth."
        quote="“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
                transition and have heard some people who had an amazing experience here. I signed up 
                for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”"
        grid_id="danial"
      ></Grid>

      <Grid 
        name="Jonathan Walters" 
        position="Verified Graduate"
        testimony="The team was very supportive and kept me motivated"
        quote="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
        for a big company. This was one of the best investments I’ve made in myself. ”"
      grid_id="jonathan"
      ></Grid>
    
      <Grid 
        name="Jeanette Harmon" 
        position="Verified Graduate"
        testimony="An overall wonderful and rewarding experience"
        quote="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
        while doing something I love. ”"
        grid_id="jeanette"
      ></Grid>

      <Grid 
        name="Patrick Abrams" 
        position="Verified Graduate"
        testimony="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
        learning from their experiences was easy."
        quote="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
        gave me the confidence necessary to be able to go out in the world and present myself as a capable 
        junior developer. The standard is above the rest. You will get the personal attention you need from 
        an incredible community of smart and amazing people. ”"
        grid_id="patrick"
      ></Grid>
        
      <Grid 
        name="Kira Whittle" 
        position="Verified Graduate"
        testimony="Such a life-changing experience. Highly recommended!"
        quote="“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
        professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
        student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
        100% recommend! ”"
        grid_id="kira"
      ></Grid>
      
   

  </Layout>
)

export default IndexPage
