$.ajax({
    url: ' https://randomuser.me/api/ ',
    dataType: ' json ',
    sucesso: função( dados ) {
      console.log( dados );
    }
  });