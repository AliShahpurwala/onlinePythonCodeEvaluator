# onlinePythonCodeEvaluator
This simple HTML index page allows users to evaluate code in the browser. The app sends the code through an AWS API Gateway to a Lambda Function which evaluates the code.

### AWS API Gateway
I've created a REST API with the help of AWS that serves as a gateway to another Lambda Function that I've created also with the help of AWS. The code that the user writes in the browser is sent as a POST request to the API. The API responds with a JSon with the results of the evaluation of that piece of code.

### Code Mirror
I've used Code Mirror in this application which is an amazing resource that allows you to create a very appealing text editor within the browser itself. It allows for syntax highligting for many languages, auto-indentation, line numbers and more. It also has a specialized VIM mode which does it's best to emulate VIM in the browser.

### Notice
This project is currently not online. I came to the realization that it's not a good idea to allow strangers on the internet to execute code on your server. The AWS API Gateway endpoint has also been removed from the code in order to prevent abuse.
