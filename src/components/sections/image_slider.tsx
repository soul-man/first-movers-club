import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ImageSlider = () => {

    var numbers_1 = [];
    var numbers_2 = [];
    var numbers_3 = [];

    for (let i = 0; i < 40; i++) {
        numbers_1.push(i)
    }
    for (let i = 30; i < 70; i++) {
        numbers_2.push(i)
    }
    for (let i = 70; i < 99; i++) {
        numbers_3.push(i)
    }

    useEffect(() => {
        gsap.to(".creators_anim1", {
            x: -500,
            duration: 3,
            scrollTrigger: {
                trigger: ".hero__upload .avatars",
                scrub: true
            }
        });
        gsap.to(".creators_anim2", {
            x: 500,
            duration: 3,
            scrollTrigger: {
                trigger: ".hero__upload .avatars",
                scrub: true
            }
        });
        gsap.to(".creators_anim3", {
            x: -500,
            duration: 3,
            scrollTrigger: {
                trigger: ".hero__upload .avatars",
                scrub: true
            }
        });
    }, []);

    return (
        <>
            
            <div className="section__creators">
                <div className="container">
                    <div className="space-y-30">
                        <div className="section__body">
                            <div className="d-flex justify-content-center creators_anim1">

                                {numbers_1.map((index) => (
                                    <div key={`1${index}`} className="creator_item creator_card">
                                        <div className="avatars">
                                            <img src={`images/slider/${index}.png`} alt="Avatar" className="avatar avatar-md" />
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            <div className="section__creators">
                <div className="container">
                    <div className="space-y-30">
                        <div className="section__body">

                            <div className="d-flex justify-content-center creators_anim2">

                                {numbers_2.map((index) => (
                                    <div key={`2${index}`} className="creator_item creator_card">
                                        <div className="avatars">
                                            <img src={`images/slider/${index}.png`} alt="Avatar" className="avatar avatar-md" />
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="section__creators">
                <div className="container">
                    <div className="space-y-30">
                        <div className="section__body">

                            <div className="d-flex justify-content-center creators_anim3">

                                {numbers_3.map((index) => (
                                    <div key={`3${index}`} className="creator_item creator_card">
                                        <div className="avatars">
                                            <img src={`images/slider/${index}.png`} alt="Avatar" className="avatar avatar-md" />
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ImageSlider