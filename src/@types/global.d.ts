interface IMainSubMenuItem {
  id: number
  title: string,
  href: string,
  content: string
}

interface IMainMenuItem {
  id: number,
  title: string,
  href?: string,
  subTitle?: string
  subMenuList?: IMainSubMenuItem[]
}

interface IFooterSubMenu {
  id: number
  title: string,
  href: string,
}

interface IFooterMenu {
  id: number,
  title: string,
  subMenu: IFooterSubMenu[]
}