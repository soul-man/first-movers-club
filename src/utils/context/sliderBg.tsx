import { createContext } from "react";

interface background {
    background: {
        sliderBg: string,
        bg: string,
        text: string
    };
    setBackground: any;
}

const BackgroundContext = createContext<background>({
    background: "intro-fm-yellow",
    setBackground: () => {},
});

export default BackgroundContext;