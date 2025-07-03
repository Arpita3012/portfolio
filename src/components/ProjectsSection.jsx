import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SoulWave",
    description: "Content Creating web-app for Music and Songs Creators.",
    image: "s3.png",
    tags: ["React", "TailwindCSS", "MongoDB", "NodeJS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Arpita3012/Soulwave",
  },
  {
    id: 2,
    title: "Multiple Diesease Prediction WEB APP",
    description:
      "This platform provides detection of Diabetes, Heart Disease and Parkinson's Disease using symptoms all in one place.",
    image: "m0.png",
    tags: ["Python", "Streamlit", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/Arpita3012/Multiple_Disease_Prediction-ML_PROJECT",
  },
  {
    id: 3,
    title: "Diseasoguard",
    description: "Prediction of multiple diseases by entering your symptoms.",
    image: "d1.png",
    tags: ["Python", "Tkinter", "Naive Bayes Theorem"],
    demoUrl: "#",
    githubUrl: "https://github.com/Arpita3012/Diseasoguard-",
  },
  {
    id: 4,
    title: "Online Food Delivery Analysis",
    description:
      "Helps in forecasting the factors for delayed delivery helping the big companies to improve their delivery quality.",
    image: "o6.png",
    tags: ["Python", "Time Series Analysis", "SARIMA", "LSTM"],
    demoUrl: "#",
    githubUrl: "https://github.com/Arpita3012/Online-Food-Delivery-Analysis",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my most innovative projects that highlight not only
          my creativity, but also my technical expertise and ability to apply
          knowledge effectively in real-world scenarios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-large overflow-hidden shadow-xs card-hover flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>

                {/* Push icons to bottom */}
                <div className="flex-grow" />

                {/* Bottom-left icons */}
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com/arpita3012"
            >
                My GITHUB Account <ArrowRight size={16} />
            </a>

        </div>

      </div>
    </section>
  );
};
