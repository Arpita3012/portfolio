import { Linkedin, Mail, MapPin, Phone, Accessibility, PersonStanding } from "lucide-react";
import {cn} from "@/lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Feel free to get in touch with me via the contact details below.<br/>
            I'm available by phone or email, and you're welcome to connect with me on LinkedIn 
            to explore potential collaborations or opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium flex items-center"> Email:</h4>
                  <a
                    href="mailto:arpitaaa0211@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    arpitaaa0211@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium flex items-center "> Phone Number:</h4>
                  <a
                    href="tel:+917011060270"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7011060270
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium flex items-center  "> Location:</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                        Greater Noida, Uttar Pradesh, India
                  </a>
                </div>
              </div>
            </div>

            
             <div className="pt-8 flex items-start space-x-4">
                {/* Left: Person Icon */}
                <div className="p-3 rounded-full bg-primary/10 w-11 h-11 flex items-center justify-center">
                  <PersonStanding className="h-6 w-6 text-primary" />
                </div>

                {/* Right: Text + LinkedIn stacked */}
                <div>
                  <h4 className="font-bold text-xl text-muted-foreground">Connect with Me</h4>
                  <div className="mt-2">
                    <a
                      href="https://www.linkedin.com/in/arpita-singh-0650a625b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors "
                    >
                      <Linkedin className="h-6 w-6 ml-15" />
                    </a>
                  </div>
                </div>
              </div>
            </div>


          <div className="bg-card p-4 rounded-lg shadow-xs flex flex-col justify-center items-center">
            <img src="/img1.jpeg" alt="Thank you" className="w-40 h-auto rounded-md mb-8" />
            
            <p className="text-left max-w-md text-muted-foreground font-semibold">
              Thank you for taking the time to visit my portfolio.<br />
              I hope you enjoyed exploring my work and learned a bit about me.<br />
              Feel free to reach out — I’m always open to new opportunities and collaborations!
            </p>
          </div>


          

        </div>
      </div>
    </section>
 
  )};
