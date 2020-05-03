describe('webdriverio-compared-with-protractor', () => {
    beforeEach(() => {
        // WebdriverIO uses the logger automatically to post the it name to Sauce
        browser.url('http://www.angularjs.org');
    });

    it('As a visitor I want to be greeted', () => {
        $('[ng-model="yourName"]').setValue('Julie');
        expect($('h1.ng-binding').getText()).toEqual('Hello Julie!')
    });

    it('Validate todo list', () => {
        const toDos = $$('[ng-repeat="todo in todoList.todos"]');
        expect(toDos.length).toEqual(2);
        expect(toDos[ 1 ].getText()).toEqual('build an AngularJS app');
    });

    it('Add a todo', () => {
        $('[ng-model="todoList.todoText"]').setValue('write a protractor test');
        $('[value="add"]').click();

        const toDos = $$('[ng-repeat="todo in todoList.todos"]');
        expect(toDos.length).toEqual(3);
        expect(toDos[ 2 ].getText()).toEqual('write a protractor test');
    });
});

// import { browser, element, by } from 'protractor';
//
// describe('Angular page', () => {
//     beforeEach(async () => {
//         // Go to the url
//         await browser.get('http://www.angularjs.org');
//     });
//
//     it('As a visitor I want to be greeted', async () => {
//         await element(by.model('yourName')).sendKeys('Julie');
//         expect(await element(by.binding('yourName')).getText()).toEqual('Hello Julie!')
//     });
//
//     it('Validate todo list', async () => {
//         const todoList = element.all(by.repeater('todo in todoList.todos'));
//
//         expect(todoList.count()).toEqual(2);
//         expect(await todoList.last().getText()).toEqual('build an AngularJS app');
//     });
//
//     it('Add a todo', async () => {
//         await element(by.model('todoList.todoText')).sendKeys('write a protractor test');
//         await element(by.css('[value="add"]')).click();
//
//         const todoList = element.all(by.repeater('todo in todoList.todos'));
//
//         expect(await todoList.count()).toEqual(3);
//         expect(await todoList.last().getText()).toEqual('write a protractor test');
//     });
// });


