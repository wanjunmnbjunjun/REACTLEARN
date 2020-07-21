import {Loading}   from '../components'

import Loadable from 'react-loadable'
//这个文件是用于解释react-loadable用，当然可以无缝切换
// import Loadable from './loadable'


// import Login from './Login'
// import NotFound from './NotFound'
// import Settings from './Settings'
// import ArticleList from './Article'
// import ArticleEdit from './Article/Edit'
// import Dashboard from './Dashboard'

//下面是懒加载
const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading,
});
const Settings = Loadable({
  loader: () => import('./Settings'),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: Loading,
});
const ArticleList = Loadable({
  loader: () => import('./Article'),
  loading: Loading,
});
const ArticleEdit = Loadable({
  loader: () => import('./Article/Edit'),
  loading: Loading,
});


export {
  Login,
  NotFound,
  Settings,
  ArticleList,
  ArticleEdit,
  Dashboard
}
