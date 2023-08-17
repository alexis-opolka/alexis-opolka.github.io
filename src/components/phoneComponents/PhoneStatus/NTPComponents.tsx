import { Box } from "@primer/react";
import { useEffect, useState } from "react";

export default function NTPLocalTime(){
  // We get the current Date and time
  // Format it then return it the way
  // it would appear on an android phone
  // i.e: HH:MM

  const defaultDate = new Date();
  const [currentDisplayableTime, setDisplayableTime] = useState(`${defaultDate.getHours()}:${defaultDate.getMinutes()}`);

  useEffect(() => {
    function updateCurrentTime(){
      const currentTime = new Date();

      const currentHour = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();

      setDisplayableTime(`${currentHour}:${currentMinutes}`);
      console.log("Current Time updated!");
    }

    // We update the current time every 15s (or 1/4 of a minute)
    // to have a low latency on update time but to not take a lot
    // of resources for unsolicited tasks that aren't meaningful as of now.
    setInterval(updateCurrentTime, 15000);
  }, [])

  return(
    <Box>
      {currentDisplayableTime}
    </Box>
  )
}
