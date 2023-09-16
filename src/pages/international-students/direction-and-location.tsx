import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicDirectionAndLocation = dynamic(() => import('@/components/international-students/direction-and-location'));

const DirectionAndLocation: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicDirectionAndLocation />
        </div>
    )
}

DirectionAndLocation.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default DirectionAndLocation