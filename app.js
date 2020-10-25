$(document).ready(function(){
	  	var codeEditorElement = document.getElementById("ed_code");
  		var editor = CodeMirror.fromTextArea(codeEditorElement, {
  		lineNumbers: true,
  		theme: "ambiance"
  	});
  	editor.setSize(650,400);

    var runButton = document.getElementById("run");
    runButton.addEventListener("click", function(e){
        console.log(editor.getValue());
        var startPointProvided = document.getElementById("startPointProvided").checked;
        var functionName = $("#codeStartPoint").val();
        submittedCode = editor.getValue();
        $.ajax({
          method: 'POST',
          url: '',
          dataType: 'json',
          contentType: 'application/json',
          data: JSON.stringify({
            'code': submittedCode,
            'startPointProvided': startPointProvided,
            'functionName':  functionName
          })
        })
        .done((res) => { 
          console.log(res);
          document.getElementById("results").textContent = res["result"];
        });
    }, false
    );

});