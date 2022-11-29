// Este archivo es requerido por karma.conf.js y carga recursivamente todos los archivos .spec y framework



import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// Primero, inicializamos el entorno de prueba de Angular.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Luego encontramos todas las pruebas.
const context = require.context('./', true, /\.spec\.ts$/);
// Por último cargamos los módulos.
context.keys().map(context);
