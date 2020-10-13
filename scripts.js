$(document).ready(() => {
  new ClipboardJS('#copy-output');

  $('#encrypt-submit').click(() => {
    let raw_in = $('#encrypt-input').val();
    // alert(raw_in);
    // let salt = $('#salt').val();
    let result = encryptValues(JSON.parse(raw_in));
    result.obfuscated = true;
    let output = JSON.stringify(result, null, 2);
    $('#encrypted-output').html(output);
  });

  $('#decrypt-submit').click(() => {
    let raw_in = $('#encrypt-input').val();
    let result = encryptValues(JSON.parse(raw_in), 'decrypt');
    result.obfuscated = false;
    let output = JSON.stringify(result, null, 2);
    $('#encrypted-output').html(output);
  });
});

function encryptValues(obj, action = 'encrypt') {
  if (typeof obj === 'object') {
    // iterating over the object using for..in
    for (var keys in obj) {
      //checking if the current value is an object itself
      if (typeof obj[keys] === 'object') {
        // if so then again calling the same function
        encryptValues(obj[keys], action);
      } else {
        // else getting the value and transforming
        let initialString = obj[keys];
        if (action == 'encrypt') {
          obj[keys] = btoa(obj[keys]);
          //obj[keys] = CryptoJS.AES.encrypt(initialString, salt).toString();
        } else {
          obj[keys] = atob(obj[keys]);
          //   obj[keys] = CryptoJS.AES.decrypt(initialString, salt).toString();
        }
      }
    }
  }
  return obj;
}
