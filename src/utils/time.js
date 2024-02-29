export const minutesToHours = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;
  const minutesText = `00${min}`.slice(-2);

  return `${hours}h${minutesText}m`;
};
