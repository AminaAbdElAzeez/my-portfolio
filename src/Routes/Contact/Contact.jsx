import './Contact.css';
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle'

const Contact = () => {
  const formHandler = (e) =>{
    e.preventDefault()
  }

  return (
    <section className='contact'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <HeadingTitle title={'contact'}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <form className='contact-form' onSubmit={formHandler}>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='contact-form-item'>
                                    <label htmlFor='name'>Your Name : </label>
                                    <input type='text' placeholder='Name *' id='name' required/>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='contact-form-item'>
                                    <label htmlFor='email'>Your Email : </label>
                                    <input type='email' placeholder='info@example.com' id='email' required/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12'>
                                <div className='contact-form-item'>
                                    <label htmlFor='textarea'>Message : </label>
                                    <textarea placeholder='Message *' id='textarea' rows='3'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12'>
                                <div className='contact-form-item'>
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </section>
  )
}

export default Contact
