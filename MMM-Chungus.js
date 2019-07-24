Module.register("MMM-Chungus", {
  defaults: {},

getStyles: function(){
	return ["Chungus.css"];
}

  start: function () {},

  
  getDom: function() {

  	var playSelectedFile = function(){
  	
  	var file = this.files[0];
  	var type = file.type;

  	

    var fileURL = URL.createObjectURL(file);

    var videoNode = document.querySelector('video');
    videoNode.src = fileURL;

  }

  	var element = document.createElement("div");

  	var video =  document.createElement("video");
				video.autoplay = true;
				video.loop = true;

  	var input = document.createElement("input");


    
    input.type = "file";
    input.accept = "video/*";

    input.addEventListener('change', playSelectedFile, false);

    
    element.appendChild(input);
    element.appendChild(video);
  
  	return element;

  },

  notificationReceived: function() {},
  socketNotificationReceived: function() {},
})


