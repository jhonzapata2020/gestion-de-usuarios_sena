export class Empleado {
  constructor(
    _id = "",
    td = "",
    firstName = "",
    lastName = "",
    sexo = "",
    email = ""
  ) {
    this._id = _id;
    this.td = td;
    this.firstName = firstName;
    this.lastName = lastName;
    this.sexo = sexo;
    this.email = email;
  }

  _id: string;
  td: string;
  firstName: string;
  lastName: string;
  sexo: string;
  email: string;
}




/*export class Empleado {
    constructor(_id = "", td = "", firstName = "", middleName = "", lastName = "", secondSurname = "", sexo = "") {
        this._id = _id;
        this.td= td;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.secondSurname = secondSurname;
        this.sexo = sexo;
        this.email = email;
        
      }
      
    _id: string; // Sub guión id porque los datos van a venir de MOngodb
    td: string;
    firstName: string;
    middleName: string;
    lastName: string;
    secondSurname: string;
    sexo: string;
    email: string;
    

}
/*export class Empleado {
  constructor(
    _id = "",
    td = "",
    firstName = "",
    lastName = "",
    sexo = "",
    email = ""
  ) {
    this._id = _id;
    this.td = td;
    this.firstName = firstName;
    this.lastName = lastName;
    this.sexo = sexo;
    this.email = email;
  }

  _id: string;
  td: string;
  firstName: string;
  lastName: string;
  sexo: string;
  email: string;
}
*/