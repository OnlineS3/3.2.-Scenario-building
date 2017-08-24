import React from 'react';
import { Link } from 'react-router';

import AboutView from './content/AboutView';
import GuideView from './content/GuideView';
import RelatedDocumentsView from './content/RelatedDocumentsView';


const content = (pageName) => {
  switch (pageName) {
    case 'about': return <AboutView />
    case 'guide': return <GuideView />
    case 'related documents': return <SecondGuidelineView />
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
