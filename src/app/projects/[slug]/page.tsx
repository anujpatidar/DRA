import { projectsData, getRelatedProjects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug]
  const relatedProjects = getRelatedProjects(params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 ">
          <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-20">
            <h1 className="text-white w-full break-words uppercase text-[42px] leading-[1.2] font-bold font-druk max-w-2xl mb-4">
              {project.title}
            </h1>
            <h2 className="text-white text-2xl">
              {project.subtitle}
            </h2>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-[20px] lg:px-[100px] pt-[40px]">
        <div className="flex items-start gap-2 text-[#252525]">
          <Link href="/projects" className="text-[14px] text-[#808080] font-bold">Projects</Link>
          <span className="text-[#252525] text-[14px]">
            {`>`}
          </span>
          <span className="text-[14px] font-bold">{project.title}</span>
        </div>
      </div>

      {/* Content */}
      <div className=" px-[20px] lg:px-[100px] py-[40px]">
        <div className="">
          <p className="text-[14px] text-[#808080]  whitespace-pre-wrap">
            {project.description}
          </p>
          <hr className="my-8 border-[#dddddd]"/>
        </div>

        {/* Project Images Grid */}
        <div className="mt-12">
          {project.images.length === 0 ? (
            <div className="mt-12 p-8 bg-gray-100 rounded-lg text-center">
              <p className="text-gray-500">No project images available</p>
            </div>
          ) : project.images.length === 1 ? (
            // Single image layout - full width
            <div className="relative h-[450px]">
              <Image
                src={project.images[0]}
                alt={`${project.title} image`}
                fill
                className="object-cover"
              />
            </div>
          ) : project.images.length === 2 ? (
            // Two images layout - split in two columns
            <div className="grid grid-cols-12 gap-[8px]">
              <div className="md:col-span-4 col-span-12 relative h-[450px] overflow-hidden group">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} image 1`}
                  fill
                  className="object-cover transition-transform duration-300 "
                />
              </div>
              <div className="md:col-span-8 col-span-12 relative h-[450px] overflow-hidden group">
                <Image
                  src={project.images[1]} 
                  alt={`${project.title} image 2`}
                  fill
                  className="object-cover transition-transform duration-300 "
                />
              </div>
            </div>
          ) : project.images.length === 3 ? (
            // Three images layout
            <div className="grid grid-cols-12 gap-[8px]">
              {/* First row - full width */}
              <div className="md:col-span-12 col-span-12 relative h-[450px] overflow-hidden group">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} image 1`}
                  fill
                  className="object-cover transition-transform duration-300 "
                />
              </div>
              {/* Second row - split in two */}
              <div className="md:col-span-6 col-span-12 relative h-[450px] overflow-hidden group">
                <Image
                  src={project.images[1]}
                  alt={`${project.title} image 2`}
                  fill
                  className="object-cover transition-transform duration-300 "
                />
              </div>
              <div className="md:col-span-6 col-span-12 relative h-[450px] overflow-hidden group">
                <Image
                  src={project.images[2]}
                  alt={`${project.title} image 3`}
                  fill
                  className="object-cover transition-transform duration-300 "
                />
              </div>
            </div>
          ) : project.images.length >= 4 ? (
            // Four or more images layout
            <div className="grid grid-cols-12 gap-[8px]">
              {/* First row */}
              <div className="md:col-span-4 col-span-12 relative h-[450px] overflow-hidden group">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} image 1`}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </div>
              <div className="md:col-span-8 col-span-12 relative h-[450px] overflow-hidden group">
                <Image
                  src={project.images[1]}
                  alt={`${project.title} image 2`}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </div>
              {/* Second row */}
              <div className="md:col-span-8 col-span-12 relative h-[450px] overflow-hidden group">
                <Image
                  src={project.images[2]}
                  alt={`${project.title} image 3`}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </div>
              <div className="md:col-span-4 col-span-12 relative h-[450px] overflow-hidden group">
                <Image
                  src={project.images[3]}
                  alt={`${project.title} image 4`}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </div>
            </div>
          ) : null}
        </div>

        {/* Project Details Table */}
        <div className="mt-12">

          <div className="border border-[#dddddd]">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-[#dddddd]">
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] flex items-start ">Client</td>
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] border-l border-[#dddddd] font-medium">{project.details.client}</td>
                </tr>
                <tr className="border-b border-[#dddddd]">
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] flex items-start">Project Location</td>
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] border-l border-[#dddddd] font-medium">{project.details.projectLocation}</td>
                </tr>
                <tr className="border-b border-[#dddddd]">
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] flex items-start ">Mode of Contract</td>
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] border-l border-[#dddddd] font-medium">{project.details.modeOfContract}</td>
                </tr>
                <tr className="border-b border-[#dddddd]">
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] flex items-start ">Project Value</td>
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] border-l border-[#dddddd] font-medium">{project.details.projectValue}</td>
                </tr>
                <tr className="border-b border-[#dddddd]">
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] flex items-start ">Contractual Date of commencement</td>
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] border-l border-[#dddddd] font-medium">{project.details.contractualDateOfCommencement}</td>
                </tr>
                <tr className="border-b border-[#dddddd]">
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] flex items-start">Contractual Date of Completion</td>
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] border-l border-[#dddddd] font-medium">{project.details.contractualDateOfCompletion}</td>
                </tr>
                <tr className="border-b border-[#dddddd]">
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] flex items-start">Actual Date of Completion</td>
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] border-l border-[#dddddd] font-medium">{project.details.actualDateOfCompletion}</td>
                </tr>
                <tr>
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] flex items-start">Project Duration</td>
                  <td className="px-[12px] py-[12px] md:py-[20px] text-[14px] border-l border-[#dddddd] font-medium">{project.details.projectDuration}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">You might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard
                  key={index}
                  slug={Object.keys(projectsData).find(
                    key => projectsData[key] === relatedProject
                  ) || ''}
                  project={relatedProject}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
} 