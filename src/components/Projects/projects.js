import React from 'react';
import "./projects.css";
const projects = () => {
  return (
    <div>
    <span className='projectTitle'>Projects</span>
    <section id= "projects">
                 <container  className=' projectHistory'>
                    <p> <h3>Cafeteria Ordering System</h3> <br/>
                 
                  <p >Developed a Cafeteria Ordering System in C with separate interfaces for admin and customers, effectively addressing long lines, order inaccuracies, and internet connectivity issues. Streamlining the process significantly enhanced cafeteria efficiency, ensuring prompt service delivery and boosting customer satisfaction.</p>   
                   </p> 
                </container> 
                <container className=' projectHistory'>
                    <p> <h3>Counterfeit Product Detection</h3> <br/> 
                    Developed a decentralized web app utilizing Blockchain and smart contracts to detect counterfeit products, employing QR code scanning for consumer verification. This secure solution ensured transparency and trust in product authenticity, bolstering consumer confidence and brand protection.</p>
                </container>
            </section>
            </div>
  )
}

export default projects