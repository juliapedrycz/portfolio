import React from 'react'
import "../styles/Skills.css"

function SkillsCard(props) {
  return (
      <div class={props.class}>
        <a>{props.title}</a>
        <ul>
          {props.list.map(function(item) {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
  )
}

export default SkillsCard;
