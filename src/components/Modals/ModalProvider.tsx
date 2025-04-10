"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

interface ModalContextType {
  openSignInModal: () => void;
  closeSignInModal: () => void;
  openSignUpModal: () => void;
  closeSignUpModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignInModal = () => {
    setIsSignUpModalOpen(false); // Close sign up modal if open
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignInModalOpen(false); // Close sign in modal if open
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openSignInModal,
        closeSignInModal,
        openSignUpModal,
        closeSignUpModal,
      }}
    >
      {children}
      <SignInModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
      <SignUpModal isOpen={isSignUpModalOpen} onClose={closeSignUpModal} openSignInModal={openSignInModal} />
    </ModalContext.Provider>
  );
};

export default ModalProvider; 