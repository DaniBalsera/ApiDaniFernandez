import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

/*Describimos AppComponent , dentro del cual se hará una prueba unitaria en la que se testearán los módulo

describe --> Estamos describiendo lo que vamos a trabajar
beforeEach --> Significa que se ejecuta antes de la prueba
TestBed -- > Utilizado para derribar entornos y módulos de prueba después de cada prueba.
*/

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  
/*
Hacemos uso de la funcion it(), la cuál se usa debido a que dentro de esta se trabajará con funciones expect().

Expect() --> se utilizan para probar las cosas que deberían funcionar/ser correctas.
toBeTruthy() --> Indica que el valor sea verdadero
*/
  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /*
Hacemos uso de la funcion it(), la cuál se usa debido a que dentro de esta se trabajará con funciones expect().


toEqual()--> Se usa para comparar recursívamente todas las propiedades de un objeto

*/
  
  it(`should have as title 'pokedex'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pokedex');
  });

    /*
Hacemos uso de la funcion it(), la cuál se usa debido a que dentro de esta se trabajará con funciones expect().


detectChanges()--> Verifica los cambios de una vista y sus hijos
querySelector()--> Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores
*/
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('pokedex app is running!');
  });
});
