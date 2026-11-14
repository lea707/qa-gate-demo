// Returns the list of failed rules (empty = strong enough).
function checkPassword(password) {
  const errors = [];
  const pw = String(password || "");
  if (pw.length < 8) errors.push("too_short");
  if (!/[0-9]/.test(pw)) errors.push("needs_number");
  return errors;
}

module.exports = { checkPassword };
