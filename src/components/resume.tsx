import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Android Developer Intern",
    company: "Ohhpro Technology Private Limited",
    period: "Feb 2025 - Present",
    description: "Doing my internship with the designation of Android developer. Using Jetpack compose, Legacy XML ,Kotlin and sometimes Java to develop and maintain apps.",
  },
  {
    type: "education",
    title: "Master of Computer Applications",
    company: "Lovely Professional University",
    period: "2025 - Present",
    description: "Persuiing my masters in online mode while working at Ohhpro technnologies. Learning some advance concepts of computer science.",
  },
  {
    type: "education",
    title: "B.S. in Information Technology and Management",
    company: "Lakshya Institute of Technology (Utkal University)",
    period: "2022 - 2025",
    description: "Graduated with honors. Learned the basics of computer science and engineering. Attended in many coading compltetions.",
  }
];

export default function ResumeSection() {
  return (
    <section
      id="experience"
      className="w-full py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            My Experience
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl/relaxed">
            A timeline of my professional and educational background.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Desktop timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-border hidden md:block"></div>
          {/* Mobile timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border block md:hidden"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-8 flex items-start md:items-center w-full"
            >
              {/* Desktop layout */}
              <div className={`hidden md:flex w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="w-[calc(50%-2rem)]">
                  <Card>
                    <CardHeader>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>
                        {exp.company} | {exp.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-[calc(50%+2rem)]"></div>
              </div>
              
              {/* Mobile layout */}
              <div className="flex md:hidden w-full items-start pl-12">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Icon */}
              <div className="absolute top-4 z-10 left-6 -translate-x-1/2 md:left-1/2">
                <div className="bg-background border-2 border-primary rounded-full p-2">
                  {exp.type === "work" ? (
                    <Briefcase className="h-6 w-6 text-primary" />
                  ) : (
                    <GraduationCap className="h-6 w-6 text-primary" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
