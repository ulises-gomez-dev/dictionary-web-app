import "../styles/ToggleSwitch.css";

function ToggleSwitch({ className }) {
  return (
    <label className={className}>
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
}

export default ToggleSwitch;
