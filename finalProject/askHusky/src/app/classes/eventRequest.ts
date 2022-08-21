/**
 * event meeting request POJO class
 */
export class EventRequest {

  public requestStatus: string;
  public isActive: boolean;
  public id: string;
  public requestModifyTime: string;
  public requestCreationTime: string;
  public title: string;
  public description: string;
  public location: string;
  public date: Date;
  public time: string;
  public hours: string;
  public organizer: string;
  public attendees: string;
  public questionID: string;
  public requestStatusReason: string;


}
