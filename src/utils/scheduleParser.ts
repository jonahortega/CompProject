import { RegisteredCourse } from '../types/course'

export interface ScheduleSlot {
  day: string
  startTime: string
  endTime: string
  course: RegisteredCourse
}

export interface DaySchedule {
  day: string
  slots: ScheduleSlot[]
}

const dayMap: { [key: string]: number } = {
  'Mon': 1,
  'Tue': 2,
  'Wed': 3,
  'Thu': 4,
  'Fri': 5
}

const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export const parseSchedule = (schedule: string): { days: string[], startTime: string, endTime: string } | null => {
  // Parse formats like "Mon, Wed 10:00-11:30" or "Tue 13:00-16:00"
  const match = schedule.match(/([A-Za-z, ]+)\s+(\d{1,2}:\d{2})-(\d{1,2}:\d{2})/)
  if (!match) return null

  const daysStr = match[1].trim()
  const days = daysStr.split(',').map(d => d.trim())
  const startTime = match[2]
  const endTime = match[3]

  return { days, startTime, endTime }
}

export const buildWeeklySchedule = (courses: RegisteredCourse[]): DaySchedule[] => {
  const scheduleMap: { [key: number]: ScheduleSlot[] } = {
    1: [], // Monday
    2: [], // Tuesday
    3: [], // Wednesday
    4: [], // Thursday
    5: []  // Friday
  }

  courses.forEach(course => {
    const parsed = parseSchedule(course.schedule)
    if (!parsed) return

    parsed.days.forEach(day => {
      const dayNum = dayMap[day]
      if (dayNum) {
        scheduleMap[dayNum].push({
          day,
          startTime: parsed.startTime,
          endTime: parsed.endTime,
          course
        })
      }
    })
  })

  // Sort slots by start time for each day
  Object.keys(scheduleMap).forEach(dayNum => {
    scheduleMap[parseInt(dayNum)].sort((a, b) => {
      const timeA = a.startTime.split(':').map(Number)
      const timeB = b.startTime.split(':').map(Number)
      const minutesA = timeA[0] * 60 + timeA[1]
      const minutesB = timeB[0] * 60 + timeB[1]
      return minutesA - minutesB
    })
  })

  return dayNames.map((dayName, index) => ({
    day: dayName,
    slots: scheduleMap[index + 1]
  }))
}

export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

export const minutesToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`
}

