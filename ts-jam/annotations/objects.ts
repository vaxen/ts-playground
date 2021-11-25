const profile = {
  myName: 'mattia',
  age: 20,
  coords: {
    lat: 0,
    lng: 4,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, myName }: { age: number; myName: string } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
