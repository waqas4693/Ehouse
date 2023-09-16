import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicSynopsisOfPolicies = dynamic(() => import('@/components/policies/synopsis-of-policies'));

const SynopsisOfPolicies: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicSynopsisOfPolicies />
        </div>
    )
}

SynopsisOfPolicies.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default SynopsisOfPolicies