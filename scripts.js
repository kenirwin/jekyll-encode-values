$(document).ready(() => {
  $('#encrypt-submit').click(() => {
    let raw_in = $('#encrypt-input').val();
    // alert(raw_in);
    let salt = $('#salt').val();
    let output = JSON.stringify(
      encryptValues(JSON.parse(raw_in, salt)),
      null,
      2
    );
    $('#encrypted-output').html('<pre>' + output + '</pre>');
  });
});

function encryptValues(obj, salt = 'VerySekritDecoderRing') {
  if (typeof obj === 'object') {
    // iterating over the object using for..in
    for (var keys in obj) {
      //checking if the current value is an object itself
      if (typeof obj[keys] === 'object') {
        // if so then again calling the same function
        encryptValues(obj[keys]);
      } else {
        // else getting the value and transforming
        let initialString = obj[keys];
        // obj[keys] = initialString.toUpperCase();
        obj[keys] = CryptoJS.AES.encrypt(initialString, salt).toString();
        // console.log(temp)
        // obj[keys] = CryptoJS.AES.encrypt(initialString, salt);
      }
    }
  }
  return obj;
}
