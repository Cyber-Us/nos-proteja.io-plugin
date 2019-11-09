$(document).ready(function() {
  let url = $("#domain").text();
  url = url
    .toString()
    .replace("https://", " ")
    .replace("/", " ");
  searchCNPJ(url);
  function searchCNPJ(url) {
    $.ajax({
      url: `https://registro.br/v2/ajax/whois/?qr=${url}&recaptchaResponse=`,
      success: function(result) {
        document.querySelector("#owner").innerHTML = result.Domain.Owner;
        document.querySelector("#cnpj").innerHTML = result.Domain.OwnerID;
      }
    });
  }
});
