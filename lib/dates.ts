import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(calendar)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

type WithDate = {
  date: string;
}

export enum DateMode {
  CARD,
  TEXT
}

export function formatDate(date: string | Date, mode: DateMode = DateMode.TEXT) {
  if (mode === DateMode.CARD) {
    return dayjs(date).format('DD MMM')
  }
  return dayjs(date).format('DD MMMM YYYY')
}

export function sortByMeetingDate(m1: WithDate, m2: WithDate) {
  // earlier dates go first
  return (new Date(m1.date)).getTime() - (new Date(m2.date)).getTime();
}

export function findNextMeeting(m: WithDate) {
  return dayjs().isSameOrBefore(dayjs(m.date), 'day')
}

export function formatMeetingDate(date: string) {
  if (!date) { return '' }
  return dayjs(date).calendar(dayjs())
}
