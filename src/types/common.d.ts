declare namespace AJA {
  enum Verb {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
  }
  interface IActionSchema {
    suffix?: string;
    action?: string;
    api: IAPI;
  }
  interface IAction {
    // CRUD actions
    create: Partial<IActionSchema>;
    view: Partial<IActionSchema>;
    list: Partial<IActionSchema>;
    update: Partial<IActionSchema>;
    delete: Partial<IActionSchema>;

    // Custom actions
    [key: string]: Partial<IActionSchema>;
  }
  interface IStateSchema {
    entity: string;
    actions: Partial<IAction>;
  }
  interface IAPI {
    endpoint: string;
    verb: Verb;
    isMutation?: boolean;
    hasBody?: boolean;
    isDownload?: boolean;
  }

  interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
  }
}
