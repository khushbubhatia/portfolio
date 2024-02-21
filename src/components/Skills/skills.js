import React from 'react'
import './skills.css';

const skills = () => {
  return (
    <section id="skills">
         <span className='skillTitle'> What I do </span>
         <span className='skillDesc'> I am a Front End Developer moving towards Full Stack Development. I have understanding of design, I have worked on few projects and won hackathons. Apart from this I've actively been in clubs where I've lead my juniors eg: Google Developers Student Club, Hack Club. </span>
         
         <div className='skillBars'>
            <div className='skillBarText'>
                <h2>Front End Developer</h2>
                 <p>Technologies I've worked with <br/>HTML CSS JavaScript <b>Framework</b>  : ReactJs</p>
            </div>
        </div>

        <div className='skillBars'>
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>Figma</p>
            </div>
        </div>

   
    </section>  
    )
}

export default skills