import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicGallery = dynamic(() => import('@/components/home/gallery'));

const CoursesPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicGallery />
        </div>
    )
}

CoursesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default CoursesPage