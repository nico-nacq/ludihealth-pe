var phone = document.getElementById("phone");
var body = document.getElementById("body");
var btn_message = document.getElementById("btn_message");
var btn_camera = document.getElementById("btn_camera");
var btn_map = document.getElementById("btn_map");
var btn_shot = document.getElementById("btn_shot");
var btn_back = document.getElementById("btn_back");
var btn_home = document.getElementById("btn_home");
var messages = document.getElementById("btn_home");



btn_message.addEventListener("click", () => { change_activity('messages') });
btn_camera.addEventListener("click", () => { change_activity('camera') });
btn_map.addEventListener("click", () => { change_activity('map') });
btn_shot.addEventListener("click", () => { change_activity('messages') });
btn_back.addEventListener("click", () => { change_activity(previous_activity) });
btn_home.addEventListener("click", () => { change_activity('home') });

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
function change_scene(scene_id) {

}