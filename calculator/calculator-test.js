
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100000,
    years: 10,
    rate: 3.4
  };
  expect(calculateMonthlyPayment(values)).toEqual('984.18');
  
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 20000,
    years: 15,
    rate: 6.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('170.94');
});


