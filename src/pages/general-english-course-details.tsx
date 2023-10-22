import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicGeneralCourseDetails = dynamic(() => import('@/components/courses/general-english-course-details'));

const GeneralCourseDetailsPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicGeneralCourseDetails />
        </div>
    )
}

GeneralCourseDetailsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default GeneralCourseDetailsPage