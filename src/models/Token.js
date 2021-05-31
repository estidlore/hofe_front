export default class Token {
  constructor(email, value, role, expiration) {
    this.email = email;
    this.value = value;
    this.role = role;
    this.expiration = expiration;
  }
  static instance = new Token("", "", "candidate", "0");
}