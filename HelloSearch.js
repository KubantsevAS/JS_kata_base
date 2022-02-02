function validateHello(greetings) {
  greetings = greetings.toLowerCase();
  console.log(greetings);
  if (greetings.includes("ahoj") == true || greetings.includes("hello") == true || 
greetings.includes("salut") == true || greetings.includes("hallo") == true || 
greetings.includes("hola") == true || greetings.includes("czes") == true ||
greetings.includes("ciao") == true){
    var res = true;
  }
  else {
    res = false;
  }
  return res