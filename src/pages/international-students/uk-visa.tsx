import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicUkVisa = dynamic(() => import('@/components/international-students/uk-visa'));

const UkVisa: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicUkVisa />
        </div>
    )
}

UkVisa.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default UkVisa