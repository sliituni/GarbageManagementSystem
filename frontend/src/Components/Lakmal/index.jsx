import React from 'react'
import { Header } from '../Header'
import Home from './Home';
import Schedule from '../Binguni/Schedule';
import GoogleMapContainer from '../Binguni/GoogleMapContainer';
import vector3 from './img/vector3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faRecycle, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function index() {
  return (
    <div>
      <Header />
      <Home />
      <Schedule />
      <div style={{ marginTop: '100px' }}>
        <div>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <div style={{ width: 810, height: 609, left: 0, top: 71, position: 'absolute', background: 'rgba(153, 255, 165.39, 0.71)', borderBottomRightRadius: 304.50, borderTopRightRadius: 304.50 }} />
                <img style={{ width: 766, height: 491, left: 74, top: 0, position: 'absolute', paddingLeft:'200px'}} src={vector3} />
              <div style={{ width: 414, height: 58, left: 265, top: 548, position: 'absolute'}}>
                <div style={{ width: 414, height: 58, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.89)', boxShadow: '10px 10px 10px ', borderRadius: 30, filter: 'blur(10px)' }} />
                <div style={{ left: 37, top: 19, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', letterSpacing: 2.40, wordWrap: 'break-word' }}>MY WASTE IS MY RESPONSIBILITY</div>
                </div>
              </div>
            </div>
          </div>
      <div className='container' style={{ marginLeft:'50%',paddingTop:'175px'}}>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='btn' style={{ width: '100%', height: '25%', padding: 20, background: '#F0F0F0', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 45, display: 'inline-flex' }}>
              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', padding: 20, background: '#FBBC05', borderRadius: 15, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                  <h3><FontAwesomeIcon icon={faGift} /></h3>
                </div>
              </div>
              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <div style={{ color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', paddingLeft: '100px' }}>Give Away</div>
              </div>
            </div>
            <br /><br />
            <div className='btn' style={{ width: '100%', height: '25%', padding: 20, background: '#F0F0F0', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 45, display: 'inline-flex' }}>
              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', padding: 20, background: '#34A853', borderRadius: 15, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                  <h3><FontAwesomeIcon icon={faRecycle} /></h3>
                </div>
              </div>
              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <div style={{ color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', paddingLeft: '100px' }}>Order Recycle Items</div>
              </div>
            </div>
            <br /><br />
            <div className='btn' style={{ width: '100%', height: '25%', padding: 20, background: '#F0F0F0', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 45, display: 'inline-flex' }}>
              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', padding: 20, background: '#1CB9E1', borderRadius: 15, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                  <h3><FontAwesomeIcon icon={faChartLine} /></h3>
                </div>
              </div>
              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <div style={{ color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', paddingLeft: '100px' }}>Garbage Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <Map />
    </div>
  )
}
