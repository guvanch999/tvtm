import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  //admin login
  Route.post('/login', "User/UsersController.login")
  Route.post('/register', "User/UsersController.register")
  Route.get('/my-detail', 'User/UsersController.get_my_detail')
    .middleware('auth_diller')
  Route.post('/update-my-detail', 'User/UsersController.update_my_detail').middleware('auth_diller')

  Route.group(() => {

    //news
    Route.get('/all', 'User/NewsController.getMyNews')


  }).prefix('/news')
    .middleware('auth_diller')


  //clients
  Route.group(() => {

    Route.get('/all', 'User/CardsController.get_all')
    Route.post('/create', 'User/CardsController.create')
    Route.get('/card-information/:card_number', 'User/CardsController.get_card_information')
    Route.get('/packets', "User/CardsController.getPackets")

    Route.get('/card-statuses','User/CardsController.cardStatuses')

    Route.group(() => {


      Route.put('/update/:id', 'User/CardsController.update')
      Route.get('/reactivate-card/:id', 'User/CardsController.reactivation')
      Route.post('/buy-or-extend/:id', 'User/CardsController.buy_or_extend')

    }).middleware('find_client')

    Route.post('/change-card', "User/CardsController.changeCard")

  }).prefix('/cards')
    .middleware('auth_diller')


  //histories
  Route.group(() => {

    Route.get('/subscription-history/:id', 'User/HistoriesController.get_subscription_history')
    Route.get('/activity-history/:id', 'User/HistoriesController.get_activity_history')
  }).prefix('/histories')
    .middleware('auth_diller')
    .middleware('find_client')


  //balance
  Route.group(() => {

    Route.post('/fill-up', 'User/BalancesController.fill_up_balance')
    Route.get('/history', 'User/BalancesController.balance_history')
  }).prefix('/balance')
    .middleware('auth_diller')




}).prefix('api/v1/diller')
  .middleware('log_request')
