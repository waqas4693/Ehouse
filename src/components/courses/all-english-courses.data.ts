import type { DescriptiveCourse } from '@/interfaces/descriptive-course'

export const data: Array<DescriptiveCourse> = [
  {
    id: 1,
    cover: '/images/courses/course-1.png',
    title: 'General English Course',
    duration: '11 Months',
    description: 'The General English course in the UK is designed for individuals who want to improve their language skills for various purposes, including academic, professional, and social communication.',
    lessonsPerWeek: 5,
    hoursPerWeek: 15,
    classTime: 'MON to FRI From 10 AM-1 PM',
    suitableFor: 'Education, Work or Socializing',
    level: 'Beginner to Advance',
    registerationFee: '£300 (Non-refundable)',
    price: '£5500'
  },
  {
    id: 2,
    cover: '/images/courses/course-2.png',
    title: 'IELTS Preparation Course',
    duration: '11 Months',
    description: 'By taking this program, you will be equipped to take the International English Language Testing System (IELTS) Exam, which can help you achieve a good score that will benefit your future studies.',
    lessonsPerWeek: 5,
    hoursPerWeek: 15,
    classTime: 'MON to FRI From 10 AM-1 PM',
    suitableFor: 'Education, Work or Socializing',
    level: 'Beginner to Advance',
    registerationFee: '£300 (Non-refundable)',
    price: '£5500'
  },
  {
    id: 3,
    cover: '/images/courses/course-3.png',
    title: 'Business English Course',
    duration: '11 Months',
    description: 'Business English Course is designed to help students develop and enhance their language skills in the context of professional settings. This course focuses on improving English proficiency in',
    lessonsPerWeek: 5,
    hoursPerWeek: 15,
    classTime: 'MON to FRI From 10 AM-1 PM',
    suitableFor: 'Education, Work or Socializing',
    level: 'Certificate',
    registerationFee: '£300 (Non-refundable)',
    price: '£5500'
  }
]