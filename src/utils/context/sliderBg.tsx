import { createContext } from "react";

interface background {
    background: {
        sliderBg: string,
        bg: string
    };
    setBackground: any;
}

const BackgroundContext = createContext<background>({
    background: "intro-fm-yellow",
    setBackground: () => {},
});

export default BackgroundContext;