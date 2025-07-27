//URLS

export const URL = {
    orgLogin: 'https://opensource-demo.orangehrmlive.com/',
    orgLogin2: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    amzLogin: 'https://www.amazon.in',
};

//Selectors

export const SELECTORS = {
    user_name: '[name="username"]',
    password: '[name="password"]',
    submit_button: '[type="submit"]',
    menu: '[class="oxd-main-menu"]',
};

export const orangeSelector = {
    username: '[name="username"]',
    password: '[name="password"]',
    subbtn: '[type="submit"]',
    side_bar: '[class="oxd-main-menu-item"]',
    search_box: '[placeholder="Search"]',
    //username_Field: '[//*[@id="app"]/div/div[2]/div/div/div/div[2]/form/div/div/div/div/div[2]/input]',
    username_Field: '[:nth-child(2) > .oxd-input]',
    user_Role: '[//*[@id="app"]/div/div[2]/div/div/div/div[2]/form/div/div/div[2]/div/div[2]',
};

export const amazonSelectors = {
    account_signin_button: '[id="nav-link-accountList-nav-line-1"]',
    email_field: '[id="ap_email_login"]',
    continue_btn: '[id="continue"]',
    password: '[id="ap_password"]',
    submit_button: '[id="signInSubmit"]',

};