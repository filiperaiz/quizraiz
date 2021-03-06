import { useState } from 'react'
import { useRouter } from 'next/router'

import Footer from 'components/Footer'
import GitHubCorner from 'components/GitHubCorner'
import QuizBackground from 'components/QuizBackground'
import { QuizContainer } from 'components/QuizContainer'
import QuizLogo from 'components/QuizLogo'
import Widget from 'components/Widget'

import db from '../../../db.json'

const Home = () => {
  const router = useRouter()
  const [name, setName] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    router.push(`/quiz?name=${name}`)
  }

  const handleOnChange = (e) => {
    setName(e.target.value)
  }

  return (
    <QuizBackground backgroundImage="/img/bg.jpg">
      <QuizContainer>
        <QuizLogo className="logo" />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={handleOnSubmit}>
              <input onChange={handleOnChange} placeholder="Diz ai seu nome" />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
            </form>
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

export default Home
