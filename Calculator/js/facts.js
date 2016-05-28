(function () {

  var httpRequest = new XMLHttpRequest();
  var storage = localStorage;
  var button = document.querySelector(".eval");
  button.addEventListener("click", checkLocalStorage);

    function checkLocalStorage() {
      var theCalculationResult = document.querySelector(".screen");

      if (storage.getItem(theCalculationResult.innerHTML)) {
        var result = storage.getItem(theCalculationResult.innerHTML);
        insertResult(result);
      }else{
        var url = 'http://numbersapi.com/' + theCalculationResult.innerHTML;
        httpRequest.open('GET', url);
        httpRequest.onreadystatechange = function (e) {
          if (httpRequest.readyState === 4 && httpRequest.status === 200){
				        storage.setItem(theCalculationResult.innerHTML, httpRequest.responseText);
				            insertResult(httpRequest.responseText);
          }
        };
        httpRequest.send(null);
      }
    }

    function insertResult(result) {
    var resultField = document.querySelector("#fact");
        resultField.innerHTML = result;
    }
})();
