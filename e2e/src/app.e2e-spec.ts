import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { AppComponent } from '../../src/app/app.component';
import { TestBed, async } from '@angular/core/testing';

describe('workspace-project App', () => {
  let app: AppComponent;

  beforeEach(async(() => {
    app = new AppComponent();
    }));
  it('la suma debe dar 4', async(()=> {
    expect(app.suma(2,2)).toEqual(4);
    }));

});
