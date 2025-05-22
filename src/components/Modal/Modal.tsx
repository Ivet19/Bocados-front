import Button from "../Button/Button";
import "./Modal.css";

interface ModalProps {
  isSuccess: boolean;
  text: string;
  action: () => void;
}

const Modal: React.FC<ModalProps> = ({ isSuccess, text, action }) => {
  const modalTextModifier = isSuccess
    ? " modal-text--success"
    : " modal-text--error";

  const modalTextIcon = isSuccess ? "✅" : "⚠️";

  return (
    <dialog open className="modal">
      <Button
        classModifierName="modal-background"
        action={action}
        aria-label="cerrar ventana"
      >
        <div className={"modal-message-container"}>
          <Button
            aria-label="cerrar mensaje"
            classModifierName="modal"
            action={action}
          >
            <img
              className="cross-icon"
              src="/icons/Close-icon.svg"
              alt="cross icon"
            />
          </Button>
          <span className={`modal-text ${modalTextModifier}`}>{text}</span>
          <span>{modalTextIcon}</span>
        </div>
      </Button>
    </dialog>
  );
};

export default Modal;
