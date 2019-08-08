const nmbrs = (num, params) => {
  const num_units = ['', 'K', 'M', 'B', 'T'];
  const weight = 1000;
  const sign = (num >= 0) ? '' : '-';

  let exponent = 0;
  let num_abs = Math.abs(num);
  let num_decimal_formatted;

  while(num_abs > weight) {
    num_abs /= weight;
    exponent += 1;
  }

  num_abs = num_abs.toString();
  let decimal_index = num_abs.indexOf('.');

  if(decimal_index !== -1) {
    num_decimal_formatted = num_abs.slice(0, decimal_index + 2);
  } else {
    num_decimal_formatted = num_abs;
  }

  let num_formatted = sign + num_decimal_formatted + num_units[exponent];
  return num_formatted;
}

module.exports = nmbrs;
