import { createOptimizedPicture, fetchPlaceholders } from '../../scripts/aem.js';

export default async function decorate(block) {
  /* change to ul, li */

  /* placeholder day 3*/
  const placeholders = await fetchPlaceholders();
  console.log("cards placeholders")
  console.log(placeholders)

  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
      const clickMore = div.querySelector('h3');
      if (clickMore) {
          console.log(clickMore)
          clickMore.className = "click-more"
          clickMore.textContent=placeholders['clickHereForMore'];
      }
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
