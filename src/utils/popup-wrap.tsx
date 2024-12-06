import React, { useRef, useEffect } from "react";

interface PopupWrapperProps {
  onClose: () => void;
  children: React.ReactNode;
}

const PopupWrapper: React.FC<PopupWrapperProps> = ({ onClose, children }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={popupRef} className="bg-white p-6 rounded-lg shadow-lg">
      {children}
    </div>
  );
};

export default PopupWrapper;
