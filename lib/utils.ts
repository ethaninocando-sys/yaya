import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names, de-duplicating conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Instagram profile used by every booking / contact call-to-action. */
export const INSTAGRAM_URL = "https://www.instagram.com/yayas.jewels/";
export const INSTAGRAM_HANDLE = "@yayas.jewels";
