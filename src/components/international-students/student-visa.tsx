import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicArrivingInTheUk = dynamic(() => import('@/components/international-students/arriving-in-uk'));

const ApplyForACourse: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicArrivingInTheUk />
        </div>
    )
}

ApplyForACourse.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ApplyForACourse