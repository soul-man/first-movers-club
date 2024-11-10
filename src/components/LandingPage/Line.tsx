import { useEffect } from 'react';
import { gsap } from "gsap";

const Line = () => {
    const url = "images/bg-scenes/bg-first-movers.jpg";

    useEffect(() => { 
        const lineAnimElement = document.querySelector(".line_anim");
    
        if (lineAnimElement) {
            gsap.to(".line_anim", {
                x: -500,
                duration: 4,
                scrollTrigger: {
                    trigger: ".line_anim",
                    scrub: true
                }
            });
        }
    }, []);

    return (
        <div className="line-anim h-[175px] md:h-[300px] bg-repeat bg-center bg-cover" style={{ backgroundImage: `url(${url})`}}></div>
    )
}

export default Line;