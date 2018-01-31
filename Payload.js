var hexChar = ["0", "1", "2", "3", "4", "5", "6", "7","8", "9", "A", "B", "C", "D", "E", "F"];
 
function byteToHex(b) {
  return hexChar[(b >> 4) & 0x0f] + hexChar[b & 0x0f];
}
function hexToInt(hex) {
  var num=hex;
  if (num>0x7F) {
    num=num-0x100;
  }
  return num;
}
function Decoder(bytes) {
  var mac1="";
  for (i = 0; i < 6; i++) { 
    mac1 += byteToHex(bytes[i]);
    if (i<5) { mac1+=':';}
}
var rssi1=hexToInt(bytes[6]);
  var mac2="";
  for (i = 0; i < 6; i++) { 
    mac2 += byteToHex(bytes[i+7]);
    if (i<5) { mac2+=':';}
}
var rssi2=hexToInt(bytes[13]);
 return {
    macaddress: {
      mac_1: mac1,
      rssi_1:rssi1,
      mac_2: mac2,
      rssi_2:rssi2,
    },
   };
}
