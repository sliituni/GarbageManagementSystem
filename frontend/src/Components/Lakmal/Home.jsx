import React from 'react'
import Button from '@mui/material/Button';
import vector1 from './img/vector1.png';
import vector2 from './img/vector2.png';

export default function Home() {
  return (
        <div id='about' className='container' style={{paddingTop:'150px'}}>
        <div className='row'>
          <div className='col-sm-6'>
            <h1 style={{fontSize:'90px',fontFamily:'initial'}}>Reduce</h1>
            <h1 style={{fontSize:'100px',color:'#34A853',fontFamily:'initial'}}>RECYCLE</h1>
            <h1 style={{fontSize:'90px',fontFamily:'initial'}}>Reuse</h1>
            <br/><br/>
            <p>
            Revolutionize waste disposal with our intuitive platform. Streamline garbage collection, 
            track bins, and optimize routes effortlessly. Real-time updates ensure efficient operations. From residential to commercial needs, 
            manage waste responsibly. Join us in creating a cleaner, greener future. Sign up now and transform your waste management experience.
            </p>
            <br/><br/>
            <a href='#gscheadule' >
              <Button variant="contained" style={{background:'#34A853', color:'white', borderRadius: '30px'}}><b style={{padding:'5px 20px 0px 20px'}}>View Schedule</b></Button>
            </a>
          </div>
          <div className='col-sm-6' style={{marginTop:'260px'}}>
            <img src={vector1} alt='vector1' />
          </div>
        </div>
        <div style={{marginTop:'100PX'}}>
        <div className='row'>
          <div className='col-sm-6'>
            <img src={vector2} alt='vector2' />
          </div>
          <div className='col-sm-6'>
            <h3 style={{color:'#34A853', fontWeight:'bold', letterSpacing: '6px'}}>INSTRUCTIONS</h3>
            <br/><h4>
            <ul>
                <li>Instruction 1</li><br/>
                <li>Instruction 2</li><br/>
                <li>Instruction 3</li><br/>
                <li>Instruction 4</li><br/>
                <li>Instruction 5</li><br/>
            </ul></h4>
          </div>
        </div>
        </div>
      </div>
  )
}
