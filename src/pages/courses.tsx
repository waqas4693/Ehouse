import React from 'react'
import { MainLayout } from '@/components/layout'
import dynamic from 'next/dynamic'

const DynamicCoursesEnglishLanguage = dynamic(() => import('@/components/courses-page/courses-english-language'));
const DynamicCoursesBusinessManagement = dynamic(() => import('@/components/courses-page/courses-business-management'));
const DynamicLifeSkillsAndCitizenship = dynamic(() => import('@/components/courses-page/courses-life-skills-citizenship-test'));
const DynamicCoursesOnline = dynamic(() => import('@/components/courses-page/courses-online'));

const Courses = () => {
  return (
    <div>
      <DynamicCoursesEnglishLanguage />
      <DynamicCoursesBusinessManagement />
      <DynamicLifeSkillsAndCitizenship />
      <DynamicCoursesOnline />
    </div>
  )
}

Courses.getLayout = (page: React.ReactNode): React.ReactNode => <MainLayout>{page}</MainLayout>;

export default Courses;