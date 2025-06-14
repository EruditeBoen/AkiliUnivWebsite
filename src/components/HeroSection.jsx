import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-7xl md:text-8xl opacity-0 animate-fade-in"> <p>Akili Universe </p></span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Online
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Microschool
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
             Nurturing Critical Thinkers Ready to Excel in Any College Major: From Engineering to the Arts.  
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#curriculum" className="cosmic-button">
              View Curriculum
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
