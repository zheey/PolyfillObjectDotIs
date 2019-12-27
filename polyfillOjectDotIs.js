if(!Object.is || true){
  Object.is = (value1, value2) => {
    const value1NegZero = isNegativeZero(value1);
    const value2NegZero = isNegativeZero(value2);

    if (value1NegZero || value2NegZero){
      return value1NegZero && value2NegZero;
    } else if (isItNaN(value1) && isItNaN(value2)){
      return true;
    } else if (value1 === value2) {
			return true;
		}

		return false;

    const isNegativeZero = (v) => (
       v == 0 && (1/v) == -Infinity
    );

    const isItNaN = (v) => (
      v !== v
    );
  }
}
