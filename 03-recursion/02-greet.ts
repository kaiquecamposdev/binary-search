const greet2 = (name: string) => console.log(`how are you, ${name}?`);

const bye = () => console.log("ok bye!");

const greet = (name: string) => {
  console.log(`hello, ${name}!`);
  greet2(name);
  console.log("getting ready to say bye...");
  bye();
};

export const greetEx = () => greet("adit");