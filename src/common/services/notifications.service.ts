import { Injectable } from '@nestjs/common';

export interface NotificationProvider {
  send(message: string): Promise<void>;
}

@Injectable()
export class MockNotificationProvider implements NotificationProvider {
  send(message: string): Promise<void> {
    console.log('[NOTIFICATION]', message);
    return Promise.resolve();
  }
}

@Injectable()
export class NotificationsService {
  private provider: NotificationProvider;

  constructor() {
    // Initialize with mock provider by default
    this.provider = new MockNotificationProvider();
  }

  setProvider(provider: NotificationProvider) {
    this.provider = provider;
  }

  async notifyNewLead(
    leadName: string,
    apartmentId: number | null,
    projectName: string,
  ): Promise<void> {
    const apartmentText =
      apartmentId === null
        ? 'without a selected apartment'
        : `in apartment #${apartmentId}`;
    const message = `New lead: ${leadName} is interested ${apartmentText} in project "${projectName}"`;
    await this.provider.send(message);
  }

  async notifyLeadStatusChange(
    leadName: string,
    newStatus: string,
    projectName: string,
  ): Promise<void> {
    const message = `Lead "${leadName}" status changed to ${newStatus} in project "${projectName}"`;
    await this.provider.send(message);
  }
}
