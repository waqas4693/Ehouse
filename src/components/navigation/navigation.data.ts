import type { Navigation } from '@/interfaces/navigation'

export const navigations: Navigation[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Courses',
    path: 'courses',
  },
  {
    label: 'International Students',
    path: 'testimonial',
    dropdownItems: [
      { path: '/international-students/apply-for-a-course', label: 'Apply For A Course' },
      { path: '/international-students/entry-requirements', label: 'Entry Requirements' },
      { path: '/international-students/arriving-in-uk', label: 'Arriving In The Uk' },
      { path: '/international-students/direction-and-location', label: 'Direction And Location' },
      { path: '/international-students/accommodation', label: 'Accommodation' },
      { path: '/international-students/uk-visa', label: 'Uk Visa' },
      { path: '/international-students/student-visa', label: 'Student Visa' },
    ]
  },
  {
    label: 'Policies',
    path: 'testimonial',
    dropdownItems: [
      { path: '/policies/participant-attendance-policy', label: 'Participant Attendance And Punctuality Policy' },
      { path: '/policies/review-quality-assurance-policy', label: 'Internal Review And Quality Assurance Policy' },
      { path: '/policies/refund-policy', label: 'Refund Policy' },
      { path: '/policies/synopsis-of-policies', label: 'Synopsis Of Policies' },
      { path: '/policies/terms-and-conditions', label: 'Terms And Conditions' },
    ]
  },
  {
    label: 'Gallery',
    path: 'mentors',
  }
]