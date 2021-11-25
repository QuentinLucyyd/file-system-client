export class Listing {
  name: string;
  size: string;
  directory: boolean;
  created: string;
  extension: string;
  permissions: string;

  constructor(name: string, size: string, directory: boolean, created: string, extension: string, permissions: string) {
    this.name = name;
    this.size = size;
    this.directory = directory;
    this.created = created;
    this.extension = extension;
    this.permissions = permissions;
  }
}
