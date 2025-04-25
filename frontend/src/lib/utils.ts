import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUserImageUrl(name: string) {
  return new URL(`../assets/user-images/${name}.jpg`, import.meta.url).href;
}
