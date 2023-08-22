import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  //admin login
  Route.post('/login', "Admin/AdminsController.login")


  //admin detail
  Route.group(() => {

    Route.get("/all", 'Admin/AdminsController.getAdminList')
    Route.post('/create-admin', "Admin/AdminsController.createAnotherAdminCredentials")
    Route.delete('/delete/:id', "Admin/AdminsController.deleteAdminCredentials")
    Route.put('/update/:id', "Admin/AdminsController.updateAdminDetail")

  }).middleware('auth_admin')

  //diller detail
  Route.group(() => {

    Route.get('/all', 'Admin/DillersController.get_dillers_list')
    Route.post('/create', "Admin/DillersController.create")
    Route.group(() => {

      Route.put('/update/:id', "Admin/DillersController.update")
      Route.delete('/delete/:id', "Admin/DillersController.remove")
      Route.post('/update-balance/:id', "Admin/DillersController.updateBalance")
      Route.post('/fill-up-balance/:id', "Admin/DillersController.fillUpBalance")
      Route.get('/balance-history/:id', 'Admin/DillersController.getBalanceHistory')
    }).middleware('find_diller')

  }).middleware('auth_admin')
    .prefix('/dillers')

  //news
  Route.group(() => {

    Route.get('/all', "Admin/NewsController.getAll")
    Route.post('/create', 'Admin/NewsController.create')
    Route.put('/update/:id', "Admin/NewsController.update")
    Route.delete('/delete/:id', 'Admin/NewsController.removeNews')

    Route.get('/remote', "Admin/NewsController.getRemoteNews")

  }).middleware('auth_admin')
    .prefix('/news')


  //clients
  Route.group(() => {

    Route.get('/all', 'Admin/ClientsController.getAllClient')
    Route.post('/create', 'Admin/ClientsController.create')
    Route.get('/packets', 'Admin/ClientsController.loadAllPackets')
    Route.group(() => {

      Route.put('/update/:id', 'Admin/ClientsController.update')
      Route.delete('/delete/:id', "Admin/ClientsController.removeClient")
      Route.get('/subscription-history/:id', 'Admin/ClientsController.getSubscriptionHistory')
      Route.get('/activity-history/:id', 'Admin/ClientsController.getActivityHistory')
      Route.get('/client-detail/:id', "Admin/ClientsController.getClientDetail")


    }).middleware('find_client')

  }).prefix('/clients')
    .middleware('auth_admin')


  //packets
  Route.group(() => {

    Route.get('/all', 'Admin/PacketsController.getAll')
    Route.get('/sync', 'Admin/PacketsController.sync_packets')

  }).prefix('/packets')
    .middleware('auth_admin')

  //settings
  Route.group(() => {

    Route.get('/remote-access-detail', 'Admin/RemoteSettingsController.get_remote_access_credentials')
    Route.post('/update-access-detail', "Admin/RemoteSettingsController.update_access_credentials")

  }).prefix('/settings')
    .middleware('auth_admin')

  //Logs
  Route.group(() => {
    Route.get('/all', 'LogsController.getAll')
  }).prefix('logs')
    .middleware('auth_admin')
    .namespace('App/Controllers/Http/Admin')

  Route.group(() => {

    Route.get('all', 'ChangeNotificationsController.getAll')
    Route.get('make-is-shown/:id', 'ChangeNotificationsController.show')
    Route.post('change-status/:id', 'ChangeNotificationsController.changeStatus')

  }).prefix('change-card-not')
    .middleware('auth_admin')
    .namespace('App/Controllers/Http/Admin')

}).prefix('api/v1/admin')
  .middleware('log_request')
