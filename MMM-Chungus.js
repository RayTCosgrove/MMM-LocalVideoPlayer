Module.register("MMM-Timetable", {
  defaults: {},

getStyles: function(){
	return ["Chungus.css"];
}

  start: function () {},

  playSelectedFile: function(){
  	
  	var file = this.files[0];
  	var type = file.type;

  	var inputNode = document.querySelector('input');
    inputNode.addEventListener('change', playSelectedFile, false);

    var fileURL = URL.createObjectURL(file);

    var videoNode = document.querySelector('video');
    videoNode.src = fileURL;

  },
  getDom: function() {

  	var element = document.createElement("div");

  	var video =  document.createElement("video");
				video.autoplay = true;
				video.loop = true;

  	var input = document.createElement("input");
    input.type = "video";
    input.accept = "video/*";
    
    element.appendChild(input);
    element.appendChild(video);
  
  	return element;

  },

  notificationReceived: function() {},
  socketNotificationReceived: function() {},
})


