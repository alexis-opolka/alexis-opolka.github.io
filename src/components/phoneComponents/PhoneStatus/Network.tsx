import { Box, Text } from '@primer/react';
import { useState, useEffect } from 'react';
import { MdWifiOff, MdNetworkWifi, MdNetworkWifi1Bar, MdNetworkWifi3Bar, MdOutlineSignalCellularAlt } from 'react-icons/md';
import IconsToShow from '@/components/wrappers/Icons';

export default function NetworkStatus({
  connectivity,
  connected
}: {
  connectivity?: "mediocre" | "good" | "excellent",
  connected?: true | false
}){
  // TODO: Understand and implement a technique to access the current
  // TODO: network status and information on it (e.g. Type, Strength, etc.)


  // Let's start assuming we have a network connection.
  const [netStatus, setNetStatus] = useState(true);
  var connectionIcon;

  // Let's make changes, if necessary
  // connected? setNetStatus(connected) : setNetStatus(true);

  if (connectivity === "mediocre"){
    connectionIcon = <MdNetworkWifi1Bar />;
  } else if(connectivity === "good"){
    connectionIcon = <MdNetworkWifi3Bar />;
  } else if(connectivity === "excellent"){
    connectionIcon = <MdNetworkWifi />;
  } else {
    connectionIcon = <MdNetworkWifi />;
  };

  return(
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      // border: "1px solid cyan"
    }}>
      { // The client doesn't have any internet connection
        !netStatus &&
        <Box>
          <MdWifiOff />
        </Box>
      }
      { // The client has an internet connection
        netStatus &&
        <Box>
          {connectionIcon}
        </Box>}
        {/* Before having any Wifi, the phone always shows your cellular signal (GSM, LTE, etc.) */}
      <MdOutlineSignalCellularAlt />
    </Box>
  )
}

export function NetworkCarrier(){
  // We're exporting the name of the current web browser as the carrier.
  // Why: Because it's thanks to the browser you could access and render
  // the page.

  function getBrowser(window: any) {
    let currentBrowser = 'Unknown';
    if (window.navigator.userAgent.indexOf('Chrome') !== -1) { currentBrowser = 'Chrome'; }
    else if (window.navigator.userAgent.indexOf('Firefox') !== -1) { currentBrowser = 'Firefox'; }
    else if (window.navigator.userAgent.indexOf('MSIE') !== -1) { currentBrowser = 'IE'; }
    else if (window.navigator.userAgent.indexOf('Edge') !== -1) { currentBrowser = 'Edge'; }
    else if (window.navigator.userAgent.indexOf('Safari') !== -1) { currentBrowser = 'Safari'; }
    else if (window.navigator.userAgent.indexOf('Opera') !== -1) { currentBrowser = 'Opera'; }
    else if (window.navigator.userAgent.indexOf('Opera') !== -1) { currentBrowser = 'YaBrowser'; }
    else {
      // We just do nothing, we already set up the default value before
      // this big conditional paragraph.
    }

    return currentBrowser;
  }

  const netCarrier = getBrowser(window);

  return(
    <Text sx={{
      marginLeft: "1%"
    }}> {netCarrier} </Text>
  )
}
