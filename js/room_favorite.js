// 部屋お気に入り
function addStarMarks() {
    var roomList = document.getElementById('room_list');
    var children = roomList.children;
    var storedRoomNames = JSON.parse(localStorage.getItem('starredRoomNames')) || [];

    for (var i = 0; i < children.length; i++) {
        var s2Element = children[i].querySelector('.s2');

        if (s2Element) {
            if (!s2Element.nextElementSibling || !s2Element.nextElementSibling.classList.contains('star-mark')) {
                var starElement = document.createElement('span');
                starElement.classList.add('star-mark');
                starElement.style.fontSize = '24px';
                starElement.style.cursor = 'pointer';
                starElement.style.transition = 'transform 0.2s';
                starElement.style.display = 'inline-block';
                starElement.style.marginLeft = '5px';

                var roomName = now_room_list[i].room_name;

                if (i !== 0 && storedRoomNames.includes(roomName)) {
                    starElement.innerHTML = '★';
                } else if (i !== 0) {
                    starElement.innerHTML = '☆';
                }

                starElement.addEventListener('mousedown', function(event) {
                    event.stopPropagation();
                    event.preventDefault();

                    var index = Array.from(roomList.children).indexOf(this.closest('li'));
                    var roomData = now_room_list[index];
                    var roomName = roomData.room_name;

                    if (this.innerHTML === '☆') {
                        this.innerHTML = '★';
                        var newRoomObject = {
                            "_id": roomData._id,
                            "room_name": roomData.room_name,
                            "category": roomData.category,
                            "count": 0,
                            "r_permition": roomData.r_permition,
                            "room_riddle": roomData.room_riddle,
                            "update_time": roomData.update_time,
                            "in_user": {}
                        };

                        storedRoomNames.push(roomName);
                        localStorage.setItem('starredRoomNames', JSON.stringify(storedRoomNames));
                        localStorage.setItem(roomName, JSON.stringify(newRoomObject));

                        now_room_list.splice(2, 0, newRoomObject);
                        show_room_list(now_room_list, "");
                        addStarMarks();
                    } else {
                        this.innerHTML = '☆';
                        var roomIndex = storedRoomNames.indexOf(roomName);
                        if (roomIndex > -1) {
                            storedRoomNames.splice(roomIndex, 1);
                        }
                        localStorage.setItem('starredRoomNames', JSON.stringify(storedRoomNames));
                        localStorage.removeItem(roomName);

                        now_room_list = now_room_list.filter(function(room) {
                            return room.room_name !== roomName;
                        });
                        show_room_list(now_room_list, "");
                        addStarMarks();
                    }
                });

                s2Element.parentNode.insertBefore(starElement, s2Element.nextSibling);
            }
        }
    }
}

function loadStarredRooms() {
    var storedRoomNames = JSON.parse(localStorage.getItem('starredRoomNames')) || [];
    var starredRooms = [];
    for (var roomName of storedRoomNames) {
        var roomData = JSON.parse(localStorage.getItem(roomName));
        if (roomData) {
            starredRooms.push(roomData);
        }
    }
    return starredRooms;
}

socket.on('got_room_list', function(res0) {
    var res = res0.res;
    var update_time = res0.update_time;

    var starredRooms = loadStarredRooms();

    if (starredRooms.length > 0) {
        res.splice(2, 0, ...starredRooms);
    }

    show_room_list(res, update_time);
    addStarMarks();
});

