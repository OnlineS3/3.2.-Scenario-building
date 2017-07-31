import React from 'react';
import { Link } from 'react-router';


const ApplicationMenuView = ({props}) => {
  return (
    <section className="content-section">
      <h1>Scenario building applications</h1>
      <div className="responsive-layout">
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Guideline_Tool_Scenario-Building_MR-2017-31-07.pdf"><button className="button button--menu">Application Guide PDF</button></a>
        </div>
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Pest_pdf_template.pdf"><button className="button button--menu">PEST-Analysis Tool</button></a>
        </div>
        <div className="responsive-layout__column">
          <Link to="/application"><button className="button button--menu">Impact Analysis Tool</button></Link>
        </div>
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario_building_template.pdf"><button className="button button--menu">Scenario Building Template</button></a>
        </div>
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario_description_template.pdf"><button className="button button--menu">Scenario Description Tool</button></a>
        </div>
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario_description_images_template.pdf"><button className="button button--menu">Scenario Description Tool with Image Boxes</button></a>
        </div>
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Preparation_plan_template.pdf"><button className="button button--menu">Preparation Plan Tool</button></a>
        </div>
      </div>
    </section>
  )

}

// <a href="/logout">Logout</a>


export default ApplicationMenuView;
