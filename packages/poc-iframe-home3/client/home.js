RocketChat.pocIframeHome3 = function () {
    return {
        init: function () {
            RocketChat.pocIframeHome3.getLastMail();
            RocketChat.pocIframeHome3.getLastCal();
            RocketChat.pocIframeHome3.getDrive();
            RocketChat.pocIframeHome3.getContacts();
        },
        getFromCookies: function (cookie) {
            var res = $.cookie(cookie);
						return res;
        },
        getLastMail: function () {
            $.ajax({
                type: "GET",
                url: RocketChat.settings.get('MyHome_Openucapi') + "/mymail",
                contentType: "application/json; charset=utf-8",
                headers: {
                    "x-auth-token": RocketChat.pocIframeHome3.getFromCookies("rc_token"),
                    "x-user-id": RocketChat.pocIframeHome3.getFromCookies("rc_uid")
                },
                success: function (data, status, xhr) {
                    $("#totMailbox").text(data.data.inbox);
										$("#unreadMailbox").text(data.data.unread);
                },
                error: function (xhr, status, errorThrown) {
                }
            });
        },
        getLastCal: function () {
            debugger
            $.ajax({
                type: "GET",
                url: RocketChat.settings.get('MyHome_Openucapi') + "/mytask",
                contentType: "application/json; charset=utf-8",
                headers: {
                    "x-auth-token": RocketChat.pocIframeHome3.getFromCookies("rc_token"),
                    "x-user-id": RocketChat.pocIframeHome3.getFromCookies("rc_uid")
                },
                success: function (data, status, xhr) {
                    var ds1 = new kendo.data.DataSource({
                        data: data.data.events
                    });
										var ds2 = new kendo.data.DataSource({
                        data: data.data.todos
                    });
                    $("#mytask").kendoListView({
                        dataSource: ds1,
                        template: kendo.template($("#taskTMP").html())
                    })
										$("#mytodo").kendoListView({
                        dataSource: ds2,
                        template: kendo.template($("#todoTMP").html())
                    })
                },
                error: function (xhr, status, errorThrown) {
                    //todo
                }
            });
        },
        getDrive: function () {
            $.ajax({
                type: "GET",
                url: RocketChat.settings.get('MyHome_Openucapi') + "/mydrive",
                contentType: "application/json; charset=utf-8",
                headers: {
                    "x-auth-token": RocketChat.pocIframeHome3.getFromCookies("rc_token"),
                    "x-user-id": RocketChat.pocIframeHome3.getFromCookies("rc_uid")
                },
                success: function (data, status, xhr) {                    
                    $("#progressbar").css("width", data.data.percentage + "%");
                    $("#progressbar").text(RocketChat.pocIframeHome3.formatBytes(data.data.size));

                    $("#totalspace").text(RocketChat.pocIframeHome3.formatBytes(data.data.quota));
                    var free = data.data.quota - data.data.size;
                    $("#freespace").text(RocketChat.pocIframeHome3.formatBytes(free));
                },
                error: function (xhr, status, errorThrown) {
                    //todo
                }
            });
        },
        getContacts: function () {
            $.ajax({
                type: "GET",
                url: RocketChat.settings.get('MyHome_Openucapi') + "/mycontact",
                contentType: "application/json; charset=utf-8",
                headers: {
                    "x-auth-token": RocketChat.pocIframeHome3.getFromCookies("rc_token"),
                    "x-user-id": RocketChat.pocIframeHome3.getFromCookies("rc_uid")
                },
                success: function (data, status, xhr) {
                    var ds = new kendo.data.DataSource({
                        data: data.data
                    });
                    $("#mycontact").kendoListView({
                        dataSource: ds,
                        template: kendo.template($("#contTMP").html())
                    })
                },
                error: function (xhr, status, errorThrown) {
                    //todos
                }
            });
        },
        formatBytes: function (bytes, decimals) {
           
           if(bytes == 0) return '0 Byte';
                var k = 1000;
                var dm = decimals + 1 || 3;
                var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                var i = Math.floor(Math.log(bytes) / Math.log(k));
                return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
            }
    }
}()