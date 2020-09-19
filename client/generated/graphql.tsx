export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  room?: Maybe<Room>;
  listMessage?: Maybe<ModelMessagesList>;
};


export type QueryRoomArgs = {
  RoomId: Scalars['ID'];
};


export type QueryListMessageArgs = {
  RoomId: Scalars['ID'];
};

export type Room = {
  __typename?: 'Room';
  RoomId: Scalars['ID'];
  UserId: Scalars['ID'];
  UserName?: Maybe<Scalars['String']>;
  Status: RoomStatus;
  CreatedAt: Scalars['String'];
};

export enum RoomStatus {
  Open = 'open',
  Close = 'close'
}

export type ModelMessagesList = {
  __typename?: 'ModelMessagesList';
  items?: Maybe<Array<Maybe<Message>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  MessageId: Scalars['ID'];
  UserId: Scalars['ID'];
  RoomId: Scalars['ID'];
  Message?: Maybe<Scalars['String']>;
  CreatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRoom?: Maybe<Room>;
  closeRoom?: Maybe<Room>;
};


export type MutationCreateRoomArgs = {
  UserName?: Maybe<Scalars['String']>;
  UserId: Scalars['ID'];
};


export type MutationCloseRoomArgs = {
  RoomId: Scalars['ID'];
};
