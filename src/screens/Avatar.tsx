import { useState } from "react";

export type imgs = {
    img1Url: string;
    img2Url: string;
    img3Url: string;
    img4Url: string;
};
const Avatar: React.FC = () => {
    const [data, setData] = useState<imgs>({
        img1Url: "",
        img2Url: "",
        img3Url: "",
        img4Url: "",
    });
    return(
        <div id="av-cont">

        </div>
    );
};
export default Avatar