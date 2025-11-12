export interface Course {
  id: string
  code: string
  title: string
  credits: number
  professor: string
  schedule: string
  location: string
  availableSpots: number
  totalSpots: number
  department: string
  description: string
}

export interface RegisteredCourse extends Course {
  registeredAt: string
}

