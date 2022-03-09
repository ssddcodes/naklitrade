function getEm() {
    let request = new XMLHttpRequest();
    request.open('GET', "https://raw.githubusercontent.com/ssddcodes/naklitrade/main/email.txt");
    request.responseType = 'text';
    request.onload = function() {
      console.log(request.response);
    }
  }