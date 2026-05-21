
import { DateUtils } from '../utils/DateUtils.js';
import { GenreService } from '../utils/GenreService.js'

export const createGrid = (podcasts) => {
  const grid = document.createElement('div');
  grid.className = 'grid'; 

  podcasts.forEach(podcast => {
      // creating new custom tag
      const podcastElement = document.createElement('podcast-preview');

      // maping eelemnts
      podcastElement.setAttribute('title', podcast.title);
      podcastElement.setAttribute('image', podcast.image);
      podcastElement.setAttribute('seasons', podcast.seasons);
      // converting numbers to text inline
      podcastElement.setAttribute('genres', GenreService.getNames(podcast.genres).join(', '));
      podcastElement.setAttribute('updated', DateUtils.format(podcast.updated));

      grid.appendChild(podcastElement);
  });

  return grid;
};






// import { createPodcastCard } from "../components/createPodcastCard.js";
// import { createModal } from "../components/createModal.js";

// /**
//  * Grid Renderer - Responsible for rendering the grid of podcast cards.
//  *
//  * @principle SRP - Manages layout and rendering only; delegates card creation and modal logic elsewhere.
//  */
// export const createGrid = () => {
//   const container = document.getElementById("podcastGrid");

//   return {
//     /**
//      * Renders a list of podcast cards into the grid.
//      * @param {Object[]} podcastList - Array of podcast objects.
//      */
//     render(podcastList) {
//       container.innerHTML = "";
//       podcastList.forEach((p) => {
//         const card = createPodcastCard(p, createModal.open);
//         container.appendChild(card);
//       });
//     },
//   };
// };
