import { createContext, useContext, useReducer, useCallback } from 'react';

// — Types
export interface ModalState {
  isOpen: boolean;
  sceneId: string;
}

type ModalAction =
  | { type: 'OPEN'; sceneId: string }
  | { type: 'CLOSE' };

export interface ModalContextValue extends ModalState {
  openModal: (sceneId: string) => void;
  closeModal: () => void;
}

// — Reducer
function modalReducer(state: ModalState, action: ModalAction): ModalState {
  if (action.type === 'OPEN') {
    return { isOpen: true, sceneId: action.sceneId };
  }
  // action.type === 'CLOSE'
  return { isOpen: false, sceneId: '' };
}

// — Context
const initialState: ModalState = { isOpen: false, sceneId: '' };

export const ModalContext = createContext<ModalContextValue>({
  ...initialState,
  openModal: () => undefined,
  closeModal: () => undefined,
});

// — Hook used at the provider root (App.tsx)
export function useModalReducer(): ModalContextValue {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const openModal = useCallback((sceneId: string): void => {
    dispatch({ type: 'OPEN', sceneId });
  }, []);

  const closeModal = useCallback((): void => {
    dispatch({ type: 'CLOSE' });
  }, []);

  return { ...state, openModal, closeModal };
}

// — Hook used by consumers (any component)
export function useModalStore(): ModalContextValue {
  return useContext(ModalContext);
}
