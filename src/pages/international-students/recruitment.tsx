import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicRecruitment = dynamic(() => import('@/components/international-students/recruitment'));

const Recruitment: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicRecruitment />
        </div>
    )
}

Recruitment.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Recruitment