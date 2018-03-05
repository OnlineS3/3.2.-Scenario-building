import React from 'react';
import { Link } from 'react-router';

import ApplicationMenuButton from './ApplicationMenuButton';
const ApplicationMenuView = ({props}) => {
  return (
    <section className="content-section">
      <h1>Scenario building templates</h1>
      <div className="responsive-layout">
        <ApplicationMenuButton text="Download guide" url="http://www.s3platform.eu/wp-content/uploads/Guideline_Tool_Scenario-Building_MR-2017-10-31.pdf" alt/>
        <ApplicationMenuButton url="/documents/Pest_template.pdf" text="Step 1: PEST-analysis template" background="http://www.s3platform.eu/wp-content/uploads/template1.png" />
        <ApplicationMenuButton url="/application" text="Step 2: Impact analysis template" background="http://www.s3platform.eu/wp-content/uploads/template2.png" />
        <ApplicationMenuButton url="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario_building_template.pdf" text="Step 3: Scenario building template" background="http://www.s3platform.eu/wp-content/uploads/template3.png" />
        <ApplicationMenuButton url="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario_description_template.pdf" text="Step 4: Scenario description template" background="http://www.s3platform.eu/wp-content/uploads/template4.png" />
        <ApplicationMenuButton url="http://www.s3platform.eu/wp-content/uploads/2017/07/Preparation_plan_template.pdf" text="Step 5: Preparation plan template" background="http://www.s3platform.eu/wp-content/uploads/template5.png" />
        <ApplicationMenuButton url="/documents/Scenario-process-template.pdf" text="Scenario building process template with all of the steps"/>
      </div>
    </section>
  )

}

// <a href="/logout">Logout</a>


export default ApplicationMenuView;
