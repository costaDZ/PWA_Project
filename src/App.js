import React, { useEffect, useState } from 'react';

import '../src/styles.css';
import { MainTitle, BtnsSection, SideBar } from './components';
import { Header, Overlay } from './sections';

import { connect } from 'react-redux';
import { handelScroll, handelSideBar } from './redux/actions/action';

import testlaX from './images/model-x.jpg';
import testlaY from './images/model-y.jpg';
import model3 from './images/model-3.jpg';
import modelS from './images/model-s.jpg';
import solarPanel from './images/solar-panel.jpg';
import solarRoof from './images/solar-roof.jpg';
import accessories from './images/accessories.jpg';


function App({ trackScrollWindow, setSideBarPosition, sideBar }) {

  const [position, setPosition] = useState(0);

  window.addEventListener('scroll', (e) => {
    let currentPosition = window.pageYOffset;
    let countPosition = Number((currentPosition / window.innerHeight).toFixed(1));
    setPosition(countPosition);
  })

  useEffect(() => {
    trackScrollWindow(position);
  }, [position, trackScrollWindow])

  function sideBarTrigger(e) {
    if (e.target.innerText !== "Menu") {
      setSideBarPosition("close");
    }
  }

  return (
    <>
      <SideBar />
      <div onClick={(e) => sideBarTrigger(e)} className={sideBar ? "blure" : ""}>
        <Header />
        <MainTitle />
        <BtnsSection />
        <Overlay img={modelS} />
        <Overlay img={testlaX} />
        <Overlay img={testlaY} />
        <Overlay img={model3} />
        <Overlay img={solarPanel} />
        <Overlay img={solarRoof} />
        <Overlay img={accessories} />
      </div>
    </>
  )

}

const mapDispatchToProps = dispatch => ({
  trackScrollWindow: position => dispatch(handelScroll(position)),
  setSideBarPosition: (dir) => dispatch(handelSideBar(dir)),
})
const mapStateToProps = state => ({
  sideBar: state.reducer.sideBar,
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
