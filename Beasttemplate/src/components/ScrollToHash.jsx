
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToHash() {
//     const location = useLocation();

//     useEffect(() => {
//         if (location.hash) {
//             const element = document.getElementById(location.hash.substring(1));

//             if (element) {
//                 element.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                 });
//             }
//         }
//     }, [location]);

//     return null;
// }

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.substring(1));

                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 100);
        }
    }, [hash]);

    return null;
}