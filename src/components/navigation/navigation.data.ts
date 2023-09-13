import type { Navigation } from '@/interfaces/navigation'

export const navigations: Navigation[] = [
  {
    label: 'Home',
    path: '#',
  },
  {
    label: 'Courses',
    path: 'popular-course',
  },
  {
    label: 'International Students',
    path: 'testimonial',
    dropdownItems: [
      { path: '/apply-for-a-course', label: 'Apply For A Course' },
      { path: 'subDestination2', label: 'Entry Requirements' },
      { path: 'subDestination3', label: 'Arriving In The Uk' },
      { path: 'subDestination4', label: 'Direction And Location' },
      { path: 'subDestination5', label: 'Accommodation' },
      { path: 'subDestination6', label: 'Uk Visa' },
      { path: 'subDestination7', label: 'Student Visa' },
    ]
  },
  {
    label: 'Policies',
    path: 'testimonial',
    dropdownItems: [
      { path: 'subDestination1', label: 'Participant Attendance And Punctuality Policy' },
      { path: 'subDestination2', label: 'Internal Review And Quality Assurance Policy' },
      { path: 'subDestination3', label: 'Refund Policy' },
      { path: 'subDestination4', label: 'Synopsis Of Policies' },
      { path: 'subDestination5', label: 'Terms And Conditions' },
    ]
  },
  {
    label: 'Gallery',
    path: 'mentors',
  }
]