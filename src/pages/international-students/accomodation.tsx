import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicAccomodation = dynamic(() => import('@/components/international-students/accomodation'));

const ApplyForACourse: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicAccomodation />
        </div>
    )
}

ApplyForACourse.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ApplyForACourse