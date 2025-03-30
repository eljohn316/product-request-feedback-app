import { useSyncExternalStore } from 'react';

const mediaQuery = '(width < 48rem)';

function getSnapShot() {
  return window.matchMedia(mediaQuery).matches;
}

function subscribe(callback: () => void) {
  const mql = window.matchMedia(mediaQuery);
  mql.addEventListener('change', callback);
  return () => {
    mql.removeEventListener('change', callback);
  };
}

export function useIsMobile() {
  const isMobile = useSyncExternalStore(subscribe, getSnapShot);
  return isMobile;
}
