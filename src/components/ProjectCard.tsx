import Link from 'next/link'
import Image from 'next/image'
import { ProjectDetails } from '@/data/projects'

interface ProjectCardProps {
  slug: string;
  project: ProjectDetails;
}

export default function ProjectCard({ slug, project }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${slug}`}
      className="group"
    >
      <div className="rounded-lg flex flex-col gap-[24px] w-full md:max-w-[340px]">
        <div className="relative h-[248px] w-[340px] rounded-[12px] overflow-hidden">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="">
          <h3 className="text-[20px] leading-[20px] mb-[12px] font-medium text-[#000000]">
            {project.title}
          </h3>
          <div className="flex items-center text-[#808080] text-[14px]">
            <span className="font-regular text-[#131313] text-[14px] mr-[12px]">{project.period}</span>
            
            <span className="font-regular text-[#808080] text-[14px]">{project.details.projectLocation}</span>
          </div>
        </div>
      </div>
    </Link>
  )
} 