const ErrorIcon = () => (
  <svg
    className="checkmark error"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
  >
    <circle
      className="checkmark_circle_error"
      cx="26"
      cy="26"
      r="25"
      fill="none"
    />
    <path
      className="checkmark_check"
      strokeLinecap="round"
      fill="none"
      d="M16 16 36 36 M36 16 16 36"
    />
  </svg>
);

export default ErrorIcon;
