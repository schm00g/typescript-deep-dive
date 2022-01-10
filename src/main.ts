
export const delayMillis = (delayMs: number): Promise<void> => new Promise(resolve => setTimeout(resolve, delayMs));

export const greet = (subject: string): string => `Hello ${subject}`

export const foo = async (): Promise<boolean> => {
  console.log(greet('World'))
  await delayMillis(1000)
  console.log('done')
  return true
}

export const basics = (): string => {
  // in TS below compile time errors caught - better than failing at runtime.
  // console.log(4 == "4");
  // console.log(5 === "5");

  // structural equality
  console.log({a:123} == {a:123}); // False
  console.log({a:123} === {a:123}); // False

  type IdDisplay = {
    id: string,
    display: string
  }
  const list: IdDisplay[] = [
    {
      id: 'foo',
      display: 'Foo Select'
    },
    {
      id: 'bar',
      display: 'Bar Select'
    },
  ]
  
  const fooIndex = list.map(i => i.id).indexOf('foo');
  console.log(fooIndex); // 0

  // enums

  enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
  }

  // sample usage
  let card = CardSuit.Diamonds;

  // safety
  card = "not a member of card suit";

  enum Color {
    Red,
    Green,
    Blue
  }

  let col = Color.Red;
  col = 0;

  // Number Enums as flags

  enum AnimalFlags {
    None           = 0,
    HasClaws       = 1 << 0,
    CanFly         = 1 << 1,
  }
  type Animal = {
      flags: AnimalFlags
  }

  function printAnimalAbilities(animal: Animal) {
      const animalFlags = animal.flags;
      if (animalFlags & AnimalFlags.HasClaws) {
          console.log('animal has claws');
      }
      if (animalFlags & AnimalFlags.CanFly) {
          console.log('animal can fly');
      }
      if (animalFlags == AnimalFlags.None) {
          console.log('nothing');
      }
  }

  const animal: Animal = { flags: AnimalFlags.None };
  printAnimalAbilities(animal); // nothing
  animal.flags |= AnimalFlags.HasClaws;
  printAnimalAbilities(animal); // animal has claws
  animal.flags &= ~AnimalFlags.HasClaws;
  printAnimalAbilities(animal); // nothing
  animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
  printAnimalAbilities(animal); // animal has claws, animal can fly

  return "";
}