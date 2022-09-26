import { useState } from 'react'
import './App.css'

import GiftSelectorIcon from './assets/images/GiftSelector.png'
import GreetingIcon from './assets/images/Greeting.png'
import GrammarIcon from './assets/images/Grammar.png'
import SorterIcon from './assets/images/Sorter.png'
import Colorpicker from './assets/images/Colorpicker.png'

import Layout from './components/layout/Layout'
import Welcome from './components/welcome/Welcome'
import GiftSelector from './components/giftselector/GiftSelector'
import Greeting from './components/greeting/Greeting'
import Grammar from './components/grammar/Grammar'
import Filter from './components/filter/Filter'
import Colors from './components/colors/Colors'

function App() {
  const [icons, setIcons] = useState([GiftSelectorIcon, GreetingIcon, GrammarIcon, SorterIcon, Colorpicker])
  const [app, setApp] = useState('Welcome')
  return (
    <div className="App">
      <Layout appIcons={icons} app={setApp}>
        {/.*Welcome.*/.test(app) && <Welcome/>}
        {/.*GiftSelector.*/.test(app) && <GiftSelector/>}
        {/.*Sorter.*/.test(app) && <Filter />}
        {/.*Greeting.*/.test(app) && <Greeting />}
        {/.*Grammar.*/.test(app) && <Grammar/>}
        {/.*Colorpicker.*/.test(app) && <Colors/>}
      </Layout>
          </div>
  )
}

export default App
