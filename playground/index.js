import { h, render } from 'preact'
import { Application } from './Application'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { LollipopProvider } from "../src/components/lollipop/LollipopProvider"

render(
  <LollipopProvider>
    <Application/>
  </LollipopProvider>,
  document.getElementById('root')
)