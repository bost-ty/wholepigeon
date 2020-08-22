const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((gridItem) =>
  gridItem.addEventListener("click", function () {
    window.open(gridItem.dataset.post, "_blank", "noopener,noreferrer");
  })
);
