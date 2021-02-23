
    const table = document.querySelector('table');
    var requestURL = 'https://raw.githubusercontent.com/webmae/whois/master/assets/content.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();


request.onload = function() {
  var certifications = request.response;
  showSkills(certifications);
}
//
function showSkills(jsonObj) {
  var certif = jsonObj['certifications'];

  for (var i = 0; i < certif.length; i++) {
    var myTr = document.createElement('tr');
    var myTdDelivery = document.createElement('td');
    var myTdSerial = document.createElement('td');
    var myTdName = document.createElement('td');
    var myTdDate = document.createElement('td');
    var myTdcategory = document.createElement('td');
    var myURL = document.createElement('a');
    

    myTdDelivery.textContent = certif[i].Delivery;
    myTdSerial.textContent = certif[i].Serial;
    myTdName.textContent = certif[i].Name;
    myTdDate.textContent = certif[i].Date;
    myTdcategory.textContent = certif[i].category;
    //myURL.textContent = certif[i].Url;
    //myURL = document.querySelector("a");
    myURL.setAttribute("href", certif[i].Url);

    myTr.appendChild(myTdDelivery);
    myTr.appendChild(myTdcategory);
    myTr.appendChild(myURL);
    myTr.appendChild(myTdDate);
    myTr.appendChild(myTdSerial);

    table.appendChild(myTr);
    myURL.appendChild(myTdName);
   
   

  }
}

