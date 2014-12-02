/*
* SPNoob - SharePoint 13 Helper JS  Library
* Author : Dilusha Gonagala
* Version 1.0
* License : MIT
* Github : @andrewdex
*/

(function(){

/*SPNoob : SP Helper Library : Dilusha */

var SPNoob = {

	/*Get Sharepoint Form Mode : New/Edit/View Modes*/
    IsMode : function(mode){

        var status = false;
        
        if(mode !== undefined && mode !== ""){

            var pathname = window.location.pathname;

            if(mode == "New"){

              var mode = "AllItems.aspx"

              var getMatched = pathname.match(mode);

              if(getMatched !== null){
                status = true;
              }

            }

            if(mode == "Edit"){

              var mode = "EditForm.aspx"

              var getMatched = pathname.match(mode);

              if(getMatched !== null){
                status = true;
              }

            }

            if(mode == "View"){

              var mode = "DispForm.aspx"

              var getMatched = pathname.match(mode);

              if(getMatched !== null){
                status = true;
              }

            }
            
        }

        return status;


    },
    Common:{

        getModeSample: function(mode){



        }
    }


};

/*Expose to a global var*/
window.SPNoob = SPNoob;

/*Expose to a global var*/
window.spnoob = SPNoob;

})();