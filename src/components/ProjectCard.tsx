import { Text } from "@/components/ui/text";
import { Subheading } from "@/components/ui/heading";
import { SocialIcon } from "react-social-icons";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export interface ProjectProps {
  icon: React.ElementType;
  iconBackground: string;
  iconForeground: string;
  title: string;
  githubLink?: string;
  websiteLink?: string;
  description: string;
}


export function ProjectCard({ project, projectIdx, projectsLength }: 
  { project: ProjectProps, projectIdx: number, projectsLength: number }) {

  return (
    <div
      key={project.title}
      className={clsx(
        projectIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
        projectIdx === 1 ? 'sm:rounded-tr-lg' : '',
        projectIdx === projectsLength - 2 ? 'sm:rounded-bl-lg' : '',
        projectIdx === projectsLength - 1 ? 'rounded-br-lg rounded-bl-lg sm:rounded-bl-none' : '',
        'group relative bg-white dark:bg-stone-800 p-6 focus-within:ring-2 focus-within:ring-stone-950 focus-within:ring-inset',
      )}
    >
      <div>
        <span
          className={clsx(
            project.iconBackground,
            project.iconForeground,
            'inline-flex rounded-lg p-3 ',
          )}
        >
          <project.icon aria-hidden="true" className="size-6" />
        </span>
      </div>
      <div className="mt-8">
        <h3 className="flex flex-row gap-1 items-center">
          {(project.websiteLink || project.githubLink) ? (
            <a href={project.websiteLink || project.githubLink} target="_blank" rel="noopener noreferrer" className="focus:outline-hidden">
              {/* Extend touch target to entire panel */}
              <span aria-hidden="true" className="absolute inset-0" />
              <Subheading>{project.title}</Subheading>
            </a>
          ) : (
            <Subheading>{project.title}</Subheading>
          )}
          {project.githubLink && (
            <SocialIcon
                url={project.githubLink}
                bgColor="transparent"
                fgColor="currentColor"
                style={{ width: 35, height: 35 }}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-950 dark:text-stone-400 dark:hover:text-white"
            />
          )}
        </h3>
        <Text variant="secondary" className="mt-2 text-sm">
          {project.description}
        </Text>
      </div>
      {(project.websiteLink || project.githubLink) && (
        <div className="pointer-events-none absolute top-6 right-6 flex flex-row gap-2 items-center">
  
          <span className="flex flex-row gap-1 items-center text-stone-400 group-hover:text-stone-500 dark:text-stone-400 dark:group-hover:text-white">
            {project.websiteLink ? "website" : "github"}
            <ArrowUpRightIcon
              aria-hidden="true"
              className="size-6"
            />      
          </span>
              
        </div>
        
      )}


 
    </div>
  );
}


