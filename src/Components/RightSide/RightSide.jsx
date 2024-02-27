import { Outlet } from 'react-router-dom'
import './RightSide.css'

const RightSide = () => {
  return (
    <section className='right-side'>
      <Outlet/>
    </section>
  )
}

export default RightSide
