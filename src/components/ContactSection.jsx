import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {

      const token = grecaptcha.getResponse();
      if (!token) {
        e.preventDefault();
        toast({
          title: "reCAPTCHA Required",
          description: "Please verify you're not a robot before submitting.",
        });
        return;
      }

      setIsSubmitting(true);

      setTimeout(() => {
        // Normally you’d POST to a backend API with `token` here
        toast({
          title: "Message sent!",
          description: "Thank you for your message. We will get back to you soon.",
        });
        grecaptcha.reset(); // Reset checkbox
        setIsSubmitting(false);
      }, 1500);
    };

  return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary"> Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* CONTACT INFO */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:admissions@akiliuniverse.org"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    admissions@akiliuniverse.org
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+16786536002"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (678) 653-6002
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Social Media</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.facebook.com/AkiliUniverse/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/akiliuniverse/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form
              className="space-y-6"
              action="https://formsubmit.co/admissions@akiliuniverse.org"
              method="POST"
              onSubmit={handleSubmit}
            >
              {/* Hidden FormSubmit inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="" />

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Name..."
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="email@gmail.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Message..."
                />
              </div>

              {/* reCAPTCHA */}
              <div className="g-recaptcha" data-sitekey="6LcN-mErAAAAAIxrrmtXaJpdWlMLQmfIhW_zXeVl"></div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
