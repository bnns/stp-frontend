import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import utc from "dayjs/plugin/utc";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(calendar);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(advancedFormat);

type WithDate = {
  date: string;
};

type WithPublishedDate = {
  publishedAt: string;
};

export enum DateMode {
  CARD,
  TEXT,
}

export function formatDate(
  date: string | Date,
  mode: DateMode = DateMode.TEXT
) {
  if (mode === DateMode.CARD) {
    return dayjs(date).format("DD MMM");
  }
  return dayjs(date).format("DD MMMM YYYY");
}

export function sortByMeetingDate(m1: WithDate, m2: WithDate) {
  // earlier dates go first
  return new Date(m1.date).getTime() - new Date(m2.date).getTime();
}

export function sortByPublishedDate(
  a1: WithPublishedDate,
  a2: WithPublishedDate
) {
  // earlier dates go first
  return (
    new Date(a2.publishedAt).getTime() - new Date(a1.publishedAt).getTime()
  );
}

export function findNextMeeting(m: WithDate) {
  return dayjs().isSameOrBefore(dayjs(m.date), "day");
}

export function formatMeetingDate(date: string) {
  if (!date) {
    return "";
  }

  return dayjs.utc(date).tz().calendar(dayjs(), {
    sameDay: "[Today at] h:mm A z", // ( Today at 2:30 AM CST)
    nextDay: "[Tomorrow at] h:mm A z", // ( Tomorrow at 2:30 AM CST)
    nextWeek: "dddd [at] h:mm A z", // ( Sunday at 2:30 AM CST)
    lastDay: "[Yesterday at] h:mm A z", // ( Yesterday at 2:30 AM CST)
    lastWeek: "[Last] dddd [at] h:mm A z", // ( Last Monday at 2:30 AM CST)
    sameElse: "DD/MM/YYYY h:mm A z", // ( 17/10/2011 2:30 AM CST)
  });
}
