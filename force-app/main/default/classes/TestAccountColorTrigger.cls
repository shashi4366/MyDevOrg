@isTest
private class TestAccountColorTrigger {

    static testMethod void testBulkInsert() {

        List<account> accounts = new List<account>();

        Profile p = [select id from profile where name='Marketing User'];
        // create a user to run the test as
        User u = new User(alias = 'test123', email='test1234f@noeemail.com',
            emailencodingkey='UTF-8', lastname='Testing', languagelocalekey='en_US',
            localesidkey='en_US', profileid = p.Id, country='United States',
            Favorite_Color__c='Buttercup Yellow',
            timezonesidkey='America/Los_Angeles', username='test1234seee@noemail.com');
        insert u;

        Profile p1 = [select id from profile where name='Standard User'];
        // create a user to own the account
        User u1 = new User(alias = 'test123', email='test12345@noemail.com',
            emailencodingkey='UTF-8', lastname='Testing', languagelocalekey='en_US',
            localesidkey='en_US', profileid = p1.Id, country='United States',
            Favorite_Color__c='Pretty Pink',
            timezonesidkey='America/Los_Angeles', username='test1235465@noeeemail.com');
        insert u1;

        // add 200 accounts to the list to be inserted
        for (Integer i=0;i<200;i++) {

            Account a = new Account(
                Name = 'Test Account',
                OwnerId = u1.Id
            );
            accounts.add(a);

        }

        // Switch to the runtime context
        Test.startTest();  

        // run as a different user to test security and rights
        System.runAs(u) {
            insert accounts;
        }

        // Switch back to the original context
        Test.stopTest();     

        // query for all accounts created and assert that the color was added correctly
        for (Account acct : [Select Owner_Favorite_Color__c from Account Where OwnerId = :u1.Id])
            System.assertEquals(acct.Owner_Favorite_Color__c,'Pretty Pink');

    }
}