const Students = {
  name: 'Dinanath',
  age: 35,
  rank: 5,
  country: 'India',
}

const Address = {
  street: 'Sir DJ Road',
  city: 'Mumbai',
  pinCode: 401209,
  state: 'MH',
  country: 'India',
}

/*
  Write a function showObjectDetails(obj) that shows the
  details of the object passed as a parameter.
 */
function showObjectDetails(obj) {
  // Write code here
  for (const key in obj) {
    if (Object.hasOwnProperty.call(object, key)) {
      console.log(`${key},${obj[key]}`)
      
    }
    console.log()
  }
}

// Expected output:
showObjectDetails(Students);
showObjectDetails(Address);
