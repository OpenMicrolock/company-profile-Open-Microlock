import {useScreen} from "usehooks-ts";

const useViewPort = () => {

    const screen = useScreen()

    if (screen === undefined) {
        return null
    }

    const width = screen.availWidth
    const height = screen.availHeight

    return {width, height};
};

export default useViewPort;