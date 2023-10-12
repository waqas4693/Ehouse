import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicContactUsForm = dynamic(() => import('@/components/courses/all-english-courses'));

const ContactUsPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicContactUsForm />
        </div>
    )
}

ContactUsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ContactUsPage