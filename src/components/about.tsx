import { Badge } from '@/components/ui/badge';

const skills = [
  'Kotlin',
  'Java',
  'Jetpack Compose',
  'XML Layouts',
  'Coroutines',
  'Flow',
  'ViewModel',
  'LiveData',
  'Room',
  'Retrofit',
  'Dagger Hilt',
  'Git',
  'CI/CD',
];

export default function AboutSection() {
  return (
    <section id="about" className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
          About Me
        </h2>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl/relaxed">
          I am a passionate Android Developer with a knack for building beautiful, high-performance applications. With a strong foundation in modern Android development practices, I specialize in creating intuitive user interfaces and robust architectures that stand the test of time.
        </p>
        <div className="mt-10">
          <h3 className="mb-6 text-xl font-semibold text-foreground">My Skillset</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="default" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
