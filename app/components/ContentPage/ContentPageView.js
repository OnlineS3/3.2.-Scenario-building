import React from 'react';
import { Link } from 'react-router';

import AboutView from './content/AboutView';
import GuideView from './content/GuideView';
import SecondGuidelineView from './content/SecondGuidelineView';
import ThirdGuidelineView from './content/ThirdGuidelineView';


const content = (pageName) => {
  switch (pageName) {
    case 'about': return <AboutView />
    case 'guide': return <GuideView />
    case 'guideline2': return <SecondGuidelineView />
    case 'guideline3': return <ThirdGuidelineView />
    default: return <AboutView />
  }
}

const ContentPage = ({props}) => {
  const { pageName } = props;
  console.log(pageName);
  return (
    <section className="content-section">
      {content(pageName)}
    </section>
  )

}



export default ContentPage;
