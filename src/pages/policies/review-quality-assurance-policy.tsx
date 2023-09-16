import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicReviewQualityAssurancePolicy = dynamic(() => import('@/components/policies/review-quality-assurance-policy'));

const ReviewQualityAssurancePolicy: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicReviewQualityAssurancePolicy />
        </div>
    )
}

ReviewQualityAssurancePolicy.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ReviewQualityAssurancePolicy