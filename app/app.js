function route() {
    let hashTag = window.location.hash;
    let pageId = hashTag.replace("#", "");
    // console.log(hashTag + " " + pageID);


    if (pageId != "") {
        $.get(`pages/${pageId}/${pageId}.html`, function(data) {
            console.log("data: " + data);
            $("#app").html(data);
            initListeners();

        })
    } else {
        $.get(`pages/home/home.html`, function(data) {
            console.log("data: " + data);
            $("#app").html(data)
            initListeners();

        })
    }



}

function initURLListener() {
    $(window).on("hashchange",
        route);
    route();
}

function initListeners() {
    $("#submit").click(function(e) {
        e.preventDefault();
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        let address = $("#address").val();
        let city = $("#city").val();
        let state = $("#state").val();
        let zip = $("#zip").val();
        let email = $("#email").value;
        let phone = $("#phone").val();
        let time = $("#time").val();
        console.log("name: " + firstName + " " + lastName + "\n Address:" + address + "\n" + city + ", " + zip + '\n contact:' + email + " " + phone + "\n time created:" + time);
    })
    $("#createAccount").click(function(e) {
        e.preventDefault();
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        let email = $("#email").val();
        let createPassword = $("#createPassword").val();
        console.log("Name:" + firstName + " " + lastName + "\n Email:" + email + " \n Password:" + createPassword);
    })
    $("#login").click(function(e) {
        e.preventDefault();
        let username = $("#username").val();
        let password = $("#password").val();
        console.log(username + "\n " + password)
    })
    $("#edit").click(function(e) {
        e.preventDefault();

        let user = {
            fName: "Jake",
            lName: "Dobler",
            username: "Jaecob.d1@gmail.com",
            password: "hahahaha"
        }

        $("#fName").val(user.fName);
        $("#lName").val(user.lName);
        $("#username").val(user.username);
        $("#password").val(user.password);

        console.log(user);
    })
}

$(document).ready(function() {
    initURLListener();

})