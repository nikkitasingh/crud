var name;
var address;
var age;
$(function () {
    document.addEventListener("online", onOnline, false);
});

function onOnline() {
    alert('Internet connection ISSUE');
}

function changepage(page) {
    $.mobile.changePage(page, {
        transition: 'slidefade'
    });
};

function logout() {
    localStorage.clear();
    alert('Logged Out Succesfully');
    changepage('#loginpage');
}

function changepageback() {
    history.back();
};
// this is for login_page_two  page 
function submit_login() {
    var uem = $('#useremail').val(); /* get value from first input tag*/
    var upw = $('#password').val(); /* get value from second input tag*/
    if (uem == '' || upw == '') {
        alert('Both fields are required');
        return;
    }
    $.ajax({
        url: "http://localhost/task%20manager/www/API/login_app.php"
        , type: "post"
        , data: 'useremail=' + uem + '&userpassword=' + upw
        , success: function (response) {
            changepage('#next_page');
            $.mobile.loading('hide');
            var userdata = $.parseJSON(response);
            $(userdata).each(function (Index, element) {
                //alert(response);
                $('#nameshow').html("welcome  " + element.name);
                //               
                // to set the local storage-----------
                localStorage.setItem("ueml", element.name);
                //localStorage.setItem("upw", element.password);
            });
        }
        , error: function () {
            $.mobile.loading('hide');
            console.log(response);
        }
    });
}
$(document).on("pageshow", "#verification", function () {
    var ueml3 = localStorage.getItem('ueml');
    // var   upw3 = localStorage.getItem('userpassword');
    alert(ueml3);
});

function logout2() {
    localStorage.clear();
    alert('Logged Out Succesfully');
    changepage('#login_page_two');
}
$(document).on("pageshow", "#next_page", function () {
    var ueml2 = localStorage.getItem('ueml');
    // var   upw3 = localStorage.getItem('userpassword');
    alert("no cache data  : " + ueml2);
});
// this is date  8/2/18 ajax related
$(document).on("pageshow", "#forthpage", function () { //jquery mobile show event code   
    showdata();
    //  $.mobile.loading( 'show', { theme: "a", text: "please wait", textonly: false});
});

function showdata() {
    //    $('#teamdetailsshow').html('');
    $.mobile.loading('show');
    //    $.mobile.loading( 'show', { theme: "b", text: "please wait", textonly: false});
    $.ajax({
        url: "http://localhost/phonegap%20project/myfirst_phonegap/myfirst_phonegap_api/select.php"
        , type: "post", // data: 'username=' + username + '&password=' + password,
        success: function (response) {
            $.mobile.loading('hide');
            //    alert(response);
            //  console.log(response);
            $('#para1').html(response);
        }
        , error: function () {
            $.mobile.loading('hide');
            console.log(response);
        }
    });
}
// calling jquery mobile events date 7/2/18    
function hideshow() {
    $.mobile.loading('show');
}
$(function () {
    document.addEventListener("online", onOnline, false);
});

function onOnline() {
    alert('Internet connection ISSUE');
}

function changepage(linkstr) {
    $.mobile.changePage(linkstr, {
        transition: 'flip'
    });
};

function logout() {
    localStorage.clear();
    alert('Logged Out Succesfully');
    changepage('#login_page2');
}

function login_details() {
    //    $('#usernameinput').val('');   /* helps to clear input fields */
    //    $('#passwordinput').val('');
    var newuserinput = $('#usernameinput').val(); /* taking & storing values from user */
    var newpassinput = $('#userpasswordinput').val(); /* taking & storing values from user */
    if (newuserinput == '' || newpassinput == '') {
        alert('both fields are required');
        return;
    }
    $.mobile.loading('show');
    $.ajax({
        url: "http://localhost/jqueryproject/www/api/selectdata.php"
        , type: "post"
        , data: 'uname=' + newuserinput + '&upass=' + newpassinput
        , success: function (response) {
            $.mobile.loading('hide');
            alert(response);
            if (response != 'false') {
                var getdata = $.parseJSON(response);
                $(getdata).each(function (index, element) {
                    localStorage.setItem("username", element.name);
                    localStorage.setItem("emailid", element.email);
                    localStorage.setItem('loggedin', 1);
                });
                changepage('#myprofile');
            }
            else {
                alert('Username or password does not exist');
            }
        }
        , error: function () {
            $.mobile.loading('hide');
            ///////// console.log(response);
        }
    });
}
$(document).on("pageshow", "#myprofile", function () {
    if (localStorage.getItem('username') == '' || localStorage.getItem('username') == null) {
        alert('Not Logged In');
        changepage('#login_page2');
    }
    else {
        changepage('#myprofile');
        var name = localStorage.getItem('username');
        var designation = localStorage.getItem('emailid');
        $('#dynamicusername').html(name);
        $('#dynamicpassword').text(designation);
    }
});
$(document).on("pageshow", "#login_page2", function () {
    if (localStorage.getItem('loggedin') == 1) {
        alert('already logged in');
        changepage('#myprofile');
    }
});

function sign_up() {
    var newusername = $('#newusername').val();
    var newuseremail = $('#newuseremail').val();
    var newuserpass = $('#newuserpass').val();
    //    alert(newusername+newuseremail+newuserpass);
    $.mobile.loading('show');
    $.ajax({
        url: "http://localhost/jqueryproject/www/api/signup.php"
        , type: "post"
        , data: 'username=' + newusername + '&emailid=' + newuseremail + '&password=' + newuserpass
        , success: function (response) {
            $.mobile.loading('hide');
            //            alert(response);
            if (response != 'false') {
                alert(response);
            }
            else {
                alert(response);
            }
        }
        , error: function () {
            $.mobile.loading('hide');
            ///////// console.log(response);
        }
    });
}
// $.mobile.loading('show');
// $.mobile.loading('show');
//    $.ajax({
//        url: "http://localhost/jqueryproject/www/api/selectdata.php"
//        , type: "post"
//        , success: function (response) {
//            changepage('#profilepage');
//            var userdata = $.parseJSON(response);
//            $(userdata).each(function (index, element) {
//                //  $.mobile.loading('hide');
//                //            alert(response);
//                //            console.log(response);
//                $('#username').html(element.user_name);
//                $('#useraddress').html(element.user_address);
//                $('#userage').html(element.user_age);
//                localStorage.setItem("usernamelocal", element.user_name);
//                localStorage.setItem("useraddresslocal", element.user_address);
//                localStorage.setItem("useragelocal", element.user_age);
//            });
//        }
//    });
//}
//$(document).on("pageshow", "#profilepage", function () {
//    var usernamefromlocal = localStorage.getItem('usernamelocal');
//    var useraddressfromlocall = localStorage.getItem('useraddresslocal');
//    var useragefromlocal = localStorage.getItem('useragelocal');
//    alert(usernamefromlocal);
//});
//
//$(document).on("pageshow", "#loginpage", function () { //jquery mobile even
//    var user124 = localStorage.getItem('usernamelocal');
//    alert(user124);
//});
//
//$(document).on("pageshow", "#pagename1", function () {
//   var user1245 = localStorage.getItem('usernamelocal');
//    alert(user1245);
//});
//$(document).on("pageshow", "#secnd", function () {
//    alert(name);
//});
//$(document).on("pageshow", "#homepage", function () {
//    if (localStorage.getItem('name') == '') {
//        alert('Not Logged In');
//        changepage('#loginpage');
//    } else {
//        var name = localStorage.getItem('name');
//        var designation = localStorage.getItem('designation');
//        var id = localStorage.getItem('id');
//        var username = localStorage.getItem('username');
//        $('#empnameshow').html(username);
//        $('#nameshow').html(name);
//        $('#designshow').html(designation);
//        $('#idshow').html(id);
//        //        $('#photoshow').html('<img src="http://viztechinteractives.com/training/redbull/img/' + photo_store + '" width="200px">');
//    }
//});
//
//function login() {
//    var username = $('#username').val();
//    var password = $('#password').val();
//    if (username == "" || password == "") {
//        alert('Both fields are requierd');
//        return false;
//    }
//    $.mobile.loading("show", {
//        text: "please wait while validating",
//        textVisible: true,
//        theme: "b",
//        html: ""
//    });
//    $.ajax({
//        url: "http://quickdev.in/task_manager/login.php",
//        type: "post",
//        data: 'username=' + username + '&password=' + password,
//        success: function (response) {
//            $.mobile.loading('hide');
//            response = response.trim();
//            if (response != 'false') {
//                var userdata = $.parseJSON(response);
//                changepage('#homepage');
//                $(userdata).each(function (index, element) {
//                    if (element.user_type == 0) {
//                        localStorage.setItem('username', element.username);
//                        localStorage.setItem('designation', element.designation);
//                        localStorage.setItem('id', element.id);
//                        localStorage.setItem('name', element.name);
//                        $('#assigntasksbutton').hide();
//                        $('#tasksshowbutton').show();
//                        $('#teamshowbutton').hide();
//                    } else {
//                        localStorage.setItem('username', element.username);
//                        localStorage.setItem('designation', element.designation);
//                        localStorage.setItem('id', element.id);
//                        localStorage.setItem('name', element.name);
//                        $('#tasksshowbutton').hide();
//                        $('#assigntasksbutton').show();
//                        $('#teamshowbutton').show();
//                    }
//                });
//            } else {
//                $.mobile.loading('hide');
//                alert('Wrong User Credentials');
//                console.log('No user found');
//            }
//        },
//        error: function () {
//            $.mobile.loading('hide');
//            console.log(response);
//        }
//    });
//}
//
//function teamdetails() {
//    $('#teamdetailsshow').html('');
//    $.mobile.loading('show');
//    $.ajax({
//        url: "http://quickdev.in/task_manager/team_details.php",
//        type: "post"
//            //        , data: 'username=' + username + '&password=' + password
//
//        ,
//        success: function (response) {
//            $.mobile.loading('hide');
//            response = response.trim();
//            if (response != 'false') {
//                var userdata = $.parseJSON(response);
//                changepage('#teamdetailspage');
//                $(userdata).each(function (index, element) {
//                    $('#teamdetailsshow').append('<li onclick = showempdetailtasks(' + element.id + ')><span style="font-weight:bold;font-size:20px;">' + element.name + '</span><br>' + '<span style="float:right !important;">' + element.designation + '</span></li><br><hr>');
//                });
//            } else {
//                $.mobile.loading('hide');
//                alert('something went wrong.. try again');
//                changepage('#homepage');
//                console.log('No user found');
//            }
//        },
//        error: function () {
//            $.mobile.loading('hide');
//            console.log(response);
//        }
//    });
//}
//
//function showempdetailtasks(id) {
//    $('#teamtasksdetailsshow').html('');
//    $.mobile.loading('show');
//    $.ajax({
//        url: "http://quickdev.in/task_manager/task_details.php",
//        type: "post",
//        data: 'id=' + id,
//        success: function (response) {
//            $.mobile.loading('hide');
//            response = response.trim();
//            if (response != 'false') {
//                var userdata = $.parseJSON(response);
//                changepage('#teamtasksdetails');
//                $(userdata).each(function (index, element) {
//                    $('#empnamefortaskshow').html(element.emp_name + '<br><br><center><button class="homeb" onclick="assignnewtask( ' + element.id + ');">Assign New task</button></center>');
//
//                    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
//                    var firstDate = new Date();
//                    var secondDate = new Date(element.deadline);
//
//                    if (element.deadline == 'completed' || element.deadline == 'undefined') {
//                        var diffDays = 'Done';
//
//                        $('#teamtasksdetailsshow').append('<div style="padding:10px !important;" class="nd2-card center-xs"><span style="float:left !important;">Last Task&nbsp:&nbsp' + element.task_name + '</span><br><span style="float:left !important;">Assigned&nbsp:&nbsp' + element.date + '</span><br><span style="float:left !important;">Deadline&nbsp:&nbsp' + element.deadline + '</span><br><span style="float:left !important;">Days left: ' + diffDays + ' </span></div>');
//                    } else {
//                        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
//
//                        $('#teamtasksdetailsshow').append('<div style="padding:10px !important;" class="nd2-card center-xs"><span style="float:left !important;">Last Task&nbsp:&nbsp' + element.task_name + '</span><br><span style="float:left !important;">Assigned&nbsp:&nbsp' + element.date + '</span><br><span style="float:left !important;">Deadline&nbsp:&nbsp' + element.deadline + '</span><br><span style="float:left !important;">Days left: ' + diffDays + ' </span></div>');
//
//                    }f
//
//                });
//            } else {
//                $.mobile.loading('hide');
//                alert('No task assigned yet for this employee');
//                var userdata = $.parseJSON(response);
//                changepage('#teamtasksdetails');
//
//                $(userdata).each(function (index, element) {
//
//                    alert(element.id);
//                    //                    $('#empnamefortaskshow').html(element.emp_name + '<br><br><center><button class="homeb" onclick="assignnewtask( ' + element.id + ');">Assign New task</button></center>');
//
//                    //                    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
//                    //                    var firstDate = new Date();
//                    //                    var secondDate = new Date(element.deadline);
//
//                    //                    if (element.deadline == 'completed' || element.deadline == 'undefined') {
//                    //                        var diffDays = 'Done';
//                    //
//                    //                        $('#teamtasksdetailsshow').append('<div style="padding:10px !important;" class="nd2-card center-xs"><span style="float:left !important;">Last Task&nbsp:&nbsp' + element.task_name + '</span><br><span style="float:left !important;">Assigned&nbsp:&nbsp' + element.date + '</span><br><span style="float:left !important;">Deadline&nbsp:&nbsp' + element.deadline + '</span><br><span style="float:left !important;">Days left: ' + diffDays + ' </span></div>');
//                    //                    } else {
//                    //                        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
//                    //
//                    //                        $('#teamtasksdetailsshow').append('<div style="padding:10px !important;" class="nd2-card center-xs"><span style="float:left !important;">Last Task&nbsp:&nbsp' + element.task_name + '</span><br><span style="float:left !important;">Assigned&nbsp:&nbsp' + element.date + '</span><br><span style="float:left !important;">Deadline&nbsp:&nbsp' + element.deadline + '</span><br><span style="float:left !important;">Days left: ' + diffDays + ' </span></div>');
//                    //
//                    //                    }
//
//                });
//            }
//        },
//        error: function () {
//            $.mobile.loading('hide');
//            console.log(response);
//        }
//    });
//}
//
//function showloader(){
//    
//    $.mobile.loading('show'); 
//}
//
//function tasksdetails() {
//
//    var id = localStorage.getItem('id');
//    //    alert(id);
//
//    $('#taskdetailsshow').html('');
//    $.mobile.loading('show');
//    $.ajax({
//        url: "http://quickdev.in/task_manager/task_details.php",
//        type: "post",
//        data: 'id=' + id,
//        success: function (response) {
//            $.mobile.loading('hide');
//            response = response.trim();
//            if (response != 'false') {
//
//                var userdata = $.parseJSON(response);
//                changepage('#owntaskdetails');
//                $(userdata).each(function (index, element) {
//                    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
//                    var firstDate = new Date();
//                    var secondDate = new Date(element.deadline);
//
//                    if (element.deadline == 'completed' || element.deadline == 'undefined') {
//                        var diffDays = 'Done';
//
//                        $('#taskdetailsshow').append('<div style="padding:10px !important;" class="nd2-card center-xs"><span style="float:left !important;">Last Task&nbsp:&nbsp' + element.task_name + '</span><br><span style="float:left !important;">Assigned&nbsp:&nbsp' + element.date + '</span><br><span style="float:left !important;">Deadline&nbsp:&nbsp' + element.deadline + '</span><br><span style="float:left !important;">Days left: ' + diffDays + ' </span></div>');
//
//
//
//                    } else {
//                        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
//
//                        $('#taskdetailsshow').append('<div style="padding:10px !important;" class="nd2-card center-xs"><span style="float:left !important;">Last Task&nbsp:&nbsp' + element.task_name + '</span><br><span style="float:left !important;">Assigned&nbsp:&nbsp' + element.date + '</span><br><span style="float:left !important;">Deadline&nbsp:&nbsp' + element.deadline + '</span><br><span style="float:left !important;">Days left: ' + diffDays + ' </span><br><button style="background-color: rgba(128, 128, 128, 0.79) !important;color: white !important;width: 80px !important;border-radius:5px !important;" onclick = "taskcomplete( ' + element.id + ')">Done</button></div>');
//
//                    }
//
//
//                });
//            } else {
//                $.mobile.loading('hide');
//                alert('something went wrong.. try again');
//                changepage('#homepage');
//                console.log(response);
//            }
//        },
//        error: function () {
//            $.mobile.loading('hide');
//            console.log(response);
//        }
//    });
//
//}
//
//function taskcomplete(id) {
//
//    //    alert(id);
//    $.mobile.loading('show');
//    $.ajax({
//        url: "http://quickdev.in/task_manager/task_complete.php",
//        type: "post",
//        data: 'id=' + id,
//        success: function (response) {
//            $.mobile.loading('hide');
//            response = response.trim();
//            if (response != 'false') {
//
//                tasksdetails();
//
//            } else {
//                $.mobile.loading('hide');
//                alert('something went wrong.. try again');
//                changepage('#homepage');
//                console.log(response);
//            }
//        },
//        error: function () {
//            $.mobile.loading('hide');
//            console.log(response);
//        }
//    });
//}
//
//function assignnewtask(id) {
//    //    changepage('#assignnewtask');
//    alert(id);
//    //
//    //    $.mobile.loading('show');
//    //    $.ajax({
//    //        url: "http://quickdev.in/task_manager/assignnewtask.php",
//    //        type: "post",
//    //        data: 'id=' + id,
//    //        success: function (response) {
//    //            $.mobile.loading('hide');
//    //            response = response.trim();
//    //            if (response != 'false') {
//    //
//    //                tasksdetails();
//    //
//    //            } else {
//    //                $.mobile.loading('hide');
//    //                alert('something went wrong.. try again');
//    //                changepage('#homepage');
//    //                console.log(response);
//    //            }
//    //        },
//    //        error: function () {
//    //            $.mobile.loading('hide');
//    //            console.log(response);
//    //        }
//    //    });
//}