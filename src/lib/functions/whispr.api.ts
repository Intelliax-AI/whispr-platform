import { invoke } from "@tauri-apps/api/core";
import { safeLocalStorage } from "../storage";
import { STORAGE_KEYS } from "@/config";

// Helper function to check if Whispr API should be used
export async function shouldUseWhisprAPI(): Promise<boolean> {
  try {
    // Check if Whispr API is enabled in localStorage
    const whisprApiEnabled =
      safeLocalStorage.getItem(STORAGE_KEYS.WHISPR_API_ENABLED) === "true";
    if (!whisprApiEnabled) return false;

    // Check if license is available
    const hasLicense = await invoke<boolean>("check_license_status");
    return hasLicense;
  } catch (error) {
    console.warn("Failed to check Whispr API availability:", error);
    return false;
  }
}
