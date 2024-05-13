import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { randomQuote } from "./quotes.js"
import { renderQuotes } from './quotes.js';
import { moveToTop } from './quotes.js';

document.querySelector("#quote").textContent = randomQuote()
document.querySelector("#quote").textContent = renderQuotes()
document.querySelector("#quote").textContent = moveToTop()

