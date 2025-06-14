import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              What our students have accomplished
            </h3>

            <p className="text-muted-foreground">
              At Akili Universe, our students don’t just learn, they lead. Our learners have conducted groundbreaking research spanning fields from graph theory and artificial intelligence to microprocessor design. Their innovative thinking has not only earned them prestigious internships and employment at leading AI-driven business software companies, but has also inspired them to establish vibrant communities, including a student-founded engineering club boasting over 70 active members.


            </p>

            <p className="text-muted-foreground">
              The proof of our impact is clear: Every Akili Universe graduate has earned all scholarships available within their categories and gone on to attend institutions ranked among the top 5 or 10 universities in their chosen fields. At Akili Universe, academic rigor meets real-world innovation, preparing our students to excel at the highest levels, wherever their ambitions take them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

             
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Average SAT Score</h4>
                  <p className="text-muted-foreground">
                    Our students consistently surpass national benchmarks, achieving an impressive average SAT score of 1400—demonstrating both academic excellence and college readiness.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Academic Head Start   </h4>
                  <p className="text-muted-foreground">
                    Our graduates average an A in AP and Dual Enrollment GPA and enter college with up to two years of university credit, giving them a financial head start.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Real-World Innovation & Research</h4>
                  <p className="text-muted-foreground">
                    Students engage in advanced research in fields like graph theory, AI, and robotics, while also gaining hands-on experience through internships and launching entrepreneurial projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
