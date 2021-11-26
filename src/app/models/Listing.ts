export class Listing {
  name: string;
  path: string;
  size: string;
  directory: boolean;
  created: string;
  extension: string;
  permissions: string;

  constructor(name: string, path:string,  size: string, directory: boolean, created: string, extension: string, permissions: string) {
    this.name = name;
    this.path = path;
    this.size = size;
    this.directory = directory;
    this.created = created;
    this.extension = extension;
    this.permissions = permissions;
  }
}
