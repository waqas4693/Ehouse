import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicAdmissionForm = dynamic(() => import('@/components/admission-form/student-admission-form'));

const AdmissionFormPage: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicAdmissionForm />
        </div>
    )
}

AdmissionFormPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default AdmissionFormPage