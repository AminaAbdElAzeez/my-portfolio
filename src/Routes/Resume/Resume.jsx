import './Resume.css';
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle';

const Resume = () => {
  return (
    <section className='resume'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <HeadingTitle title={'resume'}/>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <h3 className='resume-title'><i className="bi bi-mortarboard-fill"></i>education</h3>
          <ul>
            <li>Bachelor's Degree in Bio-informatics <span>2017-2021</span></li>
          </ul>
          <p className='resume-desc'>
          Faculty of Computers and Information Menofia University, Department of Bioinformatics
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <h3 className='resume-title'><i className="bi bi-book-half"></i>courses</h3>
          <ul>
            <li>JavaScript Course by Jonas Schmedtmann.</li>
            <li>React, Redux by Jonas Schmedtmann.</li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <h3 className='resume-title'><i className="bi bi-briefcase-fill"></i>experience</h3>
          <ul>
            <li>Trainning in Solo-Mind Company <span>01-08-2023 : 30-01-2024</span></li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <HeadingTitle title={'skills'}/>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <ul className='skills'>
            <li>HTML / HTML5</li>
            <li>CSS / CSS3</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>React JS</li>
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Resume
