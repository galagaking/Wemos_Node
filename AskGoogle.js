var google_apikey = "<FILL IN YOUR OWN KEY";

var dev_url = "https://www.googleapis.com/geolocation/v1/geolocate?key="+google_apikey;

var data =
    {
  "considerIp": "false",
  "wifiAccessPoints": [
    {
      "macAddress": msg.payload.macaddress.mac_1,
      "signalStrength": msg.payload.macaddress.rssi_1,
     // "signalToNoiseRatio": 0
    },
    {
      "macAddress": msg.payload.macaddress.mac_2,
      "signalStrength": msg.payload.macaddress.rssi_2,
     // "signalToNoiseRatio": 0
    }
  ]
};
var msg = {
    "method" : "POST",
    "url" : dev_url,
    "headers" : {
        "Content-Type": "application/json",
  //      "X-M2X-KEY": google_api_key
    },
    "payload" : JSON.stringify(data)
};
 
return msg;
