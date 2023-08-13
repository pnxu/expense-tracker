export function getFormattedDate(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
