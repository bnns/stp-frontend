import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(calendar)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

export function sortByMeetingDate(m1, m2) {
    return new Date(m2.date) - new Date(m1.date);
}

export function findNextMeeting(m) {
    return dayjs().isSameOrBefore(dayjs(m.date))
}

export function formatMeetingDate(date) {
    if (!date) { return '' }
    return dayjs(date).calendar(dayjs())
}
