export const testData = '\n156108,NL69ABNA0433647324,Flowers from Erik de Vries,13.92,-7.25,6.67';

export const expectedData = [
    {
        "accountNumber":"NL69ABNA0433647324",
        "description": "Flowers from Erik de Vries",
        "endBalance": "6.67",
        "mutation": "-7.25",
        "reference": "156108",
        "startBalance": "13.92"
      }
];