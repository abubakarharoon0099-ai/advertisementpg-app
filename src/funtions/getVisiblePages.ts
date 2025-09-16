export function getVisiblePages(total: number, current: number): number[] {
  if (total <= 3) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current === 1) {
    return [1, 2, 3];
  }
  if (current === total) {
    return [total - 2, total - 1, total];
  }
  return [current - 1, current, current + 1];
}