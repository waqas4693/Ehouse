import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicIeltsPreprationCourseDetails = dynamic(() => import('@/components/courses/ielts-prepration-course-details'));

const IeltsPreprationCourseDetailsPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicIeltsPreprationCourseDetails />
        </div>
    )
}

IeltsPreprationCourseDetailsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default IeltsPreprationCourseDetailsPage