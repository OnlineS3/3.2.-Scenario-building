import React from 'react';
import { Link } from 'react-router';


const ContentPage = ({props}) => {
  console.log(props);
  const { section } = props;
  return (
    <section className="content-section">
      <div dangerouslySetInnerHTML={{__html: section.content}}></div>
    </section>
  )

}



export default ContentPage;
