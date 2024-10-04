// types/react-modal.d.ts

declare module 'react-modal' {
    import * as React from 'react';
  
    export interface ModalProps {
      isOpen: boolean;
      onRequestClose: () => void;
      ariaHideApp?: boolean;
      children?: React.ReactNode;  // Add the children prop
      style?: {
        overlay?: React.CSSProperties;  // Optional styles for the overlay
        content?: React.CSSProperties;  // Optional styles for the modal content
      };
      // Add any other props you need here
    }
  
    export default class Modal extends React.Component<ModalProps> {}
  }
  