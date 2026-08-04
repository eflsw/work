type JobType = 'Full-Time' | 'Part-Time' | 'Internship' | 'Social Service' | 'Formative Experience'
type JobLocation = 'Remote' | 'In-Person' | 'Hybrid'

export type Experience = {
    title: string
    company: string
    date: string
    description: string
    features: (JobType | JobLocation)[]
}
