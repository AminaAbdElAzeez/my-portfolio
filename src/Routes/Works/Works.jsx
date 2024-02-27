import './Works.css';
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle';
import {data} from '../../Data/Data.js'
import { useState } from 'react';

const Works = () => {
  const [items,setItems] = useState(data);

  const filterItems = (catItem) => {
    const updateItems = data.filter((curItem)=>{
      return curItem.category  === catItem
    });
    setItems(updateItems);
  }

  return (
    <section className='works'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <HeadingTitle title={'works'}/>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <div className='filter-btn'>
          <button type='button' onClick={()=>setItems(data)}>all</button>
          <button type='button' onClick={()=>filterItems('react')}>react</button>
          <button type='button' onClick={()=>filterItems('javascript')}>js</button>
          <button type='button' onClick={()=>filterItems('css')}>css</button>
          </div>
        </div>
      </div>
      <div className='row'>
        {
          items.map((item)=>(
            <div className='col-lg-6 col-md-12 col-sm-12' key={item.id}>
              <div className='work-box'>
                <img src={item.image} alt={item.title}/>
                <a href={item.link} target='blank' alt={item.title} className='works-link'>
                  <div className='work-box-overlay'>
                    <div className='overlay-content'>
                      <i className="bi bi-eye-fill"></i>
                      <h4 className='work-box-title'>{item.title}</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Works
