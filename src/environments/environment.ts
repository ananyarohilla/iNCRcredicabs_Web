// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

//  const BASE_URL = 'http://localhost:8080/NCAB';
const BASE_URL = 'http://ec2-18-219-151-75.us-east-2.compute.amazonaws.com:8080/NCAB';

export const environment = {
  production: false,
  url:                        BASE_URL,
  loginUrl:                   BASE_URL + "/EmployeeService/login",
  logoutUrl:                  BASE_URL + "/EmployeeService/logout",
  checkLoginUrl:              BASE_URL + "/EmployeeService/check-login-status",
  addEmployeeUrl:             BASE_URL + "/EmployeeService/add-employee",
  activateEmployeeUrl:        BASE_URL + "/EmployeeService/activate-employee",
  deactivateEmployeeUrl:      BASE_URL + "/EmployeeService/deactivate-employee",
  editEmployeeUrl:            BASE_URL + "/EmployeeService/edit-employee",
  viewEmployeeUrl:            BASE_URL + "/EmployeeService/view-employee",
  viewEmployeeByQlidUrl:      BASE_URL + "/EmployeeService/view-employee-by-qlid",
  getManagerByNameUrl:        BASE_URL + "/EmployeeService/get-manager-by-name",
  getAllManagersUrl:          BASE_URL + "/EmployeeService/get-all-managers",
  getAllRolesUrl:             BASE_URL + "/EmployeeService/get-all-roles",
  newAccSetupQlidUrl:         BASE_URL + "/EmployeeService/new-acc-setup",
  forgotpasswordUrl:          BASE_URL + "/EmployeeService/forgot-password",
  forgotpassSetPasswordUrl:   BASE_URL + "/EmployeeService/forgot-password/set-password",
  accSetupSetPasswordUrl:     BASE_URL + "/EmployeeService/new-acc-setup/set-password",
  verifyPwdTokenUrl:          BASE_URL + "/EmployeeService/verify-pwd-token",
  checkinUrl:                 BASE_URL + "/AndroidService/checkin",
  checkoutUrl:                BASE_URL + "/AndroidService/checkout",
  getrequestUrl:              BASE_URL + "/RequestService/getrequest",
  allocateRequest:            BASE_URL + "/RequestService/onApproved",
  downloadRequestExcelUrl:    BASE_URL + "/RequestService/getUExcel",
  employeeRequest:            BASE_URL + "/ReportService/employeereportParamSummary",
  employeeDetailUrl1:         BASE_URL + "/ReportService/employeereportDefaultDetail",
  employeeRequest1:           BASE_URL + "/ReportService/employeereportDefaultSummary",
  employeeDetailUrl:          BASE_URL + "/ReportService/employeereportParamDetail",
  managerUrl:                 BASE_URL + "/ReportService/managerreportParamSummary",
  managerDetailUrl:           BASE_URL + "/ReportService/managerreportParamDetail",
  managerUrl1:                BASE_URL + "/ReportService/managerreportDefaultSummary",
  managerDetailUrl1:          BASE_URL + "/ReportService/managerreportDefaultDetail",
  vendorDetailUrl1:           BASE_URL + "/ReportService/vendorreportDefaultSummary",
  vendorUrl:                  BASE_URL + "/ReportService/vendorreportParamSummary",
  vendorDefaultDetailUrl:     BASE_URL + "/ReportService/vendorreportDefaultDetail",
  vendorDetailUrl:            BASE_URL + "/ReportService/vendorreportParamDetail",
  employeeDashUrl:            BASE_URL + "/EmployeeService/employee-dashboard",
  employeeSetPasswrodUrl:     BASE_URL + "/EmployeeService/change-password",
  getEmpQlidUrl:              BASE_URL + "/EmployeeService/get-qlid",
  employeeManagerDetailsUrl:  BASE_URL + "/EmployeeService/employee-manager-details",
  unscheduledRequestUrl:      BASE_URL + "/RequestService/sendRequest",
  uploadEmployeeExcelUrl:     BASE_URL + "/EmployeeService/upload-file-data",
  getRoleUrl:                 BASE_URL + "/EmployeeService/get-role",
  vendornameUrl:              BASE_URL + "/ReportService/VendorNames",
  billingsummaryUrl:          BASE_URL + "/ReportService/vendorwisebillreport",
  pullExcelfileUrl:           BASE_URL + "/RequestService/pullExcel",
  transportationBillingUrl:   BASE_URL + "/ReportService/transportbillingreport",
  checkinoutreportUrl:        BASE_URL + "/ReportService/checkinoutreport",
  routenoUrl:                 BASE_URL + "/ReportService/RouteNos",
  cabnobyvendorandrouteUrl:   BASE_URL + "/ReportService/getCabNobyVendorandRoute",
  checkinoutreportDefualtUrl: BASE_URL + "/ReportService/checkinoutDefault",


  rosterDataUrl:              BASE_URL + "/RosterService/showRosterInfo",
  getVendorDetailUrl:         BASE_URL + "/RosterService/vendorDetails",
  getEmployeeDetailUrl:       BASE_URL + "/RosterService/empDetails",
  getAvailableCabUrl:         BASE_URL + "/RosterService/getCab",
  getQlidUrl:                 BASE_URL + "/RosterService/empqlid",
  
  getUnshEmpDetails:          BASE_URL + "/RosterService/unschdetails",
  createScheduleRouteUrl:     BASE_URL + "/RosterService/insertRouteSCH",
  empDeactiveUrl:             BASE_URL + "/RosterService/empDeactive",
  insertRouteUnschUrl:        BASE_URL + "/RosterService/insertRouteUnSCH",
  getCabListUrl:              BASE_URL + "/RosterService/getcablist",
  getAddQlidUrl:              BASE_URL + "/RosterService/getAddQlid",
  getEmpToDbUrl:              BASE_URL + "/RosterService/AddEmpToDb",
  uploadFileDataUrl:          BASE_URL + "/RosterService/UploadFileData",
  inactiveDataUrl:            BASE_URL + "/RosterService/inactiveqlid",
  getdefaultdataUrl:          BASE_URL + "/RosterService/fetchdefaultdata",
  getunchQlidUrl:             BASE_URL + "/RosterService/unschqlid",
  editDataUrl:                BASE_URL + "/RosterService/editd",
  getRouteUrl:                BASE_URL + "/RosterService/getRoute",
  getCabNumberUrl:            BASE_URL + "/RosterService/getCabNo",
  getVendorUrl:               BASE_URL + "/RosterService/getVendor",
  updateRouteUrl:             BASE_URL + "/RosterService/UpdateRoute",
  downloadExcelDataUrl:       BASE_URL + "/RosterService/downloadexcel",
  getDriverDetailUrl:         BASE_URL + "/RosterService/driver",
  getRouteDataUrl:            BASE_URL + "/RosterService/getRouteDetails",
  getStartAndEndUrl:          BASE_URL + "/RosterService/getStartEndDate",
  pullExcelRoster:           BASE_URL + "/RosterService/pullExcel",
};