export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const cells = [...row.children];

    cells.forEach((cell) => {
      const picture = cell.querySelector("picture");
      if (picture) {
        cell.classList.add("hero-image");
      } else {
        cell.classList.add("hero-content");
      }
    });
  });
}
