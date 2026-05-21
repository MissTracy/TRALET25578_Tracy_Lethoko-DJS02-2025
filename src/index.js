import { podcasts } from "./data.js";
import { createModal } from "./components/createModal.js";
import { createGrid } from "./views/createGrid.js";
import "./components/PodcastPreview.js";


/**
 * Initializes the podcast application.
 *
 * @principle SRP - Only responsible for application startup logic like event binding and rendering initial grid.
 */
function init() {
  document
    .getElementById("closeModal")
    .addEventListener("click", createModal.close);

    const clearPlaceholder = document.getElementById("podcastGrid");
    clearPlaceholder.innerHTML = "";

    const gridLayout = createGrid(podcasts);
    clearPlaceholder.appendChild(gridLayout);

    clearPlaceholder.addEventListener("podcast-selected", (event) => {
      // Extract the data sent from the click
      const podcastData = event.detail;

      createModal.open(podcastData);
    });
  }

  init();
