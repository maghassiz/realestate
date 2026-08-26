export default function Label({ text, light = false }) {
  return (
    <div className="label">
      <svg className="label__icon" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <circle cx="5" cy="5" r="4" stroke={light ? '#fcf7ec' : '#212325'} />
      </svg>
      <span className={`label__text${light ? ' label__text--light' : ''}`}>{text}</span>
    </div>
  );
}
