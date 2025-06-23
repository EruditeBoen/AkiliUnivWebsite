import { X } from "lucide-react";

export const LightboxModal = ({ open, onClose, content }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-primary"
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <div className="max-w-4xl w-full px-4">
        {content.type === "image" ? (
          <img src={content.src} alt="" className="w-full h-auto rounded-lg" />
        ) : (
          <video
            src={content.src}
            controls
            autoPlay
            className="w-full h-auto rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

