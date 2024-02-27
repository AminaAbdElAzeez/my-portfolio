import './LeftSide.css';
import image from '../../Assets/pic.jpg'

const LeftSide = () => {
  return (
    <section className='left-side'>
      <img src={image} alt='my-pic'/>
      <h1 className='my-name'>Amina AbdElAzeez</h1>
      <p>front-end developer</p>
      <ul className='social'>
        <li>
        <a href='https://www.facebook.com/profile.php?id=100086724261385&locale=ar_AR' target='blank'><i className="bi bi-facebook"></i></a>
        </li>
        <li>
        <a href='https://github.com/AminaAbdElAzeez' target='blank'><i className="bi bi-github"></i></a>
        </li>
        <li>
        <a href='https://www.linkedin.com/in/amina-abdelazeez-b8286925b/' target='blank'><i className="bi bi-linkedin"></i></a>
        </li>
      </ul>
      <ul className='info'>
        <li><i className="bi bi-phone-fill"></i>01554399008</li>
        <li><a href='mailto:aminaabdelazeez99@gmail.com' target='blank'><i className="bi bi-envelope-paper-fill"></i>aminaabdelazeez99@gmail.com</a></li>
        <li><i className="bi bi-geo-alt-fill"></i>Tanta-ElGarbyah</li>
        <li><i className="bi bi-calendar-event-fill"></i>01-01-1999</li>
      </ul>
      {/*<button className='cv'>download cV<i className="bi bi-download"></i></button>*/}
    </section>
  )
}

export default LeftSide
