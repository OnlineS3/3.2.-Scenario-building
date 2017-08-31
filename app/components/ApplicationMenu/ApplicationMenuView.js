import React from 'react';
import { Link } from 'react-router';


const ApplicationMenuView = ({props}) => {
  return (
    <section className="content-section">
      <h1>Scenario building applications</h1>
      <div className="responsive-layout">
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/08/Guideline_Tool_Scenario-Building_MR-2017-21-08.pdf"><button className="button button--menu">Application guide PDF</button></a>
        </div>
    <div className="responsive-layout__column">
      <a href="http://www.s3platform.eu/wp-content/uploads/2017/08/Scenario-process-template.pdf"><button className="button button--menu">Scenario building process template</button></a>
    </div>
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Pest_pdf_template.pdf"><button className="button button--menu">PEST-analysis template</button></a>
        </div>
        <div className="responsive-layout__column">
          <Link to="/application"><button className="button button--menu">Impact analysis template</button></Link>
        </div>
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario_building_template.pdf"><button className="button button--menu">Scenario building template</button></a>
        </div>
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario_description_template.pdf"><button className="button button--menu">Scenario description template</button></a>
        </div>
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario_description_images_template.pdf"><button className="button button--menu">Scenario description template with image boxes</button></a>
        </div>
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Preparation_plan_template.pdf"><button className="button button--menu">Preparation plan template</button></a>
        </div>
      </div>
    </section>
  )

}

// <a href="/logout">Logout</a>


export default ApplicationMenuView;
