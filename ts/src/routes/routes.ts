type Route = {
    locale: string;
    source: string;
    destination: string;
    access: Role;
  };

export enum Role {
    Guest, User, Admin
}
export type Routes = Route[]  

const routes: Routes = [
    {
      locale: 'lt',
      source: '/pramogos/:path',
      destination: '/activities/:path',
      access: Role.Guest
    },
    {
      locale: 'lt',
      source: '/pramogos',
      destination: '/activities',
      access: Role.Guest
    },
    {
      locale: 'lt',
      source: '/prisijungimas',
      destination: '/login',
      access: Role.Guest
    },
  ];
export default routes
  