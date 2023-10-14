import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicCourseDetails = dynamic(() => import('@/components/courses/course-details'));

const CourseDetailsPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicCourseDetails />
        </div>
    )
}

CourseDetailsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default CourseDetailsPage