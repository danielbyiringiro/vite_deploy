import './Home.css'
import UniGhanaLogo from '../assets/unighana.png'
import HomeImage from '../assets/home_image.png'
import Ashesi from '../assets/ashesi.png'
import KNUST from '../assets/knust.png'
import Legon from '../assets/legon.png'
import Academic from '../assets/academic_city.png'
import { Link } from "react-router-dom"
import Signin from './Signin'

export default () =>
    {
        return(
            <>
            <div>
                <div className='Header'>
                    <div className='div_logo'>
                        <img src={UniGhanaLogo} className='logo'></img>
                        <p id="logo_text">UniGhana</p>
                    </div>
                    <div className='header_middle'>
                        <Link className='link' to='/universitysearch'>University Search</Link>
                        <Link className='link' to="/scholarship">Scholarships</Link>
                        <Link className='link' to="/gallery">Gallery</Link>
                    </div>
                    <div className='header_last'>
                        <p className="link" id="login_text"><Signin/></p>
                    </div>
                </div>
                <div className='Middle'>
                    <div className='image-container'>
                        <img src={HomeImage}/>
                        <div className='overlay-text'>
                            <p id="middle_text_first">Higher Education</p>
                            <p id="middle_text_second">-at your doorstep</p>
                            <p id="middle_text_third">Explore your future with us now. No more waiting.</p>
                            <button id="middle_button">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='Last'>
                    <p id="last_first">Find the university of your dreams</p>
                    <div className='university-grid'>
                        <div className='university-card ashesi'>
                            <Link className="university-name" to="/ashesi">Ashesi University</Link>
                            <p className="university-description">Explore Ashesi University with us now. From its campus to programs offered.</p>
                            <img src={Ashesi} alt="Ashesi University" />
                        </div>
                        <div className='university-card knust'>
                            <Link className="university-name" to="/knust">Kwame Nkrumah University of Science and Technology</Link>
                            <p className="university-description">Explore KNUST, the region of Gold with us now. From its campus to programs offered.</p>
                            <img src={KNUST} alt="KNUST" />
                        </div>
                        <div className='university-card academic'>
                            <Link className="university-name" to="/academic">Academic City University College</Link>
                            <p className="university-description">Explore Academic City with us now. From its campus to programs offered.</p>
                            <img src={Academic} alt="Academic City" />
                        </div>
                        <div className='university-card legon'>
                            <Link className="university-name" to="/legon">University of Ghana</Link>
                            <p className="university-description">Explore the premier university with us now. From its campus to programs offered.</p>
                            <img src={Legon} alt="University of Ghana" />
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }