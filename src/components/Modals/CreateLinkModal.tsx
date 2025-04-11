"use client";

import { useState, useEffect } from "react";
import "./modalAnimations.css";

interface CreateLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (linkData: {
    originalUrl: string;
    customSlug?: string;
    title?: string;
    expiresAt?: Date | null;
  }) => void;
}

const CreateLinkModal = ({ isOpen, onClose, onSubmit }: CreateLinkModalProps) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [title, setTitle] = useState("");
  const [useExpiration, setUseExpiration] = useState(false);
  const [expiresAt, setExpiresAt] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    originalUrl?: string;
    customSlug?: string;
  }>({});

  // Close on escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Clear errors when inputs change
  const handleOriginalUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOriginalUrl(e.target.value);
    if (errors.originalUrl) {
      setErrors(prev => ({ ...prev, originalUrl: undefined }));
    }
  };

  const handleCustomSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomSlug(e.target.value);
    if (errors.customSlug) {
      setErrors(prev => ({ ...prev, customSlug: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: {
      originalUrl?: string;
      customSlug?: string;
    } = {};
    
    if (!originalUrl.trim()) {
      newErrors.originalUrl = "URL is required";
    } else if (!isValidUrl(originalUrl)) {
      newErrors.originalUrl = "Please enter a valid URL";
    }
    
    if (customSlug && !/^[a-zA-Z0-9-_]+$/.test(customSlug)) {
      newErrors.customSlug = "Custom alias can only contain letters, numbers, hyphens, and underscores";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Submit the form data
    onSubmit({
      originalUrl,
      customSlug: customSlug || undefined,
      title: title || undefined,
      expiresAt: useExpiration && expiresAt ? new Date(expiresAt) : null,
    });
    
    // Reset form
    setOriginalUrl("");
    setCustomSlug("");
    setTitle("");
    setUseExpiration(false);
    setExpiresAt("");
    setIsSubmitting(false);
    
    // Close modal
    onClose();
  };

  const isValidUrl = (urlString: string): boolean => {
    try {
      new URL(urlString);
      return true;
    } catch (err) {
      return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm modal-backdrop-enter" onClick={onClose}>
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 z-50 transition-colors duration-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
          <h2 className="text-2xl font-bold">Create New Link</h2>
          <p className="mt-1 text-blue-100">Shorten and customize your URL</p>
        </div>

        {/* Form */}
        <form className="p-8 space-y-6" onSubmit={handleSubmit}>
          {/* Original URL */}
          <div className="space-y-1.5">
            <label htmlFor="originalUrl" className="block text-sm font-medium text-gray-700 mb-1">
              URL to shorten <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <input
                id="originalUrl"
                name="originalUrl"
                type="url"
                required
                value={originalUrl}
                onChange={handleOriginalUrlChange}
                className={`appearance-none block w-full pl-12 px-4 py-3 border text-gray-900 ${
                  errors.originalUrl ? 'border-red-500' : 'border-gray-200'
                } rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200`}
                placeholder="https://example.com/your-long-url"
              />
              {errors.originalUrl && (
                <p className="mt-1 text-sm text-red-600">{errors.originalUrl}</p>
              )}
            </div>
          </div>

          {/* Custom Slug (optional) */}
          <div className="space-y-1.5">
            <label htmlFor="customSlug" className="block text-sm font-medium text-gray-700 mb-1">
              Custom alias (optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <span className="text-gray-500 font-medium">linkfo.io/</span>
              </div>
              <input
                id="customSlug"
                name="customSlug"
                type="text"
                value={customSlug}
                onChange={handleCustomSlugChange}
                className={`appearance-none block w-full pl-[85px] px-4 py-3 border text-gray-900 ${
                  errors.customSlug ? 'border-red-500' : 'border-gray-200'
                } rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200`}
                placeholder="my-custom-link"
              />
              {errors.customSlug && (
                <p className="mt-1 text-sm text-red-600">{errors.customSlug}</p>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Leave empty for an automatically generated short link
            </p>
          </div>

          {/* Title (optional) */}
          <div className="space-y-1.5">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Link title (optional)
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              placeholder="Summer Campaign"
            />
            <p className="text-xs text-gray-500 mt-1">
              Add a title to help you identify this link
            </p>
          </div>

          {/* Expiration (optional) */}
          <div className="space-y-1.5">
            <div className="flex items-center">
              <input
                id="useExpiration"
                name="useExpiration"
                type="checkbox"
                checked={useExpiration}
                onChange={() => setUseExpiration(!useExpiration)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="useExpiration" className="ml-2 block text-sm font-medium text-gray-700">
                Set expiration date
              </label>
            </div>
            
            {useExpiration && (
              <div className="mt-3">
                <input
                  id="expiresAt"
                  name="expiresAt"
                  type="datetime-local"
                  value={expiresAt}
                  onChange={(e) => setExpiresAt(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : "Create Link"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateLinkModal; 