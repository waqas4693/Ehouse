import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicBusinessCourseDetails = dynamic(() => import('@/components/courses/course-detailed-page'));

const BusinessCourseDetailsPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicBusinessCourseDetails />
        </div>
    )
}

BusinessCourseDetailsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default BusinessCourseDetailsPage