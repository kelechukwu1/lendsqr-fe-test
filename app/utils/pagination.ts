export const getPageNumbers = (currentPage: number, totalPages: number) => {
  const pages: (number | string)[] = [];
  
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages - 1, totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, 2, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      const start = currentPage - 2;
      pages.push(start, start + 1, start + 2, start + 3, "...", totalPages - 1, totalPages);
    }
  }
  
  return pages;
};
