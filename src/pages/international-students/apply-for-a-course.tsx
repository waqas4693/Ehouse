import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicApplyForACourse = dynamic(() => import('@/components/international-students/apply-for-a-course'));

const ApplyForACourse: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicApplyForACourse />
        </div>
    )
}

ApplyForACourse.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ApplyForACourse