import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomeCourse = dynamic(() => import('../components/home/course'))
const DynamicHomeFeature2 = dynamic(() => import('../components/home/feature-2'))
// const DynamicHomeVideo = dynamic(() => import('../components/home/video'))
const DynamicHomeGallery = dynamic(() => import('../components/home/gallery'))
const DynamicRecognizingInstitutes = dynamic(() => import('../components/home/recognizing-institutes'))


const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomeCourse />
      <DynamicHomeFeature />
      <DynamicHomeFeature2 />
      {/* <DynamicHomeVideo /> */}
      <DynamicHomeGallery />
      <DynamicRecognizingInstitutes />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>
export default Home