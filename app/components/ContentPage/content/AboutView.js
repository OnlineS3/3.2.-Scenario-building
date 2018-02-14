import React from 'react';
import { Link } from 'react-router';
import Collapsible from 'react-collapsible';


const AboutView = () => {

  return (
    <div>
      <div>
      <h1>About</h1>
        <p> Scenario building is a widely used foresight method. It is an exploratory activity for widening the perspective of the involved parties to identify, interpret and anticipate upcoming issues. Furthermore, it supports the parties to prepare for potentially surprising developments, to stimulate dialogue and to forge a common vision.</p>
        <p>Scenario building starts with the determination of the scope of the scenario work. In the context of RIS3, it may be how the nation/region will evolve in the next 20-30 years related to political, economic, social and technological issues. Our application allows the development of regional scenarios. We provide five specific templates, one to facilitate the implementation of the following five steps of the scenario process.</p>

        <ol>
          <li>Identify future trends and uncertainties (PEST analysis template)</li>
          <li>Assess the importance of each trend and uncertainty (Impact analysis template)</li>
          <li>Form scenarios (Scenario building template)</li>
          <li>Describe scenarios in-depth (Scenario description template)</li>
          <li>Assess scenario implications and plan for preparatory actions (Preparation plan template)</li>
        </ol>

        <p> In addition to the five templates, we provide one process template which links all the steps together into one document. </p> 
      </div>
    </div>
  )
}

// <a href="/logout">Logout</a>


export default AboutView;
