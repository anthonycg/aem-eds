export default function decorate(block) {
  const rows = [...block.children];

  block.classList.add("hero-wrapper");

  rows.forEach((row) => {
    const cells = [...row.children];

    cells.forEach((cell, index) => {
      if (index === 0) {
        cell.classList.add("hero-image");
      } else {
        cell.classList.add("hero-content");
      }
    });
  });
}
