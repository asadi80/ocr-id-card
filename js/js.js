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
		  var info=JSON.parse(response)
		  console.log(info);


		  $('#dob').append(info.data.dateOfBirth);
		  $('#doe').append(info.data.dateOfExpiry);
		  $('#doi').append(info.data.dateOfIssue);
		  $('#dn').append(info.data.documentNumber);
		  $('#gn').append(info.data.givenNames);
		  $('#n').append(info.data.name);
		  $('#s').append(info.data.sex);
		  $('#sn').append(info.data.surname);




	  });
  }