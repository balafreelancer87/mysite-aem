import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';


export async function fetchData(source) {
    const response = await fetch(source);
    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.error('error loading API response', response);
      return null;
    }
  
    const json = await response.json();
    if (!json) {
      // eslint-disable-next-line no-console
      console.error('empty API response', source);
      return null;
    }
  
    return json.data;
  }
  

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

  const resp = await fetch(`${source}`);
  const json = await resp.json();
  console.log(json);

  const ul = document.createElement('ul');
  json.data.forEach((row) => {
    console.log(row.Source);
    const li = document.createElement('li');
    li.textContent=row.Source;
    ul.append(li);
  });

  block.append(ul);
}
