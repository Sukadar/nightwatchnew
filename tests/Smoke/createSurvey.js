

var signIn =  function(driver)
  {
    driver
    .url(driver.globals.userNames.adminURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 1000)
    .useXpath()
    .click("//input[@id='admin_email']")
    .pause(500)
    .setValue("//input[@id='admin_email']", driver.globals.userNames.adminEmail)
    .pause(500)
    .click("//input[@id='admin_password']")
    .pause(500)
    .setValue("//input[@id='admin_password']", driver.globals.userNames.adminPassword)
    .pause(500)
    .click("//input[@class='btn btn-login test-login-button']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/siginConfirmAdmin.png')
    .pause(1000)
  }

var clickAdminLinks = function(driver)
{
    driver
    .useXpath()
    //click Mission Hubs
     .click("//a[@class='test-nav-hubs']")
    .pause(2000)
    .assert.containsText("//h1[@class='pull-left']", "Mission Hubs")
    //add mission hub
    .click("//a[@class='btn btn-default btn-icon-add test-hub-new']")
    .pause(500)
    //input mission name
    .click("//div[@id='new_mission_hub']/div/div/div[2]/div/div/input")
    .pause(500)
    .setValue("//div[@id='new_mission_hub']/div/div/div[2]/div/div/input", "Survey smoke")
    .pause(1000)
    //click create button
    .click("//div[@class='modal-footer ng-scope']/button")
    .pause(1000)
    //add survey
    .click("//ul[@class='q-builder']/li[1]")
    .pause(4000)
    //click on the survey link
    .click("//a[@class='rowclick test-hub-structure-item-link ng-binding']")
    .pause(3000)
    //click survey name edit button
    .click("//button[@class='btn-edit']")
    .pause(500)
    //input survey name
    .clearValue("//input[@ng-show='isEdit']")
    .setValue("//input[@ng-show='isEdit']","survey smoke name")
    .pause(500)
    .keys(driver.Keys.ENTER)
    .pause(500)
    //add reward points
    .click("(//div[@class='q-list-link q-list-reward'])[1]")
    .click("//input[@class='form-control reward-points-field ng-pristine ng-valid']")
    .setValue("//input[@class='form-control reward-points-field ng-pristine ng-valid']", "10")
    .pause(500)
    .click("(//button[@class='btn btn-primary q-list-done'])[1]")
    //add badge
    .click("(//div[@class='q-list-link q-list-reward'])[2]")
    .setValue("//input[@class='js-badge-image-field']", driver.globals.userNames.path + "surveyBadge.jpg")
    .pause(2000)
    .click("//textarea[@class='form-control q-list-badge-name test-activity-badge-name ng-pristine ng-valid placeholder']")
    .setValue("//textarea[@class='form-control q-list-badge-name test-activity-badge-name ng-pristine ng-valid placeholder']","survey badge name")
    .pause(500)
    .click("(//button[@class='btn btn-primary q-list-done'])[1]")
    .pause(1000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/pointsBadgeAdded.png')
    //Single answer question
    .click("//li[@class='js-draggable test-survey-new-single_answer ui-draggable']")
    .pause(500)
    .click("//textarea[@rows='1']")
    .pause(500)
    .setValue("//textarea[@rows='1']", "Q1 Single answer type")
    .click("//button[@class='btn btn-default q-list-add test-survey-item-edit ng-scope']")
    .pause(500)
    .click("//textarea[@class='q-field test-question-answer-0 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-answer-0 placeholder']", "answer 1")
    .pause(500)
    .keys(driver.Keys.ENTER)
    .click("//textarea[@class='q-field test-question-answer-1 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-answer-1 placeholder']", "answer 2")
    .pause(500)
     .keys(driver.Keys.ENTER)
    .click("//textarea[@class='q-field test-question-answer-2 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-answer-2 placeholder']", "answer 3")
    .pause(500)
    .click("//button[@class='btn button test-question-create']")
    .pause(1000)
    //Multi answer question
    .click("//li[@class='test-question-new test-question-new-multiple_answers']")
    .pause(1000)
    .click("//textarea[@rows='1']")
    .pause(500)
    .clearValue("//textarea[@rows='1']")
    .pause(500)
    .setValue("//textarea[@rows='1']", "Q2 Multiple answer type")
    .pause(500)
    .click("//textarea[@class='q-field test-question-answer-0 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-answer-0 placeholder']", "answer 1")
    .pause(500)
    .keys(driver.Keys.ENTER)
    .click("//textarea[@class='q-field test-question-answer-1 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-answer-1 placeholder']", "answer 2")
    .pause(500)
    .keys(driver.Keys.ENTER)
    .click("//textarea[@class='q-field test-question-answer-2 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-answer-2 placeholder']", "answer 3")
    .pause(500)
    .click("//button[@class='btn button test-question-create']")
    .pause(500)
    //Matrix Single answer question
    .click("//li[@class='test-question-new test-question-new-matrix_with_single_answer']")
    .pause(1000)
    .click("//textarea[@rows='1']")
    .pause(500)
    .clearValue("//textarea[@rows='1']")
    .pause(500)
    .setValue("//textarea[@rows='1']", "Q3 Matrix Single answer type")
    .pause(500)
    .click("//textarea[@class='q-field test-question-matrix-row-0 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-matrix-row-0 placeholder']", "row 1")
    .pause(500)
    .keys(driver.Keys.ENTER)
    .click("//textarea[@class='q-field test-question-matrix-row-1 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-matrix-row-1 placeholder']", "row 2")
    .pause(500)
    .keys(driver.Keys.ENTER)
    .click("//textarea[@class='q-field test-question-matrix-row-2 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-matrix-row-2 placeholder']", "row 3")
    .pause(500)
    .click("//textarea[@class='q-field test-question-matrix-col-0 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-matrix-col-0 placeholder']", "col 1")
    .pause(500)
    .keys(driver.Keys.ENTER)
    .click("//textarea[@class='q-field test-question-matrix-col-1 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-matrix-col-1 placeholder']", "col 2")
    .pause(500)
    .keys(driver.Keys.ENTER)
    .click("//textarea[@class='q-field test-question-matrix-col-2 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-matrix-col-2 placeholder']", "col 3")
    .pause(500)
    .click("//button[@class='btn button test-question-create']")
    .pause(500)
    //Matrix multiple answer question
    .click("//li[@class='test-question-new test-question-new-matrix_with_multiple_answers']")
    .pause(1000)
    .click("//textarea[@rows='1']")
    .pause(1000)
    .clearValue("//textarea[@rows='1']")
    .pause(500)
    .setValue("//textarea[@rows='1']", "Q4 Matrix Multiple answer type")
    .pause(500)
    .click("//textarea[@class='q-field test-question-matrix-row-0 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-matrix-row-0 placeholder']", "row 1")
    .pause(500)
    .keys(driver.Keys.ENTER)
    .click("//textarea[@class='q-field test-question-matrix-row-1 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-matrix-row-1 placeholder']", "row 2")
    .pause(500)
    .keys(driver.Keys.ENTER)
    .click("//textarea[@class='q-field test-question-matrix-row-2 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-matrix-row-2 placeholder']", "row 3")
    .pause(500)
    .click("//textarea[@class='q-field test-question-matrix-col-0 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-matrix-col-0 placeholder']", "col 1")
    .pause(500)
    .keys(driver.Keys.ENTER)
    .click("//textarea[@class='q-field test-question-matrix-col-1 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-matrix-col-1 placeholder']", "col 2")
    .pause(500)
    .keys(driver.Keys.ENTER)
    .click("//textarea[@class='q-field test-question-matrix-col-2 placeholder']")
    .pause(500)
    .setValue("//textarea[@class='q-field test-question-matrix-col-2 placeholder']", "col 3")
    .pause(500)
    .click("//button[@class='btn button test-question-create']")
    .pause(500)
    //Yes or No Type question
    .click("//li[@class='test-question-new test-question-new-yes_or_no']")
    .pause(1000)
    .click("//textarea[@rows='1']")
    .pause(500)
    .clearValue("//textarea[@rows='1']")
    .pause(500)
    .setValue("//textarea[@rows='1']", "Q5 Yes or No answer type")
    .pause(500)
    .click("//button[@class='btn button test-question-create']")
    .pause(5000)
    //Text Type question
    .click("//li[@class='test-question-new test-question-new-text']")
    .pause(1000)
    .click("//textarea[@rows='1']")
    .pause(1000)
    .clearValue("//textarea[@rows='1']")
    .pause(500)
    .setValue("//textarea[@rows='1']", "Q6 Text answer type")
    .pause(500)
    .click("//button[@class='btn button test-question-create']")
    .pause(500)
    //Number Type question
    .click("//li[@class='test-question-new test-question-new-numbers']")
    .pause(1000)
    .click("//textarea[@rows='1']")
    .pause(500)
    .clearValue("//textarea[@rows='1']")
    .pause(500)
    .setValue("//textarea[@rows='1']", "Q7 Number answer type")
    .pause(500)
    .click("//button[@class='btn button test-question-create']")
    .pause(500)
}
var missionLogic =  function(driver)
  {
    driver
    .useXpath()
    //clicking to go back to mission Logic page
    .click("//div[@class='topbar']/ul/li[3]")
    .pause(1000)
    .click("//nav[@class='survey-navbar affix-top']/ul/li[3]")
    .pause(500)
    .click("//a[@class='mlogic-link test-hub-logic-item-view ng-scope']")
    .pause(500)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/missionLogicPage.png')
    .pause(500)
    .click("//input[@id='date-start']")
    .pause(500)
    .click("//td[@class='active day']/preceding-sibling::td[@class='day'][1]")
    .pause(500)
    .click("//button[@class='mlogic-add-group']")
    .pause(500)
    .click("//span[text()='All Members']")
    .pause(500)
    .click("//button[@class='btn btn-primary test-hub-logic-item-group-save']")
    .pause(500)
    //.click("(//span[@class='control-checkbox control-checkbox-dark'])[1]")
    .pause(500)
    .click("(//label[@class='control-checkbox control-checkbox-primary'])[1]")
    .pause(500)
    .click("(//label[@class='control-checkbox control-checkbox-primary'])[2]")
    .pause(500)
    .click("//input[@class='form-control ng-pristine ng-valid ng-valid-number']")
    .pause(500)
    .setValue("//input[@class='form-control ng-pristine ng-valid ng-valid-number']","1")
    .pause(500)
    .click("//label[@class='switcher ng-scope']")
    .pause(500)
    .click("//button[@class='btn btn-default pull-right test-hub-logic-save']")
    .pause(500)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/missionLogicSaved.png')
    .assert.visible("//button[@class='btn btn-default pull-right test-hub-logic-save']")
    .pause(2000)
  }
module.exports={
  signIn: signIn,
  clickAdminLinks: clickAdminLinks,
  missionLogic: missionLogic
//sharing: sharing
}
