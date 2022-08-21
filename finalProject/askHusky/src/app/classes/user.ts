/**
 * Tag object import
 */
import {Tag} from './tag';

/**
 * User POJO created
 */
export class User {
  public firstName: string;
  public lastName: string;
  public phoneNo: string;
  public collegeName: string;
  public degree: string;
  public course: string;
  public graduationYear: string;
  public interestedTags: Array<Tag>;
  public userName: string;
  public password: string;
  public userStatus?: boolean;
  public email: string;
  public points: string;

  constructor() {
    this.interestedTags = new Array<Tag>();
  }
}
