import React from 'react'

function ProjectCard(props) {
  const icons = {
    source: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
    view: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
  };
  return (
      <>
        <div className="project-card-container">
          <div className="project-card-row">
            <img
                src={props.src}
            />
            <div className="project-card-links">
              <a>{props.name}</a>
              {props.linkToSource ?
                  <div className="project-card-icon-row">
                    <svg width="22" height="22" viewBox="20 20 1024 1024">
                      <path d={icons["source"]}  transform="scale(45,45)" fill="#939292"></path>
                    </svg>
                    <a rel={'external'} className='btn-mobile'
                       target="_blank" href={props.linkToSource}>source code</a>
                  </div>
                  : null}
              {props.linkToView ?
                  <div className="project-card-icon-row">
                    <svg width="22" height="22" viewBox="20 20 1024 1024">
                      <path d={icons["view"]}  transform="scale(45,45)" fill="#939292"></path>
                    </svg>
                    <a rel={'external'} className='btn-mobile'
                       target="_blank" href={props.linkToView}>view project</a>
                  </div>
                  : null}

            </div>
          </div>
          <div className="project-card-row">
            <div className="project-card-row-text">
              <a> {props.text}</a>
            </div>
          </div>
        </div>
      </>
  )
}
export default ProjectCard;
