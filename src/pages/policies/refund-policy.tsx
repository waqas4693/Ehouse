import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicRefundPolicy = dynamic(() => import('@/components/policies/refund-policy'));

const RefundPolicy: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicRefundPolicy />
        </div>
    )
}

RefundPolicy.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default RefundPolicy