/**
 * Created by Fajar on 22/08/2017.
 */
export class Users {

  constructor(
    public id: string,
    public first_name: string,
    public last_name: string,
    public email: string,
    public username: string,
    public password: string,
    public company_id: string)
  { }
}
