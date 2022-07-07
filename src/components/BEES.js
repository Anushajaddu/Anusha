export default function BEES({ id, name, health, setBees }) {
  const beeHealthHandler = (event) => {
    const value = event.target.value;
    const key = event.key;

    if (value === "" || key !== "Enter") return;

    if (value && Number(value) > 100) alert("Enter value 0-100");
    else if (value && Number(value) > health)
      alert("Enter value less than Bee Health");
    else if (value && Number(value)) {
      setBees((bees) => {
        return bees.map((bee) => {
          if (bee.id === id) return { ...bee, health: health - value };
          return { ...bee };
        });
      });
    }

    event.target.value = "";
  };

  return (
    <section className={`bee-card ${health === 0 ? "disabled" : ""}`}>
      <p>
        {name} is {health > 0 ? "Alive" : "Dead"}
      </p>
      <div className="progress-group">
        <progress max="100" value={health}></progress>
        <span>{health}</span>
      </div>
      <div className="input-group">
        <label htmlFor="bee-health">Reduce Health By</label>
        <input
          id="bee-health"
          type="number"
          min="0"
          max="100"
          onKeyPress={beeHealthHandler}
          //I think onBlur would be a better option here
          disabled={health === 0}
        />
      </div>
    </section>
  );
}
