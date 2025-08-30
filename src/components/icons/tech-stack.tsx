import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const techStack = [
  { name: 'Android', imageSrc: '/logos/android.png' },
  { name: 'Kotlin', imageSrc: '/logos/kotlin.png' },
  { name: 'Java', imageSrc: '/logos/java.png' },
  { name: 'Jetpack Compose', imageSrc: '/logos/jetpack.png' },
  { name: 'Android Studio', imageSrc: '/logos/android-studio.png' },
  { name: 'RoomDB', imageSrc: '/logos/room.png' },
  { name: 'FireBase', imageSrc: '/logos/fireBase.png' },
  // { name: 'Coroutines', imageSrc: '/logos/coroutines.png' },
  // { name: 'ViewModel', imageSrc: '/logos/viewmodel.png' },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="container bg-muted/40 py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            My Tech Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl/relaxed">
            Technologies and tools I use to build robust Android apps.
          </p>
        </div>
        <div className="mt-12">
          <TooltipProvider>
            <div className="flex flex-wrap justify-center gap-8">
              {techStack.map(({ name, imageSrc }) => (
                <Tooltip key={name}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center gap-2 text-muted-foreground transition-all hover:scale-110 hover:brightness-125">
                       <Image 
                        src={imageSrc} 
                        alt={name} 
                        width={48} 
                        height={48}
                        className="h-12 w-12 object-contain"
                       />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
