import { useState, useEffect, useCallback, RefObject } from 'react';

export function usePopup(ref: RefObject<HTMLElement>) {
  const [isOpen, setIsOpen] = useState(false);

  const outSideClickHandler = useCallback((e: MouseEvent) => {
    if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }, [ref, isOpen]);

  useEffect(() => {
    if (!ref || !ref.current) return;
    if (isOpen) {
      window.addEventListener('click', outSideClickHandler);
    } else {
      window.removeEventListener('click', outSideClickHandler);
    }
  }, [ref, outSideClickHandler, isOpen]);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return {
    isOpen,
    openDropdown,
    closeDropdown,
    toggleDropdown,
  };
}
