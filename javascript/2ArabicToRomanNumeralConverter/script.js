/**
 * no value--"Please enter a valid number"
-1:"Please enter a number greater than or equal to 1"
>=4000: Please enter a number less than or equal to 3999
16-XVI(x-10, v-5, i-1)
649-DCXLIX
1023-MXXIII
3999-MMMCMXCIX
 */

/* method 1: keep an array of objects with property value and numeral, good
const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];
  */

  /* method 2: dictinary using a map,A JavaScript Map does maintain the insertion order of entries, 
  which makes it quite different from Java's HashMap.good
  const romanNumerals = new Map(
    [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]

    ]
  )
    */


  //method3: Dictionary Using an Object,
  /**when you define an object with numeric keys, those keys are automatically converted to strings. 
   * This is because object keys in JavaScript are always strings or symbols, even if you define them
   *  with numeric literals */
  const romanNumerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  }

function clickHandler() { 
  
    const numberInput = document.getElementById("number").value;
    const outputDiv = document.getElementById("output");
    const number = parseInt(numberInput, 10);

    if (!numberInput) {
        outputDiv.textContent = "Please enter a valid number";
    } else if (number < 1) {
        outputDiv.textContent = "Please enter a number greater than or equal to 1";
    }else if (number > 3999) {
        outputDiv.textContent = "Please enter a number less than or equal to 3999";
    } else {
        outputDiv.textContent = convertToRoman(number);
    }
};

/* method1: keep an array of objects with property of value and roman numerals
function convertToRoman(num) {
    let romanStr = "";
    for (const item of romanNumerals) {
      while (num >= item.value) {
        romanStr += item.numeral;
        num -= item.value;
      }
    }
    return romanStr;
  }
*/

/**method2: Dictionary Using a Map 
function convertToRoman(num) {
    let romanStr = "";
    for (const key of romanNumerals.keys()) {
        while (num >= key) {
            romanStr += romanNumerals.get(key);
            num -= key;
        }
    }
    return romanStr;
}
*/

//method 3:Dictionary Using an Object, not good
/**
 * sort properties of object by numerical value of keys in decreasing order,
 * don't forget to convert string key to int
 */

function convertToRoman(num) {
    let romanStr = "";
    
    // Convert the object to an array of entries and iterate over it
    for (const [value, numeral] of Object.entries(romanNumerals).sort((a, b) => b[0] - a[0])) {
      // Convert string keys to numbers for comparison
      const intValue = parseInt(value, 10);
      
      while (num >= intValue) {
        romanStr += numeral;
        num -= intValue;
      }
    }
  
    return romanStr;
  }



    
