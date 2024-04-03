import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicAboutUs = dynamic(() => import('@/components/about-us/about-us'));

const AboutUsPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicAboutUs />
        </div>
    )
}

AboutUsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default AboutUsPage