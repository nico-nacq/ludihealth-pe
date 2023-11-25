// faire avatars détruits (6 ou 7) dont avec cheveux dans l'oreille
// les mettre dans le tableau dans une colonne image
// heure


var phone = document.getElementById("phone");
var body = document.getElementById("body");

var btn_start = document.getElementById("btn_start");
var btn_message = document.getElementById("btn_message");
var btn_camera = document.getElementById("btn_camera");
var btn_map = document.getElementById("btn_map");
var btn_shot = document.getElementById("btn_shot");
var btn_back = document.getElementById("btn_back");
var btn_home = document.getElementById("btn_home");
var messages = document.getElementById("messages");
var notification_icon = document.getElementById("notification_icon");
var notification_popup = document.getElementById("notification_popup");
var cursor = document.getElementById("cursor");
var credit = document.getElementById("credit");
var notification_popup_content = document.getElementById("notification_popup_content");
var checks_icon = document.getElementById("checks_icon");
var avatar_icon = document.getElementById("avatar_icon");

var clock = document.getElementById("clock");


var glitch_audio_1 = new Audio('assets/65428__gumballrimpoche__glitchys_1.mp3');
var glitch_audio_2 = new Audio('assets/65428__gumballrimpoche__glitchys_2.mp3');
var glitch_audio_3 = new Audio('assets/65428__gumballrimpoche__glitchys_3.mp3');

var message_pop = new Audio('assets/244657__greenvwbeetle__pop-5.mp3');


var music = new Audio('assets/686660__xkeril__the-slow-music-of-our-breakup.mp3');
music.loop = true;

var notification_audio = new Audio('assets/648960__ienba__handheld-bell.mp3');

var intro_glitches = 5;

function display_date(glitch) {
    var date = new Date;
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    if (glitch) {
        year += 22;
    }
    clock.innerHTML = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
}
display_date();

intro_glitches_interval = setInterval(() => {
    if (intro_glitches > 0) {
        if (!phone.classList.contains('main_menu')) {
            intro_glitches--;
            run_dialog("intro_" + intro_glitches);
            hack();
        } else {
            if (Math.random() > 0.5) {
                hack();
            }
        }

        return
    }
    setTimeout(() => {
        run_dialog("intro");
        phone.classList.remove("intro");
    }, 2000)

    clearInterval(intro_glitches_interval);

}, 3000);

btn_start.addEventListener("click", () => { roll_credits() });

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
        change_scene(e.target.parentNode._i);
        change_activity('camera');
    });

}

var fake_apps = document.getElementsByClassName('fake_app');
for (i = 0; i < fake_apps.length; i++) {
    fake_apps[i].addEventListener("click", (e) => {
        if (intro_glitches > 0) {
            intro_glitches--;
            run_dialog("intro_" + intro_glitches);
            hack();
            return
        }
        if (!first_choice_made) {
            hack();
            return
        }
        run_dialog(e.target.getAttribute("data-dialog-id"));

        hack();

    });
}


actual_scene = 1;
actual_activity = 'home';
previous_activity = 'home';
waiting_for_response = false;
successes = 0;

body.scrollTo(0, 0);

function roll_credits() {
    btn_start.remove();
    music.play();
    setTimeout(function () {
        hack();
        credit.innerHTML = "LudiHealth présente";
    }, 3000);
    setTimeout(function () {
        hack();
        credit.innerHTML = "FUTURES PERTURBATIONS";
    }, 6000);
    setTimeout(function () {
        hack();
        phone.classList.remove("main_menu");
    }, 10000);

}

function change_activity(activity) {
    if (intro_glitches > 0) {
        intro_glitches--;
        run_dialog("intro_" + intro_glitches);
        hack();
        return
    }
    if (!first_choice_made && activity !== "messages") {
        hack();
        return
    }
    console.log("change_activity", activity);
    previous_activity = actual_activity;
    phone.classList.remove("home");
    phone.classList.remove("messages");
    phone.classList.remove("camera");
    phone.classList.remove("map");
    phone.classList.add(activity);
    actual_activity = activity;
    if (activity !== "messages") {
        if (actual_activity !== "camera") {
            body.scrollTo(0, 0);
        } else {
            body.scrollTo(body.scrollWidth / 2, body.scrollHeight / 2);
        }
    } else {
        _hide_notifications();
        body.scrollTo(0, body.scrollHeight);
    }
}

var i_glitch = 1;
function hack(activity) {
    display_date(true);
    phone.classList.add("hack");
    if (i_glitch == 1) {
        glitch_audio_1.play();
    }
    if (i_glitch == 2) {
        glitch_audio_2.play();
    }
    if (i_glitch == 3) {
        glitch_audio_3.play();
    }
    i_glitch++;
    if (i_glitch > 3) {
        i_glitch = 1;
    }
    setTimeout(() => {
        phone.classList.remove("hack");
        if (actual_activity !== "camera") {
            body.scrollTo(0, 0);
        }
        if (activity) {
            change_activity(activity);
        }
    }, 1000, activity);
    setTimeout(() => {
        display_date();

    }, 2000);

}

function run_dialog(dialog_id) {
    if (dialogs["dialog_" + dialog_id]) {
        var dialog = dialogs["dialog_" + dialog_id];
        if (dialog.image) {
            var image = dialog.image;
        } else {
            image = false;
        }
        if (dialog.choices) {
            var choices = dialog.choices;
        } else {
            choices = false;
        }
        if (dialog.dialog_id) {
            var dialog_id = dialog.dialog_id;
        } else {
            dialog_id = false;
        }
        if (dialog_id === "success") {
            successes++;
            run_dialog("success_" + successes);
        } else {
            _message(dialog.txt, "from", image, choices, dialog_id);
        }
    }
}
var first_choice_made = false;
function _message(txt, direction, image, choices, dialog_id_after) {
    if (direction === "from") {
        delay = 500;
    } else {
        delay = 10;
    }
    setTimeout(function () {

        let message = document.createElement("div");
        message.classList.add(direction);
        if (direction == "from") {

            if (actual_activity === "messages") {

                display_date(true);
                message.classList.add("typing");
                setTimeout(() => {
                    message_pop.play();
                    message.classList.remove("typing");
                    body.scrollTo(0, body.scrollHeight);
                    if (dialog_id_after) run_dialog(dialog_id_after);
                }, txt.length * 20)
                setTimeout(() => {
                    display_date();
                }, txt.length * 20 + 1000);
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
        } else {
            message_pop.play();
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
            waiting_for_response = true;
            for (i = 0; i < choices.length; i++) {
                let choice = document.createElement("button");
                choice.classList.add("message");
                choice.classList.add("choices");
                choice.innerHTML = choices[i].txt;
                choice._txt = choices[i].txt;
                choice._goto = choices[i].goto;
                choice.addEventListener("click", (e) => {
                    waiting_for_response = false;
                    var choices = document.getElementsByClassName('choices');
                    while (choices.length > 0) {
                        choices[0].remove();
                    }
                    _message(e.target._txt, "to", false, false, e.target._goto);
                    first_choice_made = true;
                })
                message.appendChild(choice);
            }
        }
        if (actual_activity !== "messages" && direction === "from") {
            _send_notification(txt);
        }

        messages.appendChild(message);
        if (actual_activity === "messages") {
            body.scrollTo(0, body.scrollHeight);
        }

        if (!(actual_activity === "messages" && direction === "from")) {
            if (dialog_id_after) run_dialog(dialog_id_after);
        }
    }, delay);
}

function _send_notification(txt) {
    notification_audio.play();
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
    actual_scene = scene_id;
    camera.classList.remove("scene_1");
    camera.classList.remove("scene_2");
    camera.classList.remove("scene_3");
    camera.classList.remove("scene_4");
    camera.classList.remove("scene_5");
    camera.classList.add("scene_" + scene_id);

}





// Container and displays
const container = document.querySelector("body");

stay_on_loc = 0;
// On mousemove
container.addEventListener("mousemove", (e) => {
    if (actual_activity === "camera") {
        xPercent = (e.pageX / window.innerWidth);
        yPercent = (e.pageY / window.innerHeight);

        delta_x = (xPercent - 0.5) * 50;
        delta_y = (yPercent - 0.4) * 50;

        body.scrollTo(body.scrollLeft + delta_x, body.scrollTop + delta_y);
    }
});
setInterval(() => {

    if (actual_activity === "camera" && !waiting_for_response) {

        dialog_id = location_found();
        if (dialog_id !== false) {
            stay_on_loc++;
            console.log(stay_on_loc);
            if (stay_on_loc > 10) {

                set_location_done(dialog_id)
                run_dialog(dialog_id);
                setTimeout(() => {
                    hack("messages");

                }, 1000);


            }
        } else {
            stay_on_loc = 0;
        }
    }
}, 100);
camera.addEventListener('click', (e) => {
    console.log((body.scrollLeft + body.getBoundingClientRect().width * 0.5) / body.scrollWidth, (body.scrollTop + body.getBoundingClientRect().height * 0.4) / body.scrollHeight);
})

function location_found() {

    x = (body.scrollLeft + body.getBoundingClientRect().width * 0.5) / body.scrollWidth;
    y = (body.scrollTop + body.getBoundingClientRect().height * 0.4) / body.scrollHeight;
    precision = 10;
    for (i = 0; i < triggers_locations["location_" + actual_scene].length; i++) {
        if (triggers_locations["location_" + actual_scene][i].done) {
            continue;
        }
        target_x = triggers_locations["location_" + actual_scene][i].x;
        target_y = triggers_locations["location_" + actual_scene][i].y;

        if (Math.round(x * precision) == Math.round(target_x * precision)
            && Math.round(y * precision) == Math.round(target_y * precision)) {
            cursor.classList.add("active");
            return triggers_locations["location_" + actual_scene][i].dialog_id;
        }
    }
    cursor.classList.remove("active");
    return false;

}
function set_location_done(dialog_id) {
    for (i = 0; i < triggers_locations["location_" + actual_scene].length; i++) {
        if (dialog_id === triggers_locations["location_" + actual_scene][i].dialog_id) {
            triggers_locations["location_" + actual_scene][i].done = true;
        }
    }
}
