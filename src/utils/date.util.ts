const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const convertDateToMonth = (inputDate: string): string => {
  const [day, month] = inputDate.split('/').map(Number)

  const formattedDate = `${day} ${monthNames[month - 1]}`

  return formattedDate
}

export const convertFullDate = (inputDate: Date): string => {
  const weekdayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

  const day = inputDate.getUTCDate()
  const month = inputDate.getMonth()
  const year = inputDate.getFullYear()

  const result = `${weekdayNames[inputDate.getDay()]} ${day} ${
    monthNames[month]
  } ${year}`

  return result
}
