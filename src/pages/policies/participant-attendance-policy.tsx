import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import dynamic from 'next/dynamic'

const DynamicParticipantAttendancePolicy = dynamic(() => import('@/components/policies/participant-attendance-policy'));

const ParticipantAttendancePolicy: NextPageWithLayout = () => {
    return (
        <div>
            <DynamicParticipantAttendancePolicy />
        </div>
    )
}

ParticipantAttendancePolicy.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ParticipantAttendancePolicy