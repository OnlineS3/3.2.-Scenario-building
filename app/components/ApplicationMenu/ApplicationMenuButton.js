import React from 'react';
import { Link } from 'react-router';

const ApplicationMenuButton = (props) => {
  var buttonClass = "button button--menu";
  if(props.alt) buttonClass += " button--alt";
  return (
    <div className="responsive-layout__column">
      <div style={{position: "relative"}}>
        <div className="button--background">
          <img className="button--background-image" src={props.background}/>
        </div>
        <a className="button--link" href={props.url}>
        <button className={buttonClass}>{props.text}</button></a>
      </div>
    </div>
  );
}

export default ApplicationMenuButton
