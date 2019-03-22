Feature: Visitor can send message to admin

    As a Visitor
    In order to contact the admin in a simple way
    I would like to be able to send messages from the website

    Scenario: Visitor can successfully send a message
        Given I visit the site
        And I click on 'contact'
        And I fill in 'Name' field with 'Hanna'
        And I fill in 'Email' field with 'mail@mail.com'
        And I fill in 'Title' field with 'This is a title'
        And I fill in 'Content' field with 'This is some content'
        Then show me the page
        And I send away the message
        Then I should see 'Your message has been sent!'
        And I should see 'I will get back to you as soon as possible.'
