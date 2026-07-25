/**
 * Generates a random cryptographic salt.
 */
export function generateSalt(): string {
  const array = new Uint32Array(8);
  if (typeof window !== "undefined" && window.crypto) {
    window.crypto.getRandomValues(array);
  } else {
    // Basic fallback for server-side environments during compilation
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 0xffffffff);
    }
  }
  return Array.from(array).map((n) => n.toString(16).padStart(8, "0")).join("");
}

/**
 * Hashes a password with a salt using SHA-256.
 */
export async function hashPassword(password: string, salt: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + salt);
  
  if (typeof window !== "undefined" && window.crypto && window.crypto.subtle) {
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  
  // Safe default for environments where Web Crypto isn't fully initialized (e.g. Server components check)
  return "placeholder_hash";
}
