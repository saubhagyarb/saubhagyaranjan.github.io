import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Play } from "lucide-react";
import solveIt from "../public/projects/solve_it.png"
import ohhproGames from "../public/projects/Ohhpro Games.png"
import statergicSquares from "../public/projects/StatergicSquares.png"
import planWise from "../public/projects/PlanWise.png"

const projects = [
  {
    title: "Ohhpro GameNest",
    description: "A Multi-game application which have various games to choose and play.",
    image: ohhproGames,
    aiHint: "Games app",
    tags: ["Google admob", "WebView", "Kotlin", "Compose"],
    live: "https://play.google.com/store/apps/details?id=com.ohhpro.games&hl=en_IN",
  },
  {
    title: "Statergy Squares",
    description: "A tic-tac-toe game which can be played by two players in realtime by sharing code.",
    image: statergicSquares,
    aiHint: "Tic-tac-toe game",
    tags: ["Firebase acuthentication", "Firebase Realtime Database", "MVVM"],
    github: "https://github.com/saubhagyarb/StrategySquares"
  },
  {
    title: "SolveIt AI",
    description: "SolveIt is an AI chat app built with Jetpack Compose, featuring a clean UI, smart replies, animations, and a smooth user experience.",
    image: solveIt,
    aiHint: "Ai chat",
    tags: ["Gemini SDK", "Jetpack Compose", "RoomDB"],
    github: "https://github.com/saubhagyarb/Solveit_AI",
  },
  {
    title: "PlanWise",
    description: "An app specifically designed developed for the freelancers to manage their projects.",
    image: planWise,
    aiHint: "Project Management",
    tags: ["RoomDB", "Material 3", "MVVM", "Compose"],
    github: "https://github.com/saubhagyarb/PlanWise"
  },
];

const AppIcon = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity:1}} />
            </linearGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill="url(#grad1)"/>
        <path d="M30 70 L50 30 L70 70 Z" fill="hsl(var(--background))" />
        <circle cx="50" cy="62" r="8" fill="hsl(var(--background))"/>
    </svg>
)

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            My Work
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl/relaxed">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col"
            >
              <CardHeader className="flex flex-row items-start gap-4">
                  <AppIcon />
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <div className="relative aspect-video w-full">
                    <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={project.aiHint}
                    className="rounded-lg border"
                    />
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {project.github && (
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
