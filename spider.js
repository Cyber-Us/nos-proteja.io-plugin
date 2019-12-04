$(document).ready(function() {
  let url = $("#domain").text();
  // url = url
  //   .toString()
  //   .replace("https://", " ")
  //   .replace("/", " ");
  // searchCNPJ(url);
  // function searchCNPJ(url) {
  //   $.ajax({
  //     url: `https://registro.br/v2/ajax/whois/?qr=${url}&recaptchaResponse=`,
  //     success: function(result) {
  //       document.querySelector("#owner").innerHTML = result.Domain.Owner;
  //       document.querySelector("#cnpj").innerHTML = result.Domain.OwnerID;
  //     }
  //   });
  // }

  const status = {
    'negative': {
      message: 'Suspeito!',
      suggestedSites: []
    },
    'positive': {
      message: 'Confiável!'
    }
  }

  let urlCondition = ''

  if (url.includes('vigarani-pneumatica')) {
    urlCondition = 'negative'

    status[urlCondition].suggestedSites = [
      {
        link: 'https://www.dpaschoal.com.br/',
        title: 'Dpaschoal'
      },
      {
        link: 'https://lojasegura.zepneus.com.br/',
        title: 'Zé Pneus'
      }          
    ]
  }

  if (!url.includes('https://vigarani-pneumatica.lojaintegrada.com.br')) {
    urlCondition = 'positive'
  }

  $('.status').text(status[urlCondition].message)

  document.getElementById('principal').classList = ''
  document.getElementById('principal').classList.add(urlCondition)

  if (urlCondition === 'negative') {
    const audio = new Audio('bark.mp3')

    audio.play()
  }
});
