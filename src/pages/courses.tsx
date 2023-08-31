import React from 'react'
import { MainLayout } from '@/components/layout'

const Courses = () => {
  return (
    <div>
      <h1>Courses Page</h1>
      {/* Add more components and content here */}
    </div>
  )
}

Courses.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>

export default Courses