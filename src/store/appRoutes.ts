import { RouteLocationNamedRaw, RouteRecordRaw } from 'vue-router'
import { keys as _keys } from 'lodash'

export const appRoutes = {
  route: {
    path: '/',
    component: () => import('@/layouts/default/Default.vue')
  },
  Chat: {
    route: {
      path: '/Chat',
      name: 'Chat',
      component: () => import('@/views/ChatList.vue')
    },

    get build() {
      return () => {
        return { name: this.route.name } as RouteLocationNamedRaw
      }
    }
  }

}

interface INamedRoute {
  route: RouteRecordRaw
  [key: string]: any
}

function isINamedRoute(routeVal: any): routeVal is INamedRoute {
  return (<any>routeVal).route !== undefined
}

function getRoutes(namedRoute: INamedRoute,): RouteRecordRaw {
  const route = { children: [], ...namedRoute.route }

  route.children = _keys(namedRoute).reduce((filtered, key) => {
    if (key !== 'route') {
      const value = namedRoute[key]
      if (isINamedRoute(value)) {
        filtered.push(getRoutes(value))
      }
    }
    return filtered
  }, [] as RouteRecordRaw[])

  return route
}

function getAppRoutes(): RouteRecordRaw[] {
  const routes = [getRoutes(appRoutes)]
  return routes
}

export const computedAppRoutes = getAppRoutes()



