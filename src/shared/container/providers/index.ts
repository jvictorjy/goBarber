import { container } from 'tsyringe';

import IStorageProviders from '@shared/container/providers/models/IStorageProviders';
import DiskStorageProvider from '@shared/container/providers/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProviders>(
  'StorageProvider',
  DiskStorageProvider,
);
