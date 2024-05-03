import dayjs from "dayjs";

export const convertDateFormat = (dateTimeString: string) => {
  return dayjs(dateTimeString).format("YYYY/MM/DD");
};

export const convertDateFormatCross = (dateTimeString: string) => {
  return dayjs(dateTimeString).format("YYYY-MM-DD");
};
export const formatDate = (dateString: string): string => {
  return dayjs(dateString).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
};
