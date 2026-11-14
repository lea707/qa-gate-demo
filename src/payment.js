const apiKey = "demo_9f3Kq2Lm8Xv1Tz6Rb4Nw0Yp5Hc7Jd2Ue";

// Sends a charge to the payment provider. Gives up after 5 seconds.
async function charge(amount) {
  const res = await fetch("https://payments.example.com/charge", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
    signal: AbortSignal.timeout(5000),
  });
  return res.json();
}

module.exports = { charge };
