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
      <SideBarButton text="Access to Application" link="/applications"></SideBarButton>
    </aside>
  )

}
export default SideBar;
