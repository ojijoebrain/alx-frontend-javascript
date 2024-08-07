export default function divideFunction(numerator, denominator) {
  const checkDenominator = (denom) => {
    if (denom === 0) {
      throw new Error('cannot divide by 0');
    }
    return denom;
  };

  return numerator / checkDenominator(denominator);
}
