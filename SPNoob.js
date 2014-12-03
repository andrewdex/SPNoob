/*
* SPNoob - SharePoint 13 Helper JS  Library
* Author : Dilusha Gonagala
* Version 1.0
* License : MIT
* Github : @andrewdex
*/

(function () {

    /*SPNoob : SP Helper Library : Dilusha */

    var SPNoob = {

        /*Get Sharepoint Form Mode : New/Edit/View Modes*/
        IsMode: function (mode) {

            var status = false;

            if (mode !== undefined && mode !== "") {

                var pathname = window.location.pathname;

                if (mode == "New") {

                    pathname = parent.window.location.pathname;
                    var modeUrl = "AllItems.aspx";

                    var getMatched = pathname.match(mode);

                    if (getMatched !== null) {
                        status = true;
                    }

                }

                if (mode == "Edit") {

                    var mode = "EditForm.aspx";

                    var getMatched = pathname.match(mode);

                    if (getMatched !== null) {
                        status = true;
                    }

                }

                if (mode == "View") {

                    var mode = "DispForm.aspx";

                    var getMatched = pathname.match(mode);

                    if (getMatched !== null) {
                        status = true;
                    }

                }

            }

            return status;


        },
        Common: {

            URLGetOrigin: function () {

                var urlreturn = "";
                var urlorigin = window.location.origin;

                if(urlorigin !== undefined || urlorigin !== ""){

                    urlreturn = urlorigin;

                }

                return urlreturn;


            },

            URLGetPath: function () {

                var urlreturn = "";
                var urlpath = window.location.pathname;

                if(urlpath !== undefined || urlpath !== ""){

                    urlreturn = urlpath;

                }

                return urlreturn;


            },
            URLGetCorrectLib: function(){

                var returnurl="";
                var preparedUrlOrigin = SPNoob.Common.URLGetOrigin();
                var preparedUrlPath = SPNoob.Common.URLGetPath();
                var preparedURL =  preparedUrlOrigin + "/" + preparedUrlPath;

                var splittedSlashURL = preparedUrlPath.split("/");
                var getAbsoulteLibBefore = splittedSlashURL[1];
                var getAbsoulteLibpath = splittedSlashURL[2];

                var setAbsoluteURLLibPath = preparedUrlOrigin+"/"+getAbsoulteLibBefore+"/"+getAbsoulteLibpath;

                return returnurl = setAbsoluteURLLibPath;

            }

        }


    };

    /*Expose to a global var*/
    window.SPNoob = SPNoob;

    /*Expose to a global var*/
    window.spnoob = SPNoob;

})();