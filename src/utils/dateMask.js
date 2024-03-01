function convertDateToUTC(date) {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
}

export const shortDateMask = (date) => {
  return new Date(convertDateToUTC(new Date(date))).toLocaleDateString(
    "pt-BR",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
};

export const longDateMask = (date) => {
  return new Date(convertDateToUTC(new Date(date))).toLocaleDateString(
    "pt-BR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
};

export const numericDateMask = (date) => {
  return new Date(convertDateToUTC(new Date(date))).toLocaleDateString(
    "pt-BR",
    {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
  );
};

export const fullYearDateMask = (date) => {
  return new Date(convertDateToUTC(new Date(date))).toLocaleDateString(
    "pt-BR",
    {
      year: "numeric",
    }
  );
};
