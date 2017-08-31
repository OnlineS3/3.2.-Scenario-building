import React from 'react';
import { Link } from 'react-router';

const SideBarButton = (props) => {
  const style = {
  	color: "#fff",
  	"lineHeight": 1.4,
  	"fontSize": "12px",
  	"verticalAlign": "middle",
  	"borderRadius": "3px",
  	"letterSpacing": 0,
  	cursor: "pointer",
  	margin: "10px 14px 0 0",
  	width: "12rem",
  	"fontWeight": 600,
    display: "inline-block",
    border: "solid 1px red",
  	padding: "5px 8px",
  	background: "linear-gradient(#ff6b6b,#ec2929)"
  }
  const linkStyle = {
    color: "#FFF",
    fontFamily: "verdana,sans-serif",
    textDecoration: "none",
    display: "block",
    height: "100%"
  }
  return (
    <div style={style}>
      <a style={linkStyle} href={props.link} >
        {props.text}
         <i class="fa fa-file-pdf-o" aria-hidden="true">
         </i>
      </a>
    </div>
  )

}

export default SideBarButton;
