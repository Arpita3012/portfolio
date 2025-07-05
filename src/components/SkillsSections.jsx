import { act, useState } from "react";
import {cn} from "@/lib/utils";

const skills=[
    //FULL STACK SKILLS
    {name:"HTML/CSS",level:80,category:"Web Dev"},
    {name:"JavaScript",level:70,category:"Web Dev"},
    {name:"React & Node Js",level:60,category:"Web Dev"},
    {name:"MongoDB",level:80,category:"Web Dev"},

    //DATA SCIENCE SKILLS
    {name:"MySQL",level:90,category:"Data Science"},
    {name:"Time Series Analysis",level:90,category:"Data Science"},
    {name:"Big Data",level:50,category:"Data Science"},
    {name:"Google Colab",level:90,category:"Data Science"},
    {name:"Pandas",level:90,category:"Data Science"},
    {name:"Numpy",level:90,category:"Data Science"},
    {name:"MatplotLib",level:90,category:"Data Science"},
    {name:"Data Cleaning/Preprocessing",level:90,category:"Data Science"},
    {name:"Data Visualization",level:65,category:"Data Science"},

    //AI/ML SKILLS
    {name:"Machine Learning Algorithms",level:90,category:"AI"},
    {name:"Deep Learning Alogirthms (Neural Networks)",level:90,category:"AI"},
    {name:"Computer Vision",level:60,category:"AI"},
    {name:"Scikit-learn",level:65,category:"AI"},
    {name:"Tensor-Flow",level:55,category:"AI"},
    {name:"Python",level:75,category:"AI"},
    
    //SOFTWARE DEV SKILLS
    {name:"C++",level:85,category:"Software Dev"},
    {name:"Data Structures and Algorithms",level:80,category:"Software Dev"},
    {name:"Object Oriented Programming",level:70,category:"Software Dev"},
    {name:"Operating Systems",level:85,category:"Software Dev"},
    {name:"Computer Networks",level:70,category:"Software Dev"},
    {name:"DBMS",level:85,category:"Software Dev"},
    {name:"Software Project Management",level:90,category:"Software Dev"},
    {name:"VS CODE",level:80,category:"Software Dev"},

];

const categories=["all","Web Dev", "Data Science","Software Dev","AI"];
export const SkillsSection= ()=>{

    const [activeCategory, setActiveCategory]=useState("all");
    
    const filteredSkills= skills.filter((skill)=>activeCategory==="all"||skill.category===activeCategory);

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key)=>(
                        <button key={key} 
                            onClick={()=> setActiveCategory(category)}
                            className= {cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                    activeCategory===category? "bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill,key)=>(
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                     style={{width: skill.level+"%"}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>

                        </div>

                    ))}
                </div>

            </div>

        </section>
    )
};