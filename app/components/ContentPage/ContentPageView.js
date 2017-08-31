import React from 'react';
import { Link } from 'react-router';

import AboutView from './content/AboutView';
import GuideView from './content/GuideView';
import RelatedDocumentsView from './content/RelatedDocumentsView';

import SideBar from './SideBar';

const content = (pageName) => {
  switch (pageName) {
    case 'about': return <AboutView />
    case 'guide': return <GuideView />
    case 'related_documents': return <RelatedDocumentsView />
    default: return <AboutView />
  }
}

const ContentPage = ({props}) => {
  const { pageName } = props;
  console.log(pageName);
  const style = {
      position: "relative",
      float: "left",
      maxWidth: "840px",
      marginBottom: "50px"
  }
  return (
    <div>
      <section style={style} className="content-section">
        {content(pageName)}
      </section>
      <SideBar></SideBar>
    </div>
  )

}



export default ContentPage;
