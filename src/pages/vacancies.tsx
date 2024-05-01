import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicVacancies = dynamic(() => import('@/components/footer/vacancies'));

const VacanciesPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicVacancies />
        </div>
    )
}

VacanciesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default VacanciesPage