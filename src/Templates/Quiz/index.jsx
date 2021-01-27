import Footer from 'components/Footer'
import GitHubCorner from 'components/GitHubCorner'
import QuizBackground from 'components/QuizBackground'
import { QuizContainer } from 'components/QuizContainer'
import QuizLogo from 'components/QuizLogo'
import Widget from 'components/Widget'

import db from '../../../db.json'

const Quiz = () => {
  return (
    <QuizBackground backgroundImage="/img/bg.jpg">
      <QuizContainer>
        <QuizLogo className="logo" />
        <Widget>
          <Widget.Header>
            <h1>Quiz Page</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  )
}

export default Quiz
