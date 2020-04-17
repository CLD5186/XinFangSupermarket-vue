import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    base: __dirname,
    routes: [
      {
        name:'home',path:'/home',component: r => require.ensure([], () => r(require('~pages/home')), 'chunk-home'),
        children: [
          { name: 'index', path: '/index', component: r => require.ensure([], () => r(require('~pages/index')), 'chunk-index') },
          { name: 'statistic', path: '/statistic', component: r => require.ensure([], () => r(require('~pages/statistic')), 'chunk-statistic') },
          { name: 'quota', path: '/quota', component: r => require.ensure([], () => r(require('~pages/quota')), 'chunk-quota') },
          { name: '预警人员', path: '/warning', component: r => require.ensure([], () => r(require('~pages/warning')), 'chunk-warning') },
          { name: '部门属地', path: '/department', component: r => require.ensure([], () => r(require('~pages/department')), 'chunk-department') },
          { name: '部门属地详情', meta:{name:'balabala'}, path: '/departmentDetail', component: r => require.ensure([], () => r(require('~pages/departmentDetail')), 'chunk-department') },
        ]
      },
      {
        name:'welcome',path:'/welcome',component: r => require.ensure([], () => r(require('~pages/welcome')), 'chunk-welcome'),
      },
      { path: '*', redirect: '/index' }
    ]
  })
}

