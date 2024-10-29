import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the json
 * @param {Element} block The block element
 */
export default async function decorate(block) {
  // load spreadsheet json block
  console.log("spreadsheet json block");
  console.log(block);
  const source = block.querySelector('a[href]') ? block.querySelector('a[href]').href : '/day5spreadsheet.json';

  console.log("source");
  console.log(source);
  block.innerHTML = '';

  block.append("<div>list</div>");
}
