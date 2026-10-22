const RAW_BACKEND_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://bus-ticket-backend-dun.vercel.app";
const BACKEND_URL = RAW_BACKEND_URL.replace(/\/+$/, "");

/**
 * Universal fetch helper with fallback between relative path and direct backend URL
 */
async function fetchWithFallback(endpoint, options = {}) {
  const urlsToTry =
    typeof window !== "undefined"
      ? [`${endpoint}`, `${BACKEND_URL}${endpoint}`]
      : [`${BACKEND_URL}${endpoint}`, `${endpoint}`];

  let lastError = null;

  for (let i = 0; i < urlsToTry.length; i++) {
    const url = urlsToTry[i];
    try {
      const res = await fetch(url, options);
      // If the first URL failed with 404 or a 5xx gateway error, try the fallback URL
      if (!res.ok && (res.status === 404 || res.status >= 500) && i < urlsToTry.length - 1) {
        continue;
      }
      return res;
    } catch (err) {
      lastError = err;
    }
  }

  const isNetworkFailure =
    lastError &&
    (lastError.name === "TypeError" ||
      lastError.message?.toLowerCase().includes("failed to fetch") ||
      lastError.message?.toLowerCase().includes("networkerror"));

  if (isNetworkFailure) {
    throw new Error(
      `Backend server is offline or unreachable at ${BACKEND_URL}.`
    );
  }

  throw lastError || new Error("Network request failed");
}

/**
 * Fetch bus information, schedule, and availability from MongoDB
 */
export async function getBusInfo() {
  try {
    const res = await fetchWithFallback("/api/bus", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn("Could not load bus info from backend:", err.message);
    return null;
  }
}

/**
 * Fetch list of already booked seats from MongoDB
 */
export async function getBookedSeats() {
  try {
    const res = await fetchWithFallback("/api/bookings/booked-seats", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.bookedSeats || [];
  } catch (err) {
    console.warn("Could not load booked seats:", err.message);
    return [];
  }
}

/**
 * Fetch active coupons from MongoDB
 */
export async function getCoupons() {
  try {
    const res = await fetchWithFallback("/api/coupons", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.coupons || [];
  } catch (err) {
    console.warn("Could not load coupons from backend:", err.message);
    return [];
  }
}

/**
 * Validate and apply a coupon via backend
 */
export async function applyCouponApi(code, totalPrice) {
  const res = await fetchWithFallback("/api/coupons/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code, totalPrice }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.message || "Failed to apply coupon");
  }
  return data;
}

/**
 * Create a new bus booking in MongoDB
 */
export async function createBookingApi(bookingData) {
  const res = await fetchWithFallback("/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.message || "Failed to complete booking");
  }
  return data;
}

/**
 * Reset all bookings for resale
 */
export async function resetBookingsApi() {
  try {
    const res = await fetchWithFallback("/api/bookings/reset", {
      method: "POST",
    });
    return await res.json();
  } catch (err) {
    console.warn("Reset bookings error:", err.message);
    return null;
  }
}
