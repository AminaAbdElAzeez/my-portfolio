import { Fragment, useEffect, useState } from 'react';
import LeftSide from '../../Components/LeftSide/LeftSide';
import Navbars from '../../Components/Navbar/Navbar';
import Particle from '../../Components/Particle/Particle';
import RightSide from '../../Components/RightSide/RightSide';
import './Root.css';
import { FadeLoader } from 'react-spinners';
import TopBtn from '../../Components/TopBtn/TopBtn';


function Root() {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=> {
      setLoading(false)
    },3000)
  },[])

  return (
    <section className="root">
    {
      loading ?
      <FadeLoader color={"#D00216"} loading={loading} size={30} aria-label="Loading Spinner" data-testid="loader" className='spin'/>
      : 
      <Fragment>
        <Particle/>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12 col-sm-12'>
              <LeftSide/>
            </div>
            <div className='col-lg-8 col-md-12 col-sm-12'>
              <Navbars/>
              <RightSide/>
              <TopBtn/>
            </div>
          </div>
        </div>
      </Fragment>
    }
    </section>
  )
}

export default Root;

