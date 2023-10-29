import * as math from 'mathjs';

export function calculate(input) {
  try {
   const result = math.evaluate(input);
    return parseFloat(result.toFixed(4)).toString();
  } catch (error) {
    return 'Error';
  }
}
