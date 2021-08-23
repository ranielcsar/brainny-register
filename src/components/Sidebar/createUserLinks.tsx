import { UserProps } from 'context/types'
import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg'
import { ReactComponent as RegistersIcon } from 'assets/icons/register.svg'
import SidebarItem from './SidebarItem'

export default function createUserLinks(user: UserProps | null) {
  return user?.role === 'admin' ? (
    <>
      <SidebarItem icon={DashboardIcon} label={'Dashboard'} path="dashboard" />
      <SidebarItem icon={RegistersIcon} label={'Meus Registros'} path="my-registers" />
    </>
  ) : (
    <>
      <SidebarItem icon={RegistersIcon} label={'Meus Registros'} path="my-registers" />
    </>
  )
}
