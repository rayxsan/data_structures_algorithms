interface Comparable<T> {
  /// Compare to other T and return negative, zero, or positive number if
  /// other is bigger, equal, or smaller than this T
  compareTo(other: T): number;
}

interface Hashable {
  hashCode(): number;
}

/**
 * Example of how to use this interfaces
 * 
 * class Person implements Comparable<Person>, HashTable {
  private age: number;
  private name: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  compareTo(other: Person): number {
    return this.age - other.age;
  }

  hashCode(): number {
    return hashString(this.name);
  }
} 
 * 
 */
