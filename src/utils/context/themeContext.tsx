import { createContext } from "react";

interface theme {
    background: {
        sliderBgColor: string,
        colorPrimary: string,
        textColorSecondary: string
    };
    setBackground: any;
}

const BackgroundContext = createContext<theme>({
    background: {
        sliderBgColor: "intro-fm-yellow",
        colorPrimary: "global-fm-yellow",
        textColorSecondary: "text-black",
    },
    setBackground: () => {},
});

export default BackgroundContext;