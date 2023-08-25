
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const getMonths = () => {
  const currentDate = new Date();
  const lastMonths = [];

  for (let i = 0; i < 51; i++) {
    lastMonths.push(
      capitalize(currentDate.toLocaleString("ru-RU", { month: "short" }))
    );

    currentDate.setDate(currentDate.getDate() - 30);
  }
  return [...new Set(lastMonths)].reverse();
};

export const getDateRel = (relative: number) => {
  return new Date(Math.round(Date.now() + relative * 86400000));
};

export const formatItemDate = (date: Date) =>
  date
    .toLocaleDateString("ru-RU", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .split(" ")
    .map(capitalize)
    .join(" ");

export const formatDataKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяц начинается с 0, поэтому добавляем 1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getDayCount = () => {
  const day = new Date().getDay();
  const weekDay = day === 0 ? 1 : 7 - (day - 1);
  return 357 - weekDay
};

const contribClasses: Record<string, (v: number) => boolean> = {
  "bg-primary-200": (v) => v >= 1 && v <= 9,
  "bg-primary-300": (v) => v >= 10 && v <= 19,
  "bg-primary-400": (v) => v >= 20 && v <= 29,
  "bg-primary-500": (v) => v >= 30,
};
export const getContributionColor = (contrib?: number) => {
  if (!contrib) return "bg-primary-100";
  return Object.entries(contribClasses).find(([c, cb]) => cb(contrib))?.[0];
};
