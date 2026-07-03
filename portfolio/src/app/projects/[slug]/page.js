import ProjectPage from '@/components/ProjectPage'
import React from 'react'
import { projects } from '@/data/projects'

const page = async ({params}) => {

  const {slug} = await params;

  const index = projects.findIndex((p)=> p.slug === slug)
  const project = projects[index]

  if(!project){
    return <div>Project not found</div>
  }


  return (
    <>
    <ProjectPage project={project}/>
    </>
  )
}

export default page