import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicReviewQualityAssurancePolicy = dynamic(() => import('@/components/policies/review-quality-assurance-policy'));

const ApplyForACourse: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicReviewQualityAssurancePolicy />
        </div>
    )
}

ApplyForACourse.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ApplyForACourse