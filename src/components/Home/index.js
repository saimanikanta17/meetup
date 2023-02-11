import {Link} from 'react-router-dom'

import MeetupContext from '../../context/MeetupContext'
import Header from '../Header'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {name, topic, isRegistered} = value

      return (
        <div>
          <Header />
          {isRegistered ? (
            <div>
              <h1>Hello {name}</h1>
              <p>Welcome to {topic}</p>
            </div>
          ) : (
            <div>
              <h1>Welcome to Meetup</h1>
              <p>Please register for the topic</p>
              <Link to="/register">
                <button type="button">Register</button>
              </Link>
            </div>
          )}
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
