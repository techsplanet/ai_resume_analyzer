/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import ScoreCircle from './ScoreCircle'
import Image from 'next/image'

const ResumeCard = ({resume:{id, companyName, jobTitle, feedback, imagePath}}:{resume : Resume}) => {
  return (
    <Link href={`/resume/${id}`} className="resume-card animate-wiggle">
       <div className="resume-card-header">
        <div className="flex flex-col break-words">
          <h2 className="text-black  break-words font-bold">
            {companyName}
          </h2>
          <h3 className='text-md italic break-words test-gray-500'>
            {jobTitle}
          </h3>
        </div>
        <div className="flex-shrink-0 ">
          <ScoreCircle score={feedback.overallScore}/>
        </div>
       </div>
       <div className='gradient-border animate-wiggle'>
        <div className='relative w-full h-full'>
          <img src={imagePath} alt='resume'  className='w-full h-[350px] object-cover object-top'/>
        </div>
       </div>
    </Link>
  )
}

export default ResumeCard