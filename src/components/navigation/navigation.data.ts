import type { Navigation } from '@/interfaces/navigation'

export const navigations: Navigation[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Courses',
    path: '/courses',
  },
  {
    label: 'International Students',
    path: '',
    dropdownItems: [
      { path: '/international-students/apply-for-a-course', label: 'Apply For A Course' },
      { path: '/international-students/entry-requirements', label: 'Entry Requirements' },
      { path: '/international-students/arriving-in-uk', label: 'Arriving In The UK' },
      { path: '/international-students/direction-and-location', label: 'Direction And Location' },
      { path: '/international-students/accomodation', label: 'Accomodation' },
      { path: '/international-students/uk-visa', label: 'Short Term Study Visa' }
    ]
  },
  {
    label: 'Policies',
    path: '',
    dropdownItems: [
      { path: '/policies/participant-attendance-policy', label: 'Student / Participant Attendance And Punctuality Policy' },
      // { path: '/policies/review-quality-assurance-policy', label: 'Internal Review And Quality Assurance Policy' },
      { path: '/policies/refund-policy', label: 'Refund Policy' },
      { path: '/policies/synopsis-of-policies', label: 'Synopsis Of Policies' },
      { path: '/policies/terms-and-conditions', label: 'Terms And Conditions' },
      { path: '/policies/student-and-staff-guidance', label: 'Student and Staff Guidance' }
    ]
  },
  {
    label: 'Gallery',
    path: '/gallery',
  },
  {
    label: 'Contact Us',
    path: '/contact-us',
  },
]