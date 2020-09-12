describe('Sauce Labs Mocking', ()=>{
   it('should work', ()=>{
       const mock = browser.mock('https://todo-backend-express-knex.herokuapp.com/', {
           method: 'get'
       })

       mock.respond([{
           title: 'Injected (non) completed Todo',
           order: null,
           completed: false
       }, {
           title: 'Injected completed Todo',
           order: null,
           completed: true
       }])

       browser.url('https://todobackend.com/client/index.html?https://todo-backend-express-knex.herokuapp.com/')

       $('#todo-list li').waitForExist()
       console.log($$('#todo-list li').map(el => el.getText()))
   });
});
