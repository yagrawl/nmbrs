const nmbrs = (num, params) => {
  if (isNaN(num)) {
    return '0';
  }

  const num_units = ['', 'K', 'M', 'B', 't', 'q', 'Q', 's', 'S', 'o', 'n', 'd',
                     'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'n', 'v'];
  const weight = 1000;
  const sign = (num >= 0) ? '' : '-';

  let exponent = 0;
  let num_abs = Math.abs(num);
  let num_decimal_formatted;

  while(num_abs >= weight) {
    num_abs /= weight;
    exponent += 1;
  }

  let suffix = (exponent >= num_units.length) ? `E${exponent * 3}` : num_units[exponent];
  let num_rounded = Math.round( num_abs * 10 ) / 10;
  let num_formatted = sign + num_rounded + suffix;
  return num_formatted;
}

module.exports = nmbrs;
