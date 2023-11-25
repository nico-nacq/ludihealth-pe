var phone = document.getElementById("phone");
var body = document.getElementById("body");
var btn_message = document.getElementById("btn_message");
var btn_camera = document.getElementById("btn_camera");
var btn_map = document.getElementById("btn_map");
var btn_shot = document.getElementById("btn_shot");
var btn_back = document.getElementById("btn_back");
var btn_home = document.getElementById("btn_home");
var messages = document.getElementById("messages");
var notification_icon = document.getElementById("notification_icon");
var notification_popup = document.getElementById("notification_popup");

var notification_popup_content = document.getElementById("notification_popup_content");
var checks_icon = document.getElementById("checks_icon");
var avatar_icon = document.getElementById("avatar_icon");



btn_message.addEventListener("click", () => { change_activity('messages') });
btn_camera.addEventListener("click", () => { change_activity('camera') });
btn_map.addEventListener("click", () => { change_activity('map') });
btn_shot.addEventListener("click", () => { change_activity('messages') });
btn_back.addEventListener("click", () => { change_activity(previous_activity) });
btn_home.addEventListener("click", () => { change_activity('home') });
notification_icon.addEventListener("click", () => { change_activity('messages') });
notification_popup.addEventListener("click", () => { change_activity('messages') });


for (i = 1; i <= 5; i++) {
    var pin = document.getElementById("pin_" + i);
    pin._i = i;
    pin.addEventListener("click", (e) => {
        change_camera(e.target._i)
        change_activity('camera');
    });

}

var fake_apps = document.getElementsByClassName('fake_app');
for (i = 0; i < fake_apps.length; i++) {
    fake_apps[i].addEventListener("click", (e) => {
        hack();
        run_dialog(e.target.attributes["data-dialog-id"].value);
    });
}



actual_activity = 'home';
previous_activity = 'home';



body.scrollTo(0, 0);



function change_activity(activity) {
    console.log("change_activity", activity)
    previous_activity = actual_activity;
    phone.classList.remove("home");
    phone.classList.remove("messages");
    phone.classList.remove("camera");
    phone.classList.remove("map");
    phone.classList.add(activity);
    actual_activity = activity;
    if (activity !== "messages") {
        body.scrollTo(0, 0);
    } else {
        _hide_notifications();
        body.scrollTo(0, body.scrollHeight);
    }
}

function hack() {

    phone.classList.add("hack");
    setTimeout(() => {
        phone.classList.remove("hack");
    }, 1000);

}

function run_dialog(dialog_id) {

}

function _message(txt, direction, image, choices) {
    let message = document.createElement("div");
    message.classList.add(direction);
    if (direction == "from") {

        if (actual_activity === "messages" && direction === "from") {
            message.classList.add("typing");
            setTimeout(() => {
                message.classList.remove("typing");
                body.scrollTo(0, body.scrollHeight);
            }, txt.length * 20)
        }
        let avatar_ctn = document.createElement("div");
        avatar_ctn.classList.add("avatar");
        avatar_ctn.appendChild(avatar_icon.cloneNode(true));

        message.appendChild(avatar_ctn);

        let dots_ctn = document.createElement("div");
        dots_ctn.classList.add("dots");
        let dot = document.createElement("span");
        dots_ctn.appendChild(dot.cloneNode());
        dots_ctn.appendChild(dot.cloneNode());
        dots_ctn.appendChild(dot.cloneNode());
        message.appendChild(dots_ctn);
    }
    let message_ctn = document.createElement("div");
    message_ctn.classList.add("message");
    message_ctn.innerHTML = txt;
    if (image) {
        let img = document.createElement("img");
        img.src = image;
        message_ctn.appendChild(img);
    }
    message.appendChild(message_ctn);


    if (direction == "to") {
        let checks_ctn = document.createElement("div");
        checks_ctn.classList.add("checks");
        checks_ctn.appendChild(checks_icon.cloneNode(true));
        message.appendChild(checks_ctn);
    }

    if (choices && choices.length) {
        for (i = 0; i < choices.length; i++) {
            let option = document.createElement("button");
            option.classList.add("message");
            option.classList.add("choices");
            option.innerHTML = choices[i].txt;
            option._goto = choices[i].goto;
            option.addEventListener("click", (e) => {
                run_dialog(e.target._goto);
            })
            message.appendChild(option);
        }
    }
    if (actual_activity !== "messages" && direction === "from") {
        _send_notification(txt);
    }
    console.log(message);
    messages.appendChild(message);
    body.scrollTo(0, body.scrollHeight);
}

function _send_notification(txt) {
    phone.classList.add("notification_visible");
    phone.classList.add("notification_popup_visible");
    notification_popup_content.innerText = txt;
    setTimeout(() => {
        phone.classList.remove("notification_popup_visible");
    }, 5000);
}
function _hide_notifications() {
    phone.classList.remove("notification_visible");
    phone.classList.remove("notification_popup_visible");
};

function change_scene(scene_id) {

}