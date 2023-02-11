import MeetupContext from '../../context/MeetupContext'
import Header from '../Header'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <MeetupContext.Consumer>
    {value => {
      const {name, topic, changeName, changeTopic, changeStatus} = value
      const clickBtn = () => {
        changeStatus()
        const {history} = props
        history.replace('/')
      }
      return (
        <div>
          <Header />
          <div className="register-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <form>
              <h1>Let us join</h1>
              <label>
                Name
                <input
                  type="text"
                  value={name}
                  placeholder="Your Name"
                  onChange={changeName}
                />
              </label>
              <label>
                TOPICS
                <select value={topic} onChange={changeTopic}>
                  {topicsList.map(each => (
                    <option key={each.id} value={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" onClick={clickBtn}>
                Register Now
              </button>
            </form>
          </div>
        </div>
      )
    }}
  </MeetupContext.Consumer>
)

export default Register
