const CODES = { SAVE10: 0.1 };

// Returns the total after the discount for this code, rounded to 2 decimals.
function applyDiscount(total, code) {
  const rate = CODES[String(code || "").trim().toUpperCase()] || 0;
  return Math.round(total * (1 - rate) * 100) / 100;
}

module.exports = { applyDiscount };
