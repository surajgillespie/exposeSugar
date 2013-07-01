define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var icon = require("sugar-web/graphics/icon");
    var datastore = require("sugar-web/foo");
   


    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();

        // Colorize the activity icon.
        var activityButton = document.getElementById("activity-button");
        activity.getXOColor(function (error, colors) {
            icon.colorize(activityButton, colors);
        });

        // Make the activity stop with the stop button.
        var stopButton = document.getElementById("stop-button");

        var datastoreObject = activity.getDatastoreObject();

        activity.sampleSystemCalls(function (error, values) {
            console.log("real group id of current process : "+values[0])
            console.log("process id of current process : "+values[1])
            console.log("parent process id of current process : "+values[2])         
        });

        activity.sugarLogDir(function (error, values) {
            console.log(values)
                     
        });


        

        
        stopButton.onclick = function () {
            //console.log("score : "+highscore);
            //highscore="123";
            //var jsonData = JSON.stringify(highscore.toString());
            //atastoreObject.setDataAsText(jsonData);

            //datastoreObject.save();
           // console.log(datastoreObject.save());
            
            //datastoreObject.save(function () {
                activity.close();
            //});
        
         };
         

        function onLoaded(error, metadata, data) {
            //console.log(metadata);
            var activityname=(metadata.activity).split('.');
            console.log(activityname[2]);
            //console.log(data);
            //highscore=parseInt(JSON.parse(data));
            
            
            
        }

        datastoreObject.loadAsText(onLoaded);
        
    });

});
