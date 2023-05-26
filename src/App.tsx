import { Link } from 'react-router-dom'
import usePageHead from './hooks/usePageHead'
import IndexStyle from './css/app.module.css'
import Logo from './assets/logo.svg'
import HeroImg from './assets/hero-img.png'

function App() {
    usePageHead("Home | ULES Voting app", "the voting app for ULES");
  return (
      <div className={IndexStyle.body}>
          <nav>
              <Link to="/">
                  <img src={Logo} alt="logo of ULES voting app" />
              </Link>
          </nav>
          <main>
              <header className={IndexStyle.header}>
                  <h2>Faculty of Engineering Awards Night</h2>
                  <h1>
                      <span>
                          Join the Action : Vote for your <strong>Faculty Awards Dinner</strong> Winners
                      </span>
                  </h1>
                  <p>Vote for your favorite contestants in the various categories</p>
                  <div className={IndexStyle.desktopCTAs}>
                      <button className={IndexStyle.voteCTA}>Vote now</button>
                      <button className={IndexStyle.donateCTA}>Donate now</button>
                  </div>
              </header>
              <figure className={IndexStyle.figure}>
                  <img src={HeroImg} alt="" />
              </figure>
              <div className={IndexStyle.mobileCTAs}>
                  <button className={IndexStyle.voteCTA}>Vote now</button>
                  <button className={IndexStyle.donateCTA}>Donate now</button>
              </div>
          </main>
      </div>
  )
}

export default App
