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

export function sortByMeetingDate(m1: WithDate, m2: WithDate) {
    return (new Date(m2.date)).getTime() - (new Date(m1.date)).getTime();
}

export function findNextMeeting(m: WithDate) {
    return dayjs().isSameOrBefore(dayjs(m.date))
}

export function formatMeetingDate(date: string) {
    if (!date) { return '' }
    return dayjs(date).calendar(dayjs())
}
