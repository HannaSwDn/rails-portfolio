Feature: Admin can see all messages

    Background:
        Given the following admin exists
            | email          | password |
            | admin@mail.com | password |

        And the following message exists
            | name  | email          | title       | content           |
            | Hanna | hanna@mail.com | Hello Hanna | This is a message |

    Scenario: Admin can see message
        Given I am logged in as Admin
        And I visit the site
        And I click on link 'Messages'
        Then I should see 'Hello Hanna'
        And I should see 'This is a message'
