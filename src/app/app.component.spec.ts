import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
let app:AppComponent;
//ejecute antes que todo
beforeEach(async(() => {
app = new AppComponent();
}));
//test
it('la suma debe dar 4', async(()=> {
expect(app.suma(2,2)).toEqual(4);
}));
});
