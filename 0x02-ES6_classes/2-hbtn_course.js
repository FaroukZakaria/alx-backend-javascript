export default class HolbertonCourse {
  constructor(name, length, students) {
    this._Check(name, 'string');
    this._Check(length, 'number');
    this._Check(students, 'array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._Check(newName, 'string');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._Check(newLength, 'number');
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._Check(newStudents, 'array');
    this._students = newStudents;
  }

  _Check(type, required) {
    if (required === 'array') {
      if (Array.isArray(type)) {
        for (const i of type) {
          if (typeof i !== 'string') {
            throw new Error('Array must contain only strings');
          }
        }
      } else {
        throw new Error('Variable must be an array');
      }
    } else if (typeof type !== required) {
      throw new Error(`${type} must be ${required}`);
    }
  }
}
