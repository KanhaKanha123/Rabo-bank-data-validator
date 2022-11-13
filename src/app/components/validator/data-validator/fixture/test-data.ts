export const testData = [{
    "reference": "156109",
    "accountNumber": "NL69ABNA0433647324",
    "description": "Flowers from Erik de Vries",
    "startBalance": "13.92",
    "mutation": "-7.25",
    "endBalance": "6.67"
},
{
    "reference": "156109",
    "accountNumber": "NL69ABNA0433647324",
    "description": "Flowers from Erik de Vries",
    "startBalance": "13.92",
    "mutation": "-7.25",
    "endBalance": "16.67"
},
{
    "reference": "1561081",
    "accountNumber": "NL69ABNA0433647324",
    "description": "Flowers from Erik de Vries",
    "startBalance": "13.92",
    "mutation": "-7.25",
    "endBalance": "6.67"
}];

export const expectedDuplicateData = [
    {
        "reference": "156109",
        "items": [{
            "reference": "156109",
            "description": "Flowers from Erik de Vries"
        },
        {
            "reference": "156109",
            "description": "Flowers from Erik de Vries"
        }
        ]
    }
];

export const expectedInvalidEndAmountData = [
    {
        "reference": "156109",
        "description": "Flowers from Erik de Vries"
    }
];