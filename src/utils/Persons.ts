import { getRndInRange } from "./Random";

const maleNames = [
  "Liam",
  "Noah",
  "William",
  "James",
  "Oliver",
  "Benjamin",
  "Elijah",
  "Lucas",
  "Mason",
  "Logan"
];

const femaleNames = [
  "Emma",
  "Olivia",
  "Ava",
  "Isabella",
  "Sophia",
  "Charlotte",
  "Mia",
  "Amelia",
  "Harper",
  "Evelyn"
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Garcia",
  "Martinez",
  "Robinson"
];

export interface Person {
  name: string;
  age: number;
  height: number;
}

export function createRandomPerson(): Person {
  const age = getRndInRange(0, 120);
  const height = getRndInRange(1, 8, true);
  const nameList = Math.random() < 0.5 ? maleNames : femaleNames;
  const name =
    nameList[getRndInRange(0, nameList.length)] +
    " " +
    lastNames[getRndInRange(0, lastNames.length)];

  const p: Person = {
    name,
    age,
    height
  };

  return p;
}

export function getRandomPersons(n: number): Person[] {
  const persons = new Array<Person>(n);

  for (let i = 0; i < n; i++) {
    persons[i] = createRandomPerson();
  }

  return persons;
}
