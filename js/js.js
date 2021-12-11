function encodeImgtoBase64(element) {
 
	var img = element.files[0];

	var reader = new FileReader();

	reader.onloadend = function() {

	  $("#convertImg").attr("href",reader.result);

	  $("#convertImg").text(reader.result);
	

	  $("#displayImg").attr("src", reader.result);
	}
	reader.readAsDataURL(img);
	const form = new FormData();
	  form.append("image",img);
	  
	  const settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://computervisionapis1.p.rapidapi.com/ocr/idcard",
		  "method": "POST",
		  "headers": {
			  "x-rapidapi-host": "computervisionapis1.p.rapidapi.com",
			  "x-rapidapi-key": "79bc5e5863msh3ef58438b7034ddp1e35ddjsn2401862fc36a"
		  },
		  "processData": false,
		  "contentType": false,
		  "mimeType": "multipart/form-data",
		  "data": form
	  };
	  
	  $.ajax(settings).done(function (response) {
		  console.log(response);


		  $('#dob').append(response.data.dateOfBirth);




	  });
  }