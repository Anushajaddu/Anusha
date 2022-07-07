export const BEESArr = [
  {
    id: 1,
    name: "Mason Bee",
    health: 100
  },
  {
    id: 2,
    name: "Jason Bee",
    health: 100
  },
  {
    id: 3,
    name: "Bumble Bee",
    health: 100
  },
  {
    id: 4,
    name: "Squash Bee",
    health: 100
  },
  {
    id: 5,
    name: "Ashy Bee",
    health: 100
  }
];

export default function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BEESArr);
    }, 500);
  });
}
