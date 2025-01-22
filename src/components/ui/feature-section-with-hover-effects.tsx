import { cn } from "@/lib/utils";
import {
  IconBrain,
  IconRocket,
  IconSparkles,
  IconCode,
  IconUsers,
  IconBolt,
  IconChartBar,
  IconHeart,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "AI-First Development",
      description:
        "Leveraging cutting-edge AI to accelerate development and innovation.",
      icon: <IconBrain />,
    },
    {
      title: "Rapid Innovation",
      description:
        "Fast-paced development cycles with continuous improvement and iteration.",
      icon: <IconRocket />,
    },
    {
      title: "Smart Solutions",
      description:
        "Intelligent features powered by advanced machine learning models.",
      icon: <IconSparkles />,
    },
    {
      title: "Modern Architecture",
      description: "Built with the latest technologies for maximum scalability.",
      icon: <IconCode />,
    },
    {
      title: "User-Centric Design",
      description: "Focused on delivering exceptional user experiences.",
      icon: <IconUsers />,
    },
    {
      title: "Real-time Processing",
      description:
        "Lightning-fast data processing and response times.",
      icon: <IconBolt />,
    },
    {
      title: "Data Analytics",
      description:
        "Advanced analytics and insights to drive better decisions.",
      icon: <IconChartBar />,
    },
    {
      title: "Purpose-Driven",
      description: "Building technology that makes a positive impact.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-brand-primary dark:text-brand-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-brand-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-brand-dark dark:text-brand-light">
          {title}
        </span>
      </div>
      <p className="text-sm text-brand-text dark:text-brand-muted max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}; 