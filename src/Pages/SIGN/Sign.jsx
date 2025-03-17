import { Link } from 'react-router-dom'
import './Sign.css'

export default function SignUp() {
    return (

        <div className='signup'>
            <div className="card">
                <div className="left">
                    <h2>Social-X SignUp</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Consectetur consequuntur
                        nemo incidunt. Mollitia, iure suscipit.
                    </p>
                    <span> Have An Account?</span>
                    <Link to='/login'>
                    <button className="btn btn-primary">Login</button>
                    </Link>
                   
                </div>
                <form className="right">
                    <input type="text" required placeholder="username" />
                    <input type="email" required placeholder="email" />
                    <input type="password" required placeholder="password" />
                    <button type="submit" className='btn'>SignUp</button>
                </form>
            </div>
        </div>
    )
}