import {URL} from '../support/selectors';
import { loginAmazon } from '../support/loginData';


describe('Amazon testing', () =>{
    before('login', ()=>{
        cy.amazonLogin(URL.amzLogin, loginAmazon.username, loginAmazon.password);
    });

    it('select items', ()=>{

    });
});