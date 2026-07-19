import "./ConfirmModal.css";

export default function ConfirmModal({
  title,
  text,
  onCancel,
  onConfirm,
}) {
  return (
    <div className="confirm-overlay">
      <div className="confirm-modal">

        <h2>{title}</h2>

        <p>{text}</p>

        <div className="confirm-buttons">

          <button
            className="cancel-delete"
            onClick={onCancel}
          >
            Скасувати
          </button>

          <button
            className="confirm-delete"
            onClick={onConfirm}
          >
            Видалити
          </button>

        </div>

      </div>
    </div>
  );
}