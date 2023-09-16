import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicTermsAndConditions = dynamic(() => import('@/components/policies/terms-and-conditions'));

const ApplyForACourse: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicTermsAndConditions />
        </div>
    )
}

ApplyForACourse.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ApplyForACourse