import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicStudentAndStaffGuidance = dynamic(() => import('@/components/policies/student-and-staff-guidance'));

const StudentAndStaffGuidance: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicStudentAndStaffGuidance />
        </div>
    )
}

StudentAndStaffGuidance.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default StudentAndStaffGuidance