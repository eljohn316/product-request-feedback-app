import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUserImageUrl(img: string) {
  const url = `../assets/user-images${img}`;
  return new URL(url, import.meta.url).href;
}
