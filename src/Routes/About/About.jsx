import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle';
import './About.css';

const About = () => {
  return (
    <section className='about'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <HeadingTitle title={'about'}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <p className='about-desc'>
                Hi, I'm Amina, a junior Front-End Developer. Looking for
                an opportunity as a Frontend Developer in a
                professional environment where I can expand my
                learning, Knowledge and skills while making a significant
                contribution to the success of the company. I'd love to
                combine my passion for programming and building
                personalized useful products for people.
                </p>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <HeadingTitle title={'what i do?'}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='about-box'>
                    <i className="bi bi-code-slash"></i>
                    <div className='about-text'>
                        <h3>Web Development</h3>
                        <p className='about-text-desc'>
                        High-quality development of sites at the professional level.
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='about-box'>
                <i className="bi bi-palette2"></i>
                    <div className='about-text'>
                        <h3>Web Design</h3>
                        <p className='about-text-desc'>
                        The most modern design made at the professional level.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
