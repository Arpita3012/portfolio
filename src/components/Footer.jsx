import { ArrowUp } from "lucide-react";

export const Footer=()=>{
    return(
        <footer className="py-1 px-4 relative mt-12 pt-1 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Arpita Singh. All rights reserved.
            </p>

            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-color">
                <ArrowUp />
            </a>
        </footer>
    );
};