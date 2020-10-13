$(document).ready(() => {
  $('#encrypt-submit').click(() => {
    let raw_in = $('#encrypt-input').val();
    // alert(raw_in);
    // let salt = $('#salt').val();
    let output = JSON.stringify(encryptValues(JSON.parse(raw_in)), null, 2);
    $('#encrypted-output').html('<pre>' + output + '</pre>');
  });

  $('#decrypt-submit').click(() => {
    console.log('TRY DECRYPT');
    let raw_in = $('#encrypt-input').val();
    // alert(raw_in);
    // let salt = $('#salt').val();
    let output = JSON.stringify(
      encryptValues(JSON.parse(raw_in), 'decrypt'),
      null,
      2
    );
    $('#encrypted-output').html('<pre>' + output + '</pre>');
  });
});

function encryptValues(obj, action = 'encrypt') {
  console.log('called with: ', action);
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
        // obj[keys] = initialString.toUpperCase();
        if (action == 'encrypt') {
          console.log('try to encrypt', obj[keys]);
          obj[keys] = btoa(obj[keys]);

          //obj[keys] = CryptoJS.AES.encrypt(initialString, salt).toString();
        } else {
          console.log('try to decrypt', obj[keys]);
          obj[keys] = atob(obj[keys]);
        }
        console.log(obj[keys]);
        //   obj[keys] = CryptoJS.AES.decrypt(initialString, salt).toString();
        // }
        // console.log(temp)
        // obj[keys] = CryptoJS.AES.encrypt(initialString, salt);
      }
    }
  }
  return obj;
}
