export const getVisibleColors = (items: Array<number[]>, currentIndex: number, itemsToShow = 6) => {
  const totalItems = items.length;
  const halfToShow = Math.floor(itemsToShow / 2);

  let start = currentIndex - halfToShow;
  if (start < 0) {
    start = 0;
  }

  let end = start + itemsToShow;
  if (end > totalItems) {
    end = totalItems;
    start = end - itemsToShow > 0 ? end - itemsToShow : 0;
  }

  return items.slice(start, end);
};