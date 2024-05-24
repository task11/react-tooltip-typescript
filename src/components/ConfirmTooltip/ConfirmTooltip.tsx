import "./ConfirmTooltip.css";

export default function ConfirmTooltip() {
  return (
    <div className="comfirm-wrapper">
      <div className="confirm-title">
        <span className="title-icon">
          <svg viewBox="64 64 896 896" focusable="false">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
          </svg>
        </span>
        <div className="title-message">Are you sure to delete this task?</div>
      </div>
      <div className="confirm-buttons">
        <button type="button" className="confirm-button">
          <span>Yes</span>
        </button>
      </div>
    </div>
  );
}
