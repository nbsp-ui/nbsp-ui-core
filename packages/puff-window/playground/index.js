import '@fortawesome/fontawesome-free/css/all.min.css'
import { h, render } from 'preact'
import { Playground } from './components/Playground'

const root = document.createElement('div')

document.body.appendChild(root)

render(<Playground/>, root)