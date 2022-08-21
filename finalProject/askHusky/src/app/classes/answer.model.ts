/**
 * answer model POJO
 */

export class Answer {
  public id: string;
  constructor(public userName: string, public answer: string, public upvotes: number, public downvotes: number, public isActive: boolean) {}
}

/*
"answers" : [
  {
    "_id" : ObjectId("5ded421b8cd18628f496bfab"),
    "userId" : "2",
    "answer" : "Hell yes!",
    "upvotes" : 0,
    "downvotes" : 0,
    "dateCreated" : ISODate("2019-12-08T05:00:00.000Z"),
    "isActive" : true
  },*/
