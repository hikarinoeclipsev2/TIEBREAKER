import {MDCRipple} from '@material/ripple/index';
const ripple = new MDCRipple(document.querySelector('.foo-button'));

import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

import {MDCBanner} from '@material/banner';
const banner = new MDCBanner(document.querySelector('.mdc-banner'));

import {MDCRipple} from '@material/ripple';

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

import {MDCTextField} from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;

