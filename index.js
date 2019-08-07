const nmbrs = (num, params) => {
  const num_units = {'3': 'K', '6': 'M', '9': 'B', '12': 'T'};

  if(num >= 0 && num < 1000 || num < 0 && num > -1000) {
    return num.toString();
  }

  let exponent = 0;
  let decimal_num = Math.abs(num);
  let sign = (num >= 0) ? '' : '-';

  while(decimal_num >= 10) {
    decimal_num /= 10;
    exponent += 1;
  }

  decimal_num = sign + decimal_num.toString();
  num_unit = num_units[exponent.toString()];

  let prettified_num = decimal_num + num_unit;
  return prettified_num;
}

module.exports = nmbrs;
