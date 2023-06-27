import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="EasyJobs" className='logo' />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Jobs <span>tracking</span> app
          </h1>
          <p>
            Look for jobs as easy as creating a profile.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className='img main-img'/>
      </div>
    </Wrapper>
  )
}

export default Landing