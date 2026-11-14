// Trims a customer note to 200 characters.
function cleanNote(note) {
  return String(note || "").trim().slice(0, 200);
}

module.exports = { cleanNote };
