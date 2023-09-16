import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicEntryRequirements = dynamic(() => import('@/components/international-students/entry-requirements'));

const EntryRequirements: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicEntryRequirements />
        </div>
    )
}

EntryRequirements.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default EntryRequirements