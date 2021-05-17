import { CompatLocalization } from '../../utils/CompatLocalization'

export const Actions = {
  'ViewDate': (_, { date: viewedDate }) => ({ viewedDate }),
  'ViewMonth': (_, { year, month }) => ({ viewedDate: new Date(year, month) }),
  'ViewPrevMonth': ({ viewedDate }) => {
    const { prevMonth, prevMonthYear } = extractDateData(viewedDate)
    return { viewedDate: new Date(prevMonthYear, prevMonth) }
  },
  'ViewNextMonth': ({ viewedDate }) => {
    const { nextMonth, nextMonthYear } = extractDateData(viewedDate)
    return { viewedDate: new Date(nextMonthYear, nextMonth) }
  },
  'SelectDate': ({ viewedDate }, { date }) => ({
    selectedDate: new Date(viewedDate.getFullYear(), viewedDate.getMonth(), date)
  }),
  'SelectPrevMonthDate': ({ viewedDate }, { date }) => {
    const { prevMonth, prevMonthYear } = extractDateData(viewedDate)
    return {
      viewedDate: new Date(prevMonthYear, prevMonth),
      selectedDate: new Date(prevMonthYear, prevMonth, date)
    }
  },
  'SelectNextMonthDate': ({ viewedDate }, { date }) => {
    const { nextMonth, nextMonthYear } = extractDateData(viewedDate)
    return {
      viewedDate: new Date(nextMonthYear, nextMonth),
      selectedDate: new Date(nextMonthYear, nextMonth, date)
    }
  },
  'ToggleExtendedSelection': ({ extended }) => ({ extended: !extended })
}

const extractDateData = date => {
  const year = date.getFullYear()
  const month = date.getMonth()

  const prevMonth = CompatLocalization.prev_month(month)
  const nextMonth = CompatLocalization.next_month(month)

  const prevMonthYear = CompatLocalization.prev_month_year(year, month)
  const nextMonthYear = CompatLocalization.next_month_year(year, month)

  return { prevMonth, nextMonth, prevMonthYear, nextMonthYear }
}