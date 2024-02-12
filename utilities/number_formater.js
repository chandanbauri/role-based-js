function number_formater(num) {
  if (typeof num !== "number") {
    throw new Error("Provided value is not of type Number");
  }

  return Intl.NumberFormat(num, {});
}
