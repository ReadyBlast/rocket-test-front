export interface ILead {
  id: number;
  leadName: string;
  price: number;
  updatedAt: Date;
  responsibleUserName: string;
  responsibleUserEmail: string;
  pipelineName: string;
  statusName: string;
  statusColor: string;
  contacts: IContactInfo[];
}

export interface IContactInfo {
  contactFullName: string;
  PHONE: IContactExtendedValue[];
  EMAIL: IContactExtendedValue[];
  POSITION: IContactExtendedValue[];
}

export interface IContactExtendedValue {
  value: string;
  enum_id?: number;
  enum?: string;
}
