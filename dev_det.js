function deviceInfo()
{
	var deviceInfo = kony.os.deviceInfo();
	var details = new Array();
    if(deviceInfo.name == "android")  
      	details.push({lblKey:"Device ID",lblVal:""+deviceInfo.deviceid});
    else
    {
    	for(var key in deviceInfo)
      	{
      		if ((key=="model" || key=="deviceid")&&(deviceInfo.name == "thinclient"))
            {
            	//Do not include this Key-Value pair for thinclient
            }
            else
            {
            	var detail=new Object();
            	detail.lblKey=""+key;
            	detail.lblVal=""+deviceInfo[key];
            	details.push(detail);
            }
      	}
      	details.push({lblKey:"freeMemory",lblVal:""+kony.os.freeMemory()});
      	details.push({lblKey:"userAgent",lblVal:""+kony.os.userAgent()});    
    }
    alert();
}