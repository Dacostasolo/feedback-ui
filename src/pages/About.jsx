import {Link} from 'react-router-dom'
import Card from '../components/shared/Card'

function About() {
  return <Card>
      <div className="about">
        <h4>About Section</h4>
        <p>This is an application to give your feedback on our product please give a honest feedback</p>
        <Link to='/'>Return to home</Link>
      </div>
  </Card>
}

export default About
