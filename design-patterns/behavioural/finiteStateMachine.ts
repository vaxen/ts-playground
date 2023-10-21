enum Status {
  CREATED = 'created',
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

class DocumentStatus {
  private state: Status;

  constructor(state: Status) {
    this.state = state;
  }

  next() {
    switch (this.state) {
      case Status.CREATED: {
        this.state = Status.PENDING;
        break;
      }
      case Status.PENDING: {
        this.state = Status.APPROVED;
        break;
      }
      case Status.REJECTED: {
        break;
      }
    }
  }

  public get currentStatus() {
    return this.state;
  }
}

class DocumentStateMachine {
  private documentStatus: DocumentStatus;

  constructor() {
    this.documentStatus = new DocumentStatus(Status.CREATED);
  }

  logState() {
    console.log('Actual State is ', this.documentStatus.currentStatus);
  }

  next() {
    this.documentStatus.next();
  }
}
