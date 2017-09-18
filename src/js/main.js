import $ from 'jquery';
import angular from 'angular';
import 'angular-ui-router';

import Config from './config';

import productPageController from './controllers/productPage.js'

angular
.module('app', ['ui.router'])
  .config(Config)
  .controller('productPageController', productPageController);
