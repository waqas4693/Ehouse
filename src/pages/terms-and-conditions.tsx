import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicTermsAndConditions = dynamic(() => import('@/components/footer/terms-and-conditions'));

const TermsAndConditionsPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicTermsAndConditions />
        </div>
    )
}

TermsAndConditionsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default TermsAndConditionsPage