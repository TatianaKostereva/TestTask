const changeQuantity = (event) => {
  const el = event.currentTarget;
  const stepper = el.closest("div");
  const input = stepper.querySelector("input")
  let count = parseInt(input.value);

  if (el.classList.contains('up')) {
    count++;
    input.value = count;
  } else if (el.classList.contains('down') && input.value > 0) {
    count--;
    input.value = count;
  } else {
    return 0;
  }
};

export default changeQuantity;