import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicPayByBankTansfer = dynamic(() => import('@/components/footer/pay-by-bank-transfer'));

const CoursesPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicPayByBankTansfer />
        </div>
    )
}

CoursesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default CoursesPage