import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicAccreditationAndAffiliations = dynamic(() => import('@/components/footer/accreditations-and-affiliations'));

const CoursesPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicAccreditationAndAffiliations />
        </div>
    )
}

CoursesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default CoursesPage