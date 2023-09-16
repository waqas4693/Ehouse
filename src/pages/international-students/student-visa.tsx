import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicStudentVisa = dynamic(() => import('@/components/international-students/student-visa'));

const StudentVisa: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicStudentVisa />
        </div>
    )
}

StudentVisa.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default StudentVisa