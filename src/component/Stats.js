export function Stats({ items }) {
  //early return if no items
  if (!items.length)
    return (
      <p className="stats">
        <em>Start packing list to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ! Reaady to go ✈"
          : `👜You have ${numItems} items in your list ,and you alredy packed ${" "}
        ${numPacked} (${percentage} %)`}
      </em>
    </footer>
  );
}
