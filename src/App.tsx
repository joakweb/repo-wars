import React, {useState} from "react"
import './app.css'

const App = () => {
  const [showGame, setShowGame] = useState<boolean>(false)
  const [repos, setRepos] = useState([])
  return <main>
    {!showGame && (
      <>
      <h1>Welcome to repo-wars</h1>
      <h2>A developer-driven guessing game</h2>
      {/* TODO: continue */}
      {repos.length === 0 ? (<p>loading game...</p>) : (<button>Start</button>)}
      </>
    )}
    {showGame && (
      // TODO: create game component
      <>
      <h1>Game</h1>
      </>
    )}
  </main>
}

export default App
