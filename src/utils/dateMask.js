export const convertDateToUTC = (date) => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
};

export const mask = (date, options) => {
  return new Date(convertDateToUTC(new Date(date))).toLocaleDateString(
    "pt-BR",
    options
  );
};

export const shortDateMask = (date) => {
  return mask(date, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const longDateMask = (date) => {
  return mask(date, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const numericDateMask = (date) => {
  return mask(date, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};

export const fullYearDateMask = (date) => {
  return mask(date, {
    year: "numeric",
  });
};
