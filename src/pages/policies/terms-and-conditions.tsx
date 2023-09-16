import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicTermsAndConditions = dynamic(() => import('@/components/policies/terms-and-conditions'));

const TermsAndConditions: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicTermsAndConditions />
        </div>
    )
}

TermsAndConditions.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default TermsAndConditions