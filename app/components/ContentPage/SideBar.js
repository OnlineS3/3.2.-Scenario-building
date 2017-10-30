import React from 'react';
import { Link } from 'react-router';

import SideBarButton from './SideBarButton';

const SideBar = ({props}) => {
  const style = {
    position: "relative",
    float: "right",
    width: "260px",
    padding: "1rem 1.5rem",
    marginTop: "60px",
    textAlign: "center"
  }
  return (
    <aside style={style}>
      <SideBarButton text="Download guide" alt={true} link="http://www.s3platform.eu/wp-content/uploads/2017/08/Guideline_Tool_Scenario-Building_MR-2017-21-08.pdf"></SideBarButton>
      <SideBarButton text="Scenario building process template" link="http://www.s3platform.eu/wp-content/uploads/2017/08/Scenario-process-template.pdf"></SideBarButton>
      <SideBarButton text="PEST-analysis template" link="http://www.s3platform.eu/wp-content/uploads/2017/07/Pest_pdf_template.pdf"></SideBarButton>
      <SideBarButton text="Impact analysis template" link="/application"></SideBarButton>
      <SideBarButton text="Scenario building template" link="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario_building_template.pdf"></SideBarButton>
      <SideBarButton text="Scenario description template" link="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario_description_template.pdf"></SideBarButton>
      <SideBarButton text="Scenario description template with image boxes" link="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario_description_images_template.pdf"></SideBarButton>
      <SideBarButton text="Preparation plan template" link="http://www.s3platform.eu/wp-content/uploads/2017/07/Preparation_plan_template.pdf"></SideBarButton>
    </aside>
  )

}
export default SideBar;
