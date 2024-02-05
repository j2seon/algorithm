import { Deck } from "./Deck.mjs";

let deck = new Deck();

deck.addFirst(1);
deck.addFirst(2);
deck.addFirst(3);
deck.addFirst(4);

deck.printAll();

deck.addLast(8);
deck.printAll();

deck.removeFirst();
deck.removeLast();
deck.printAll();