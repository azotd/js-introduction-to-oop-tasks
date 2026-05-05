// BEGIN
export default function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function() {
  return this.value;
};

Money.prototype.getCurrency = function() {
  return this.currency;
};

Money.prototype.exchangeTo = function(currency) {
  if (this.currency === currency) {
    return new Money(this.value, currency);
  }
  
  if (this.currency === 'usd' && currency === 'eur') {
    return new Money(this.value * 0.7, currency);
  }
  
  if (this.currency === 'eur' && currency === 'usd') {
    return new Money(this.value * 1.2, currency);
  }
  
  return new Money(this.value, currency);
};

Money.prototype.add = function(money) {
  let otherValue = money.getValue();
  const otherCurrency = money.getCurrency();
  
  if (this.currency !== otherCurrency) {
    const exchanged = money.exchangeTo(this.currency);
    otherValue = exchanged.getValue();
  }
  
  return new Money(this.value + otherValue, this.currency);
};

Money.prototype.format = function() {
  const currencySymbol = {
    usd: 'USD',
    eur: 'EUR'
  };
  
  return this.value.toLocaleString(undefined, {
    style: 'currency',
    currency: currencySymbol[this.currency]
  });
};
// END
