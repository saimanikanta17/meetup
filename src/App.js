import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'
import './App.css'

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

class App extends Component {
  state = {name: '', topic: topicsList[0].displayTexts, isRegistered: false}

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeTopic = event => {
    this.setState({topic: event.target.value})
  }

  changeStatus = () => {
    this.setState({isRegistered: true})
  }

  render() {
    const {name, topic, isRegistered} = this.state

    return (
      <MeetupContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          changeStatus: this.changeStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
