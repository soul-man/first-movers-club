import React, { useContext, useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import BackgroundContext from '@/utils/context/sliderBg';

const IMAGES = [
    {
        id: 0,
        imageSrc: "/images/intro-firstmover-hodl.png",
        sliderBg: "intro-fm-yellow",
        bg: "global-fm-yellow"
    },
    {
        id: 1,
        imageSrc: "/images/intro-firstmover-cz.png",
        sliderBg: "intro-fm-red",
        bg: "global-fm-red"
    },
    {
        id: 2,
        imageSrc: "/images/intro-firstmover-rekt.png",
        sliderBg: "intro-fm-pink",
        bg: "global-fm-pink"
    },
    {
        id: 3,
        imageSrc: "/images/intro-firstmover-btfd.png",
        sliderBg: "intro-fm-red",
        bg: "global-fm-red"
    },
    {
        id: 4,
        imageSrc: "/images/intro-firstmover-miner.png",
        sliderBg: "intro-fm-yellow",
        bg: "global-fm-yellow"
    },
    {
        id: 5,
        imageSrc: "/images/intro-firstmover-gangsta.png",
        sliderBg: "intro-fm-green",
        bg: "global-fm-green"
    }
  ];

const sliderVariants = {
  incoming: (direction: any) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 2.4,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: any) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 0.1,
    opacity: 0.2
  })
}

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04]
}

const Slider = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0])
  const { background, setBackground } = useContext(BackgroundContext);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount)

  const swipeToImage = (swipeDirection: any) => {
    setImageCount([imageCount + swipeDirection, swipeDirection])
    const index = wrap(0, IMAGES.length, imageCount + swipeDirection)
    background.sliderBg = IMAGES[index].sliderBg;
    background.bg = IMAGES[index].bg;
    setBackground({...background});
  }

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x
    const swipeThreshold = 50
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1)
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1)
    }
  }

  const skipToImage = (imageId: number) => {
    let changeDirection = 0;
    if (imageId > activeImageIndex) {
      changeDirection = 1
    } else if (imageId < activeImageIndex) {
      changeDirection = -1
    }
    setImageCount([imageId, changeDirection])
    background.sliderBg = IMAGES[imageId].sliderBg;
    background.bg = IMAGES[imageId].bg;
    setBackground({...background});
  }

  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="
        flex 
        flex-row 
        sm:flex-col 
        justify-center 
        items-center 
        2xl:justify-end 
        2xl:items-end 
        md:absolute 
        right-0 
        xl:right-0 
        2xl:right-8 
        gap-12 
        md:gap-8"
      >
        <div className="
            relative 
            w-[300px] 
            h-[400px] 
            sm:w-[270px] 
            sm:h-[350px] 
            md:w-[300px] 
            md:h-[500px] 
            lg:w-[400px] 
            lg:h-[500px] 
            xl:w-[480px] 
            xl:h-[610px] 
            2xl:w-[510px] 
            2xl:h-[650px] 
            overflow-hidden"
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                key={imageCount}
                style={{
                    backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`
                }}
                custom={direction}
                variants={sliderVariants}
                initial="incoming"
                animate="active"
                exit="exit"
                transition={sliderTransition}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                className="image"
                />
            </AnimatePresence>
        </div>
        
        <div className="flex flex-col sm:flex-row 2xl:mr-10 justify-center items-center gap-2">
            <button className="duration-300 hover:scale-150 rotate-90 sm:rotate-0 text-3xl" onClick={() => swipeToImage(-1)}><RiArrowDropLeftLine /></button>
            {IMAGES.map(image => (
            <div
                key={image.id}
                onClick={() => skipToImage(image.id)}
                className="w-9 md:w-8 xl:w-12"
            >
                <img src={image.imageSrc} alt="First Mover" className="duration-300 hover:scale-125" />
            </div>
            ))}
            <button className="duration-300 hover:scale-150 rotate-90 sm:rotate-0 text-3xl" onClick={() => swipeToImage(1)}><RiArrowDropRightLine /></button>
      </div>
      </div>


    </div>
  )
}

export default Slider;
