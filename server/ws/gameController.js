/* eslint-disable no-restricted-syntax */
function sendBtn(rooms, room) {
  for (const [key, value] of Object.entries(rooms)) {
    if (key === room) {
      value.forEach((el) => {
        el.send(JSON.stringify({ type: 'activChangeBtn', params: { } }));
      });
    }
  }
}

module.exports = sendBtn;
