/*{
  "_id" : ObjectId("5ded3b4e8cd18628f496bfaa"),
  "userId" : 3,
  "questionId" : 1,
  "title" : "Is Typescript cooler than JavaScript?",
  "description" : "Which is more popular among the hipsters?",
  "dateCreated" : ISODate("2019-12-08T05:00:00.000Z"),
  "dateModified" : ISODate("2019-12-09T06:58:15.251Z"),
  "tags" : [
  "html",
  "css",
  "sass"
],
  "answers" : [
  {
    "_id" : ObjectId("5ded421b8cd18628f496bfab"),
    "userId" : "2",
    "answer" : "Hell yes!",
    "upvotes" : 0,
    "downvotes" : 0,
    "dateCreated" : ISODate("2019-12-08T05:00:00.000Z"),
    "isActive" : true
  },
  {
    "userId" : 3.0,
    "answer" : "Ummm,, who cares?!",
    "upvotes" : 0.0,
    "downvotes" : 0.0,
    "isActive" : true
  },
  {
    "dateCreated" : ISODate("2019-12-10T02:29:57.949Z"),
    "_id" : ObjectId("5def033ca3882359f8188b10"),
    "userId" : 4,
    "answer" : "The opposite of whatever you think!",
    "upvotes" : 0,
    "downvotes" : 0,
    "isActive" : true
  }
],
  "spamCount" : 0,
  "isActive" : true
}*/

/**
 * importing answer object
 */
import {Answer} from './answer.model';

export class Question {
  public id: string;
  public dateCreated: Date;
  public topAnswerId: string;
  public topAnswerContent: string;
  public topAnswerUser: string;
  constructor(public userName: string, public title: string, public description: string, public tags: Array<string>, public answers: Array<Answer>, public spamCount: number, public isActive: boolean) {}
}
