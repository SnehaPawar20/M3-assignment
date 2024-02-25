let code = prompt("Enter your language code from 'es', 'de', 'en', 'fr' :");

if (code == "es") {
  console.log("Hello World translated in Spanish is: Hola Mundo");
} else if (code == "de") {
  console.log("Hello World translated in German is: Hallo Welt");
} else if (code == "en") {
  console.log("Hello World translated in English is: Hello World");
} else if (code == "fr") {
  console.log("Hello World translated in French is: Bonjour le monde");
} else {
  console.log("Hello World");
}
