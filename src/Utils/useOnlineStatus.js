import { useEffect, useState } from "react";

// writing the custom hook, to check the internet status. 
const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

    }, []);

    return onlineStatus;
};

export default useOnlineStatus;