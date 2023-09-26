import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicCourses = dynamic(() => import('@/components/courses/all-english-courses'));

const CoursesPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicCourses />
        </div>
    )
}

CoursesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default CoursesPage