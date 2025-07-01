import {ArrowDown} from "lucide-react";

export const HeroSection=()=>{
    return (
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4">
                <div className="container max-w-4xl mx-auto text-center z-10">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bol tracking-tight">
                            <span className="opacity-0 animate-fade-in"> Hi, I am</span>
                            <span className="text-pink-300 opacity-0 animate-fade-in-delay-1"> 
                                {" "} 
                                Arpita
                            </span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                                {" "} 
                                Singh
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            "I am currently pursuing my B.Tech in Computer Science with a specialization in Data Science at Bennett University. I have a strong foundation in programming with proficiency in C++ and web technologies like the MERN stack. Over the past year, I’ve actively worked on several projects — from building a music streaming platform for content creators to developing time series models for food delivery demand forecasting using LSTM and SARIMA. I have developed various Machine Learning and Deep Learning projects like Diseasoguard (disease prediction) and many more!
                        </p>
                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                VIEW MY WORK
                            </a>
                        </div>
                    </div>

                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2">SCROLL </span>
                    <ArrowDown className="h-5 w-5 text-primary"/>
                </div>
            
        </section>
)};
